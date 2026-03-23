# Lukasz's Portfolio — macOS-style Browser

A portfolio website that mimics the macOS desktop experience in the browser. Built with React, TypeScript, and Vite.

**Live demo:** [https://browser-macos-app.vercel.app/](https://browser-macos-app.vercel.app/)

---

## About the project

This project presents a developer portfolio as an interactive macOS-style interface. Visitors use a menu bar, dock, and draggable windows to explore projects, resume, skills, and contact info—all within a single-page app that feels like a desktop environment.

---

## Features

- **macOS-style UI** — Menu bar with live date/time, dock with app icons and hover effects, and window controls (close / minimize / fullscreen).
- **Draggable windows** — All app windows can be dragged and reordered; focus and z-index are managed when you click a window.
- **Finder (Portfolio)** — File-explorer view with Favorites (Projects, Resume, Trash) and a “Work” folder. Double-click items to open:
  - **Folders** — Navigate into project folders.
  - **PDF** — Opens the Resume viewer.
  - **Markdown** — Renders README-style content in a dedicated window.
  - **Images** — Opens an image viewer (single or gallery).
  - **URLs / Figma links** — Open in a new tab.
- **Safari (Articles)** — “Browser” window showing developer experience: project cards with tech stack and key contributions.
- **Terminal (Skills)** — Terminal-style window listing tech stack by category (Frontend, Mobile, Styling, Dev Tools).
- **Contact** — Profile photo, email, and links to LinkedIn and GitHub.
- **Resume** — In-app PDF viewer for the resume (also openable from Finder).
- **Welcome section** — Animated title and subtitle with GSAP-based hover effects.

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** — Build and dev server
- **Tailwind CSS 4** — Styling
- **Zustand** (with Immer) — Window and location state
- **GSAP** (with Draggable) — Window drag-and-drop and welcome animations
- **Lucide React** — Icons
- **react-markdown** + **remark-gfm** — Markdown rendering
- **react-pdf** — PDF viewer
- **dayjs** — Date/time in the menu bar

---

## Getting started

### Prerequisites

- Node.js (v18+ recommended)
- npm (or pnpm / yarn)

### Install and run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) (or the URL shown in the terminal).

### Scripts

| Command             | Description                     |
| ------------------- | ------------------------------- |
| `npm run dev`       | Start Vite dev server           |
| `npm run build`     | Type-check and production build |
| `npm run preview`   | Preview production build        |
| `npm run lint`      | Run ESLint                      |
| `npm run typecheck` | Run TypeScript check            |
| `npm run check:all` | Lint + typecheck + cspell       |
| `npm run format`    | Format with Prettier            |
