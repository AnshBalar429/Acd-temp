# CodeNeuron

A modern web app for browsing, searching, and sharing useful code snippets across various programming languages and topics.

## Features

- 🗂️ Categorized code snippets (Data Structures, Algorithms, Math, etc.)
- 🔍 Fast search and filtering by category or tags
- 🌙 Light/dark theme toggle
- 📋 Easy copy-to-clipboard for code blocks
- 📦 Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [PrismJS](https://prismjs.com/) for syntax highlighting
- ⚡ Responsive and mobile-friendly UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/codeneuron.git
   cd codeneuron
   ```

2. Install dependencies:
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```sh
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- [`app/`](app/) — Next.js app directory (pages, layouts, etc.)
- [`components/`](components/) — Reusable UI and app components
- [`lib/`](lib/) — Data, types, and utility functions
- [`hooks/`](hooks/) — Custom React hooks
- [`public/`](public/) — Static assets
- [`styles/`](styles/) — Global and component styles

## Customization

- Add or edit code snippets in [`lib/data.ts`](lib/data.ts)
- Update categories in [`lib/data.ts`](lib/data.ts)
- Adjust theme and colors in [`tailwind.config.ts`](tailwind.config.ts) and [`app/globals.css`](app/globals.css)

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Lint code

## License

MIT

---

© 2025 CodeNeuron. All rights reserved.
