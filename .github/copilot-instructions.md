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

See [.github/instructions/frontend-design.instructions.md](.github/instructions/frontend-design.instructions.md) for design philosophy.
