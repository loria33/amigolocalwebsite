# AmigoLocal website

React/TypeScript website for the AmigoLocal iOS and Android app.

## Run and verify

```sh
npm install
npm start
npm test -- --watchAll=false --runInBand
npm run build
node scripts/generate-legal.cjs --check
```

Netlify publishes `build/`. Its SPA fallback supports direct visits to `/privacy`, `/terms`, and `/support`. Assets use absolute paths so nested routes load correctly. Node 22 is configured for the installed React Router version. Jest's module mapping supports React Router's `dom` export with the existing Create React App test runner; Watchman is disabled for portable test runs.

## Store links

The existing iOS link is preserved in `src/App.tsx`. Set `REACT_APP_GOOGLE_PLAY_URL` to the confirmed Google Play listing URL in `.env.local` (see `.env.example`) or the Netlify build environment, then rebuild. Without that setting, the Android button says “Available for Android / Get in touch” and opens a support email; it does not imply that a store link has been verified.

## App policies

Edit `src/legal.json` for both policies. React renders that same content at `/privacy` and `/terms`. `npm run generate:legal` produces standalone HTML that works without JavaScript:

- `/privacy-standalone.html`
- `/eula-standalone.html`

These exact URLs are already referenced by `AmigoLocal/utils/subscriptionConfig.ts`. The build regenerates the documents automatically; `public/legal.css` styles them independently of the marketing site. Netlify serves the real HTML files before its SPA fallback.

## Content sources

Website descriptions were checked against the adjacent app's implementation:

- `App.tsx`, `ThreadsDrawer.tsx`: local chat and saved threads.
- `utils/VoiceService.ts`, `dictate.tsx`: speech input and read-aloud behavior. Speech recognition depends on device services; do not promise that every voice interaction stays offline.
- `EmailAssistant.tsx`: guided subject/body dictation, polishing, copying, and read-back. Sending happens outside AmigoLocal after the user copies the draft.
- `NotesScreen.tsx`, `utils/notesStore.ts`: locally saved notes and AI polishing.
- `SpecialAmigo.tsx` and native PDF modules: text and PDF questions. DOCX parsing is a placeholder and is not advertised.
- `constants.ts`: Smarty (1.1 GB), Gema (1.6 GB), TriGema (2.8 GB).
- `utils/freeTierConfig.ts`, `utils/subscriptionConfig.ts`: daily free allowances, Premium access, seven-day local trial, and subscriptions. Prices are deliberately left to store checkout.

All four original September 26, 2026 simulator screenshots in `public/` appear in the gallery. The conversation screenshot is also used in the hero. Existing image files remain available.
