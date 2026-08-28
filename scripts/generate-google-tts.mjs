import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import os from "node:os";
import path from "node:path";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const audioDirectory = path.join(projectDirectory, "audio");
const endpoint = "https://texttospeech.googleapis.com/v1/text:synthesize";
const voice = {
  languageCode: "nb-NO",
  name: process.env.NORDVEI_TTS_VOICE || "nb-NO-Wavenet-F"
};

globalThis.window = globalThis;
await import(pathToFileURL(path.join(projectDirectory, "curriculum", "a1-course.js")).href);
await import(pathToFileURL(path.join(projectDirectory, "curriculum", "a1-units-11-20.js")).href);
await import(pathToFileURL(path.join(projectDirectory, "curriculum", "a1-units-21-30.js")).href);
await import(pathToFileURL(path.join(projectDirectory, "curriculum", "a1-mastery.js")).href);

const generalTracks = [
  ["a1-listening.mp3", "Hei, jeg heter Maja. Hyggelig å møte deg!"],
  ["a2-listening.mp3", "Bussen er dessverre forsinket i dag."],
  ["b1-listening.mp3", "Fleksibilitet er en fordel, men det krever gode rutiner."],
  ["b2-listening.mp3", "Utviklingen gir nye muligheter, samtidig som den skaper betydelige utfordringer."],
  ["c1-listening.mp3", "Resonnementet er tilsynelatende overbevisende, men premissene tåler nærmere gransking."]
];

const readingTracks = [
  ["a1-reading.mp3", "Maja bor i Bergen. Hun jobber på et lite hotell. Hver morgen tar hun bussen til jobb. Etter jobb liker hun å gå en tur ved sjøen."],
  ["a2-reading.mp3", "I går skulle Amir møte en venn på kafé. Bussen var forsinket, så han sendte en melding. Vennen ventet og bestilte kaffe til dem begge."],
  ["b1-reading.mp3", "Flere norske bedrifter tilbyr nå fleksibel arbeidstid. Mange ansatte setter pris på friheten, men noen savner tydeligere grenser mellom arbeid og fritid."],
  ["b2-reading.mp3", "Selv om digitaliseringen har gjort offentlige tjenester mer tilgjengelige, risikerer enkelte grupper å falle utenfor. Utfordringen er derfor ikke bare teknologisk, men også sosial."],
  ["c1-reading.mp3", "Debatten preges ofte av en kunstig motsetning mellom økonomisk vekst og miljøhensyn. En mer fruktbar tilnærming ville være å undersøke hvilke former for verdiskaping som faktisk kan forenes med langsiktig bærekraft."]
];

const a1Tracks = globalThis.A1_COURSE.units.map((unit) => [
  `a1-${unit.id}.mp3`,
  unit.dialogue.map((line) => line[1]).join(" ")
]);
const joinSpeechExamples = (examples) => examples
  .map((example) => {
    const text = example.trim();
    return /[.!?…]$/u.test(text) ? text : `${text}.`;
  })
  .join(" ");
const masteryTracks = globalThis.A1_MASTERY.units.flatMap((unit) => [
  [`a1-${unit.id}-reading.mp3`, unit.reading.text],
  [`a1-${unit.id}-pronunciation.mp3`, joinSpeechExamples(unit.pronunciation.examples)],
  [`a1-${unit.id}-dictation.mp3`, unit.dictation.text]
]);
const pronunciationExampleTracks = globalThis.A1_MASTERY.units.flatMap((unit) =>
  unit.pronunciation.examples.map((example, index) => [
    `a1-${unit.id}-pronunciation-${index + 1}.mp3`,
    example.trim()
  ])
);
const vocabularyItems = [...new Map(
  globalThis.A1_COURSE.units
    .flatMap((unit) => unit.vocabulary)
    .map(([word, , example]) => [word.toLocaleLowerCase("nb-NO"), { word, example }])
).values()];
const vocabularyTracks = vocabularyItems.map(({ word, example }, index) => [
  `a1-vocab-${String(index + 1).padStart(3, "0")}.mp3`,
  `${word}. ${example}`
]);
const tracks = [...generalTracks, ...readingTracks, ...a1Tracks, ...masteryTracks, ...pronunciationExampleTracks, ...vocabularyTracks];
const generationTracks = process.argv.includes("--pronunciation-only")
  ? tracks.filter(([fileName]) => fileName.includes("-pronunciation"))
  : tracks;

if (process.argv.includes("--dry-run")) {
  process.stdout.write(`Validated ${tracks.length} tracks for ${voice.name}; ${generationTracks.length} selected. No API request was sent.\n`);
  process.exit(0);
}

