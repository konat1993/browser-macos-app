# React Native Todo App

A cross-platform todo app built with **Expo** and **React Native**, using **Convex** as the backend. It supports iOS, Android, and web, with a tabbed UI (Todos and Settings).

## What it does

- **Todos tab**
  - Add new todos via an input at the top.
  - Mark todos as completed or active with a checkbox.
  - Edit todo text inline (tap edit, change text, save or cancel).
  - Delete todos with a confirmation dialog.
  - Empty state when there are no todos.
  - Gradient background and theme-aware styling.
- **Settings tab**
  - **Progress stats**: total todos, completed count, and active count.
  - **Preferences**: theme mode (light/dark), notifications toggle (only UI), and auto-sync toggle (only UI).
  - **Danger zone**: delete-all-todos / reset app (with confirmation).
- **Tech**
  - [Expo](https://expo.dev) (SDK 54) with [Expo Router](https://docs.expo.dev/router/introduction/) for file-based routing.
  - [Convex](https://convex.dev) for backend: todos are stored and synced in Convex (queries and mutations in `convex/`).
  - Theming via a custom `useTheme` hook with light/dark support.
  - TypeScript throughout.

## Prerequisites

- **Node.js** (LTS recommended; project uses React 19 and Expo 54).
- **npm** (or yarn/pnpm).
- **Expo Go** on a device (optional), or **iOS Simulator** / **Android Emulator** for running the app.
- A **Convex** account and project for the backend (see below).

## Running the app locally

### 1. Clone and install

```bash
git clone <your-repo-url>
cd react-native-todo-app
npm install
```

### 2. Set up Convex

The app expects a Convex backend and the Convex deployment URL in the environment.

1. Sign up at [convex.dev](https://convex.dev) and install the Convex CLI if needed.
2. Log in and create/link a Convex project (from the project root):

```bash
 npx convex dev
```

On first run this will prompt you to log in and create or link a project. It will push the schema and functions from `convex/schema.ts` and `convex/todos.ts` and give you a deployment URL. 3. Create a `.env.local` file in the project root with your Convex URL:

```bash
 EXPO_PUBLIC_CONVEX_URL=https://<your-deployment>.convex.cloud
```

Replace `<your-deployment>` with the URL shown by `npx convex dev` or from the [Convex dashboard](https://dashboard.convex.dev). 4. Keep the Convex dev server running in a separate terminal while developing (so the backend is available):

```bash
 npx convex dev
```

### 3. Start the Expo app

In another terminal:

```bash
npm start
# or
npx expo start
```

Then:

- Press **i** for iOS Simulator, **a** for Android Emulator, or scan the QR code with **Expo Go** on your device.
- For web: `npx expo start --web` or choose “Run in web browser” from the dev tools.

## Project structure (overview)

- `**app/`\*\* – Expo Router screens: `_layout.tsx` (Convex + theme providers), `(tabs)/` with `index.tsx` (Todos) and `settings.tsx` (Settings).
- `**components/**` – UI: `Header`, `TodoInput`, `TodoItem`, `EmptyState`, `LoadingSpinner`, `ProgressStats`, `PreferencesSettings`, `DangerZone`, `SettingsSection`, `SettingsSwitchItem`, etc.
- `**convex/**` – Convex schema (`schema.ts`) and todo API (`todos.ts`: get, add, toggle, delete, update, deleteAll).
- `**hooks/**` – `useTheme`, `useTodoActions`.
- `**styles/**` – Theme-based style factories for home and settings.
- `**types/**` – Shared TypeScript types.

## Environment variables

| Variable                 | Required | Description                        |
| ------------------------ | -------- | ---------------------------------- |
| `EXPO_PUBLIC_CONVEX_URL` | Yes      | Convex deployment URL for the app. |

Without `EXPO_PUBLIC_CONVEX_URL`, the app will throw at startup. Use `.env.local` (or another Expo-supported env file) and keep it out of version control.

## Scripts

| Command                | Description                    |
| ---------------------- | ------------------------------ |
| `npm start`            | Start Expo dev server          |
| `npm run ios`          | Start with iOS simulator       |
| `npm run android`      | Start with Android emulator    |
| `npm run web`          | Start with web                 |
| `npm run lint`         | Run ESLint                     |
| `npm run lint:fix`     | Run ESLint with auto-fix       |
| `npm run format`       | Format with Prettier           |
| `npm run format:check` | Check formatting with Prettier |

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Convex documentation](https://docs.convex.dev/)
