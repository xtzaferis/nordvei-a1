import { execFileSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
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

const generalTracks = [
  ["a1-listening.mp3", "Hei, jeg heter Maja. Hyggelig å møte deg!"],
  ["a2-listening.mp3", "Bussen er dessverre forsinket i dag."],
  ["b1-listening.mp3", "Fleksibilitet er en fordel, men det krever gode rutiner."],
  ["b2-listening.mp3", "Utviklingen gir nye muligheter, samtidig som den skaper betydelige utfordringer."],
  ["c1-listening.mp3", "Resonnementet er tilsynelatende overbevisende, men premissene tåler nærmere gransking."]
];

const a1Tracks = globalThis.A1_COURSE.units.map((unit) => [
  `a1-${unit.id}.mp3`,
  unit.dialogue.map((line) => line[1]).join(" ")
]);
const tracks = [...generalTracks, ...a1Tracks];

if (process.argv.includes("--dry-run")) {
  process.stdout.write(`Validated ${tracks.length} tracks for ${voice.name}. No API request was sent.\n`);
  process.exit(0);
}

function getAccessToken() {
  if (process.env.GOOGLE_CLOUD_ACCESS_TOKEN) {
    return process.env.GOOGLE_CLOUD_ACCESS_TOKEN.trim();
  }

  try {
    return execFileSync(
      process.platform === "win32" ? "gcloud.cmd" : "gcloud",
      ["auth", "application-default", "print-access-token"],
      { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }
    ).trim();
  } catch {
    throw new Error(
      "No Google Cloud access token is available. Run `gcloud auth application-default login` or set GOOGLE_CLOUD_ACCESS_TOKEN."
    );
  }
}

async function synthesize(fileName, text, accessToken) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
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
const accessToken = getAccessToken();

for (const [fileName, text] of tracks) {
  await synthesize(fileName, text, accessToken);
}

const provenance = {
  provider: "Google Cloud Text-to-Speech",
  serviceEndpoint: endpoint,
  languageCode: voice.languageCode,
  voiceName: voice.name,
  generatedAt: new Date().toISOString(),
  trackCount: tracks.length,
  generator: "scripts/generate-google-tts.mjs",
  terms: "https://cloud.google.com/terms",
  documentation: "https://docs.cloud.google.com/text-to-speech/docs/basics"
};

await writeFile(
  path.join(audioDirectory, "provenance.json"),
  `${JSON.stringify(provenance, null, 2)}\n`,
  "utf8"
);
process.stdout.write(`Generated ${tracks.length} licensed-project audio files and provenance.json\n`);
