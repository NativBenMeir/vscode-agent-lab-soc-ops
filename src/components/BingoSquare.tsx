import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center rounded transition-all duration-150 select-none min-h-[60px] text-xs leading-tight';

  let bgColor = '#f5f1e8';
  let borderColor = '#C8A882';
  let textColor = '#654321';

  if (square.isMarked) {
    if (isWinning) {
      bgColor = '#f5deb8';
      borderColor = '#D4A574';
      textColor = '#654321';
    } else {
      bgColor = '#f5deb8';
      borderColor = '#C8A882';
      textColor = '#8B4513';
    }
  }

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${freeSpaceClasses} coffee-ring`}
      style={{ 
        background: bgColor, 
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: borderColor,
        color: textColor 
      }}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <svg className="absolute top-0.5 right-0.5 w-4 h-4" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#654321' }}>
          <ellipse cx="12" cy="12" rx="8" ry="10" />
          <path d="M12 6 Q 14 12 12 18" stroke="#8B4513" strokeWidth="1.5" fill="none"/>
        </svg>
      )}
    </button>
  );
}
