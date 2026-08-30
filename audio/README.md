# Nordvei audio assets

Do not add audio downloaded from consumer websites, unofficial endpoints, videos, podcasts, or other sources without explicit redistribution rights.

The course expects MP3 files generated through the official Google Cloud Text-to-Speech API. Google documents that audio created with Cloud Text-to-Speech may be used to power applications and media, subject to the Google Cloud Platform Terms of Service and applicable law:

- https://docs.cloud.google.com/text-to-speech/docs/basics
- https://cloud.google.com/terms

## Generate the course audio

1. Create or select a Google Cloud project.
2. Enable billing and the Cloud Text-to-Speech API.
3. Install and initialize the Google Cloud CLI.
4. Authenticate locally:

   ```powershell
   gcloud auth application-default login
   ```

5. From the repository root, run:

   ```powershell
   node scripts/generate-google-tts.mjs
   ```

To keep existing files and generate only newly added tracks, run:

```powershell
node scripts/generate-google-tts.mjs --only-missing
```

To regenerate only the 30 pronunciation-lab recordings after changing their phrasing or punctuation, run:

```powershell
node scripts/generate-google-tts.mjs --pronunciation-only
```

To regenerate the 30 dialogues with separate female and male Norwegian voices:

```powershell
node scripts/generate-google-tts.mjs --dialogues-only
```

To generate only the 90 individual grammar examples:

```powershell
node scripts/generate-google-tts.mjs --grammar-only
```

To regenerate all instructional audio except the multi-speaker dialogues:

```powershell
node scripts/generate-google-tts.mjs --non-dialogues-only
```

The generator uses the supported male Norwegian Bokmål voice `nb-NO-Wavenet-G` for general instructional audio. Dialogues use `nb-NO-Wavenet-F` for female speakers and `nb-NO-Wavenet-G` for male speakers. To select another supported main voice for a generation run:

```powershell
$env:NORDVEI_TTS_VOICE = "nb-NO-Wavenet-F"
node scripts/generate-google-tts.mjs
```

The script defines 531 tracks: general practice and reading, 30 A1 unit dialogues, 90 A1 mastery recordings covering graded reading, pronunciation and dictation, 90 individual pronunciation examples, 90 individual grammar examples, and 229 A1 vocabulary recordings. Each vocabulary recording reads the complete word or expression and then its example sentence. The script also creates `provenance.json` next to the MP3 files. Commit that file with the generated audio so the source, voices, date, and applicable terms remain auditable.

The course player uses `0.85×` as the default beginner speed for instructional audio. Where a speed selector is available, learners can also choose `0.7×` for careful listening or `1×` for natural-speed practice. Recorded learner responses always play at their original `1×` speed.

Never commit Google credentials, access tokens, API keys, or service-account JSON files.
