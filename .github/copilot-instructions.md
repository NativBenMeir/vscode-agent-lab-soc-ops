# Copilot Instructions: Soc Ops Bingo Game

## Development Checklist
Before submitting changes, run:
- [ ] `npm run lint` - ESLint validation
- [ ] `npm run build` - TypeScript check + production build
- [ ] `npm run test` - Vitest unit tests

## Overview
React 19 + TypeScript + Vite social bingo game. Players find people matching questions to complete 5-in-a-row patterns. Features localStorage persistence and mobile-first design.

## Architecture
**State**: `useBingoGame` hook ([src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts)) owns all state. Pure functions in [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts) handle game logic (Fisher-Yates shuffle, win detection across 12 lines). Components are presentational only.

**Core types** ([src/types/index.ts](src/types/index.ts)):
- `BingoSquareData`: `id` (0-24), `text`, `isMarked`, `isFreeSpace`
- `BingoLine`: `type`, `index`, `squares[]` (5 squares per line)
- Board: 5×5 grid, center (index 12) always FREE SPACE, pre-marked, immutable

**Persistence**: localStorage with `STORAGE_VERSION` - increment when changing `StoredGameData` structure. Validate with `validateStoredData()` pattern. SSR guards required (`typeof window`).

## Key Commands
```bash
npm run dev    # Vite dev server with HMR
npm run test   # Vitest (runs once, not watch mode)
```
Auto-deploys to GitHub Pages on `main` push. Vite uses `VITE_REPO_NAME` env for base path.

## Code Patterns
**Tailwind 4**: Theme vars in [src/index.css](src/index.css) - `bg-marked`, `border-marked-border`, `bg-amber-200` (winning). See [.github/instructions/tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md).

**TypeScript**: Export types from [src/types/index.ts](src/types/index.ts), use `interface` for public APIs, runtime validation for localStorage.

**Immutability**: `{ ...square, isMarked: !square.isMarked }` - never mutate. `toggleSquare` enforces `!square.isFreeSpace` check.

## Common Changes
- **Add questions**: Edit [src/data/questions.ts](src/data/questions.ts) array (shuffled to 24/game)
- **Win conditions**: Modify `getWinningLines()` in [bingoLogic.ts](src/utils/bingoLogic.ts)
- **Board size**: Not supported (5×5 hardcoded in BOARD_SIZE, CENTER_INDEX, line detection)

## Design Guide: Cozy Coffee Shop Theme

**Typography:**
- Titles/Headers: `Caveat` (handwritten) via `.handwritten-title` class or `font-family: var(--font-family-handwritten)`
- Body text: `Patrick Hand` (casual handwritten) — set globally on `body`
- Fonts imported from Google Fonts in [index.html](index.html)

**Color Palette** (defined in [src/index.css](src/index.css) `@theme`):
- `--color-coffee-dark: #654321` — Dark roast (primary buttons, titles)
- `--color-coffee-medium: #8B4513` — Medium roast (secondary text, hover states)
- `--color-coffee-light: #A0522D` — Latte tones
- `--color-latte: #C8A882` — Warm wheat/borders
- `--color-paper: #faf8f3` — Cream paper background
- `--color-paper-aged: #f5f1e8` — Aged paper (cards, modals)

**Texture Utilities:**
- `.coffee-texture` — Subtle line-pattern grain over cream background
- `.coffee-stain` — Layered radial gradients simulating coffee stains
- `.coffee-ring` — Inset shadow + subtle drop shadow for depth
- Apply layered: `coffee-texture coffee-stain` for maximum effect

**Iconography:**
- Coffee cup emoji: ☕ (U+2615) for decorative elements
- Marked squares: Custom coffee bean SVG (ellipse with center line stroke)
- No icon libraries — inline SVG or Unicode only

**Component Patterns:**
- Backgrounds: Use `coffee-texture` on main containers
- Cards/Modals: `coffee-stain` + `coffee-ring` + `#f5f1e8` background
- Buttons: `#654321` background, transition to `#8B4513` on press (via inline event handlers for reliable touch)
- Interactive states: Prefer inline styles for color changes due to Tailwind 4 limitations with active states

**Maintaining the aesthetic:**
- Keep all colors warm (browns, creams, wheat tones)
- Avoid pure black/white — use coffee-dark and paper colors
- Handwritten fonts for personality, but maintain readability
- Subtle textures — don't overpower content (opacity 0.02-0.08 for patterns)

See [.github/instructions/frontend-design.instructions.md](.github/instructions/frontend-design.instructions.md) for design philosophy.
