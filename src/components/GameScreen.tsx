import { useState } from 'react';
import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';
import { jokes } from '../data/jokes';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  const [jokeIndex, setJokeIndex] = useState(0);

  const handleSquareClick = (squareId: number) => {
    onSquareClick(squareId);
    setJokeIndex((prev) => (prev + 1) % jokes.length);
  };

  return (
    <div className="flex flex-col min-h-full coffee-texture">
      {/* Header */}
      <header className="flex items-center justify-between p-3 coffee-stain" style={{ background: '#f5f1e8', borderBottom: '2px solid #C8A882' }}>
        <button
          onClick={onReset}
          className="text-sm px-3 py-1.5 rounded transition-colors"
          style={{ color: '#8B4513' }}
          onMouseDown={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.1)'}
          onMouseUp={(e) => e.currentTarget.style.background = 'transparent'}
        >
          ← Back
        </button>
        <h1 className="font-bold handwritten-title text-2xl" style={{ color: '#654321' }}>Soc Ops</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-sm py-2 px-4" style={{ color: '#8B4513' }}>
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="text-center py-2 font-semibold text-sm" style={{ background: '#f5deb8', color: '#654321' }}>
          ☕ BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={handleSquareClick}
        />
      </div>

      {/* Joke Display */}
      <div className="p-4 text-center coffee-stain coffee-ring" style={{ background: '#f5f1e8', borderTop: '2px solid #C8A882' }}>
        <p className="text-sm" style={{ color: '#8B4513' }}>
          ☕ {jokes[jokeIndex]}
        </p>
      </div>
    </div>
  );
}
