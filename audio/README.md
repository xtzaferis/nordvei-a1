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

The generator uses the supported Norwegian Bokmål voice `nb-NO-Wavenet-F` by default. To select another supported Google Cloud voice for the generation run:

```powershell
$env:NORDVEI_TTS_VOICE = "nb-NO-Wavenet-G"
node scripts/generate-google-tts.mjs
```

The script creates 40 tracks: 30 A1 unit dialogues, 5 level-practice recordings, and 5 reading-passage recordings. It also creates `provenance.json` next to the MP3 files. Commit that file with the generated audio so the source, voice, date, and applicable terms remain auditable.

Never commit Google credentials, access tokens, API keys, or service-account JSON files.
