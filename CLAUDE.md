# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, dark-tech portfolio built with Astro and Tailwind CSS v4. Content is centralized in one configuration file; the visual system uses a cosmic backdrop, glass panels, and a responsive Bento layout.

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS v4**: Utility-first CSS framework using the new @tailwindcss/vite plugin
- **TypeScript**: For type-safe configuration
- **Tabler Icons**: Icon library

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

The project follows a component-based architecture with all customization centralized in `src/config.ts`:

- **Components** (`src/components/`): `Header` (fixed top navigation and focus-trapped mobile drawer), `Hero` (profile and Bento dashboard), `Projects`, `Experience`, `Essays` (latest-note cards and archive link), `Achievements` (interview-oriented evidence cards), `About` (profile and education), and `Footer`
- **Main Layout** (`src/pages/index.astro`): Single-page, full-width layout with a two-column hero, Bento dashboard, and anchored project, experience, essays, achievements, and about sections.
- **Essay Content** (`src/content/essays/`): Markdown notes managed through an Astro content collection (`src/content.config.ts`). Each note has `title`, `publishedAt`, `summary`, `tags`, and `draft` frontmatter; `template.md` is a draft-only starter. Routes are `src/pages/essays/index.astro` (archive) and `src/pages/essays/[slug].astro` (article), wrapped in the shared `src/layouts/PageFrame.astro`.
- **Design System** (`src/styles/global.css`): Dark purple/cyan theme with CSS custom properties, cosmic grid/glows, glass panels, shared typography, button, chip, reveal, and `.essay-content` article typography styles.
- **Configuration** (`src/config.ts`): Single source of truth for all content and customization

### Key Architectural Decisions

1. **Single Configuration File**: Core profile, project, experience, education, and skill content is managed through `src/config.ts`. Essays are an exception because they are long-form Markdown rather than structured summary data.
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Accent Color System**: Single `accentColor` in config propagates throughout the site via CSS custom properties

## Important Implementation Details

- The site uses Tailwind CSS v4 with the Vite plugin configuration
- No linting or testing framework is currently configured
- All components are in `.astro` format (not React/Vue/etc)
- The project uses Sora, Noto Sans SC, and IBM Plex Mono loaded from Google Fonts
- Social links in the config are all optional and will conditionally render

## Working with Components

When modifying components:
1. Components read directly from the imported `siteConfig` object
2. Use Tailwind utility classes for styling
3. Maintain the existing monospace font aesthetic
4. Use Tabler Icons for consistency with existing icons

## Configuration Structure

The `src/config.ts` exports a `siteConfig` object with these sections:
- Basic info: name, title, description, accentColor
- Social links: email, linkedin, twitter, github (all optional)
- aboutMe: string
- skills: string[]
- projects: array of {name, description, link, skills}
- experience: array of {company, title, dateRange, bullets}
- education: array of {school, degree, dateRange, achievements}
