# sk-ticket-ios

Minimal React app that recreates the look of a Slovak transit ticket inside an iOS Messages-style conversation view.

## Overview

This project renders a fake ticket/chat screen made of reusable React components. The app generates several time entries, adds a unique message hash to each block, and redraws the list when the browser window regains focus.

The repository appears to be a small front-end experiment or UI clone rather than a full production service. It is deployed with GitHub Pages.

## Demo

- Live site: `https://wavehs.github.io/sk-ticket-ios`
- Repository: `https://github.com/wavehs/sk-ticket-ios`

## What the app does

- Shows a header, a list of message-like ticket blocks, and a footer.
- Builds ticket timestamps from predefined offsets plus one recent dynamic timestamp.
- Formats dates and times with `moment`, including Slovak locale support.
- Generates a random per-message hash with `randexp` so rendered items have unique React keys.
- Refreshes generated messages when the tab/window becomes focused again.

## Stack

- React 18
- react-scripts 5
- moment
- randexp
- gh-pages

## Project structure

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── divider/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── message_block/
│   │   ├── my_message/
│   │   └── their_message/
│   ├── util/
│   │   ├── hash.js
│   │   └── time.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── registerServiceWorker.js
├── package.json
├── package-lock.json
└── yarn.lock
```

## How it works

### `src/App.js`

The root component:

- creates a list of fake ticket/message time records,
- enriches every record with a generated hash,
- stores the result in component state,
- re-generates the list on window focus,
- renders the layout through `Header`, `MessageBlock`, and `Footer`.

### `src/util/time.js`

This utility:

- imports `moment` and the Slovak locale,
- defines several fixed ticket offsets,
- adds one recent timestamp based on the current time,
- returns formatted fields such as:
  - `date`
  - `divisorDate`
  - `startTime`
  - `endTime`
  - `receivedTime`

### `src/util/hash.js`

This utility creates a random message identifier with `randexp`, used as a React key for rendered blocks.

## Installation

### Prerequisites

- Node.js 18+ recommended
- npm

### Run locally

```bash
git clone https://github.com/wavehs/sk-ticket-ios.git
cd sk-ticket-ios
npm install
npm start
```

App runs in development mode at:

```text
http://localhost:3000
```

## Available scripts

```bash
npm start
npm run build
npm test
npm run deploy
```

### Script details

- `npm start` — starts the React development server.
- `npm run build` — creates a production build.
- `npm test` — runs tests through `react-scripts`.
- `npm run deploy` — builds the app and publishes `build/` to GitHub Pages.

## Deployment

The project is configured for GitHub Pages through the `homepage` field in `package.json`:

```json
"homepage": "https://wavehs.github.io/sk-ticket-ios"
```

To deploy:

```bash
npm run deploy
```

## Current limitations

- No backend, persistence, or real ticket validation logic.
- Uses class-based React instead of modern hooks.
- Includes both `package-lock.json` and `yarn.lock`; one should be removed for consistency.
- Uses `moment`, which is considered legacy for many modern front-end projects.
- `.env` exists in the repository root and should not be committed if it contains secrets.
- The current repository name can be mistaken for a native iOS project, while this is actually a web app.

## Suggested improvements

- Migrate from Create React App to Vite.
- Replace `moment` with `dayjs` or `date-fns`.
- Convert class components to function components with hooks.
- Add screenshots or GIF previews to this README.
- Document the exact purpose of the ticket mockup.
- Add linting and formatting (`eslint`, `prettier`).
- Add real tests for time generation and UI rendering.
- Remove tracked environment files and keep only `.env.example` if needed.

## Security note

If `.env` has ever contained real keys, tokens, or secrets, rotate them immediately and remove the file from version control history.

## License

No license file is currently included in the repository. By default, that means reuse rights are not explicitly granted.

## Author

GitHub: [@wavehs](https://github.com/wavehs)
