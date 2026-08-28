# Content and audio notice

## Course content

The Norwegian lesson text, dialogues, exercises, Greek translations, and interface copy in this repository are original Nordvei project content. Do not add copied textbook, news, podcast, video, or other third-party material unless its license explicitly permits the intended use and redistribution and the required attribution is recorded here.

## Synthetic audio

The committed MP3 files are synthetic speech generated from the project's Norwegian lesson text through the official Google Cloud Text-to-Speech API. They are not recordings copied from native speakers, consumer websites, videos, podcasts, or unofficial text-to-speech endpoints.

Google documents that audio files created with Cloud Text-to-Speech may be used in applications and media, subject to the Google Cloud Platform Terms of Service and applicable law:

- [Cloud Text-to-Speech basics](https://docs.cloud.google.com/text-to-speech/docs/basics)
- [Google Cloud Terms of Service](https://cloud.google.com/terms)

The provider, voice, generation date, track count, and relevant links are recorded in [`audio/provenance.json`](audio/provenance.json). Generation instructions and asset-handling rules are in [`audio/README.md`](audio/README.md).

Google Cloud and Text-to-Speech are Google services and trademarks. Their mention identifies the audio-generation service and does not imply that Google created, reviewed, endorsed, or licenses the Nordvei course content.

## Device voice fallback

When a generated MP3 is unavailable, the site can request a Norwegian speech-synthesis voice installed in the learner's browser or operating system. That fallback is played locally and is not distributed as part of this repository.

## Learner microphone recordings

Speaking exercises use the browser's MediaRecorder capability after the learner grants microphone permission. Recordings are held temporarily in browser memory so the learner can listen and record again. Nordvei does not upload or permanently store these recordings, and they are discarded when the exercise is reset or the page is refreshed or closed.