function getAdcPath() {
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    return process.env.GOOGLE_APPLICATION_CREDENTIALS;
  }

  return process.platform === "win32"
    ? path.join(process.env.APPDATA || path.join(os.homedir(), "AppData", "Roaming"), "gcloud", "application_default_credentials.json")
    : path.join(process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config"), "gcloud", "application_default_credentials.json");
}

async function getAccessTokenFromAdc() {
  const credentials = JSON.parse(await readFile(getAdcPath(), "utf8"));
  if (credentials.type !== "authorized_user") {
    throw new Error(`Unsupported ADC credential type: ${credentials.type || "unknown"}`);
  }

  const response = await fetch(credentials.token_uri || "https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: credentials.client_id,
      client_secret: credentials.client_secret,
      refresh_token: credentials.refresh_token,
      grant_type: "refresh_token"
    })
  });

  if (!response.ok) {
    throw new Error(`ADC token refresh failed: ${response.status} ${await response.text()}`);
  }

  const result = await response.json();
  if (!result.access_token) {
    throw new Error("ADC token refresh returned no access token.");
  }

  return {
    accessToken: result.access_token,
    quotaProject: credentials.quota_project_id
  };
}

async function getGoogleAuth() {
  if (process.env.GOOGLE_CLOUD_ACCESS_TOKEN) {
    return {
      accessToken: process.env.GOOGLE_CLOUD_ACCESS_TOKEN.trim(),
      quotaProject: process.env.GOOGLE_CLOUD_QUOTA_PROJECT || process.env.GOOGLE_CLOUD_PROJECT
    };
  }

  try {
    return await getAccessTokenFromAdc();
  } catch (adcError) {
    try {
      const command = process.platform === "win32" ? "gcloud.cmd" : "gcloud";
      return {
        accessToken: execFileSync(command, ["auth", "application-default", "print-access-token"], {
          encoding: "utf8",
          stdio: ["ignore", "pipe", "pipe"],
          shell: process.platform === "win32"
        }).trim(),
        quotaProject: process.env.GOOGLE_CLOUD_QUOTA_PROJECT || process.env.GOOGLE_CLOUD_PROJECT
      };
    } catch (gcloudError) {
      throw new Error(
        `No Google Cloud access token is available. ADC error: ${adcError.message}. gcloud error: ${gcloudError.message}`
      );
    }
  }
}

async function synthesize(fileName, text, auth) {
  const headers = {
    Authorization: `Bearer ${auth.accessToken}`,
    "Content-Type": "application/json"
  };
  if (auth.quotaProject) {
    headers["x-goog-user-project"] = auth.quotaProject;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      input: { text },
      voice,
      audioConfig: { audioEncoding: "MP3", speakingRate: 0.92, pitch: 0 }
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Google Cloud TTS failed for ${fileName}: ${response.status} ${details}`);
  }

  const result = await response.json();
  if (!result.audioContent) {
    throw new Error(`Google Cloud TTS returned no audio for ${fileName}.`);
  }

  await writeFile(path.join(audioDirectory, fileName), Buffer.from(result.audioContent, "base64"));
  process.stdout.write(`Generated ${fileName}\n`);
}

await mkdir(audioDirectory, { recursive: true });
const auth = await getGoogleAuth();
const onlyMissing = process.argv.includes("--only-missing");
let generatedCount = 0;
let skippedCount = 0;

for (const [fileName, text] of generationTracks) {
  if (onlyMissing && existsSync(path.join(audioDirectory, fileName))) {
    skippedCount++;
    continue;
  }
  await synthesize(fileName, text, auth);
  generatedCount++;
}

const provenance = {
  provider: "Google Cloud Text-to-Speech",
  serviceEndpoint: endpoint,
  languageCode: voice.languageCode,
  voiceName: voice.name,
  generatedAt: new Date().toISOString(),
  trackCount: tracks.length,
  trackBreakdown: {
    generalPractice: generalTracks.length,
    levelReadings: readingTracks.length,
    a1Dialogues: a1Tracks.length,
    a1MasteryActivities: masteryTracks.length,
    a1PronunciationExamples: pronunciationExampleTracks.length,
    a1Vocabulary: vocabularyTracks.length
  },
  generator: "scripts/generate-google-tts.mjs",
  terms: "https://cloud.google.com/terms",
  documentation: "https://docs.cloud.google.com/text-to-speech/docs/basics"
};

await writeFile(
  path.join(audioDirectory, "provenance.json"),
  `${JSON.stringify(provenance, null, 2)}\n`,
  "utf8"
);
process.stdout.write(`Audio build complete: ${generatedCount} generated, ${skippedCount} existing tracks kept, ${generationTracks.length} selected, ${tracks.length} course tracks total.\n`);
