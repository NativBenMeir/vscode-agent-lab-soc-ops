interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50" style={{ background: 'rgba(101, 67, 33, 0.6)' }}>
      <div className="rounded-xl p-6 max-w-xs w-full text-center shadow-xl animate-[bounce_0.5s_ease-out] coffee-stain coffee-ring" style={{ background: '#f5f1e8' }}>
        <div className="text-5xl mb-4">☕☕☕</div>
        <h2 className="text-4xl font-bold mb-2 handwritten-title" style={{ color: '#654321' }}>BINGO!</h2>
        <p className="mb-6" style={{ color: '#8B4513' }}>You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
          style={{ background: '#654321' }}
          onMouseDown={(e) => e.currentTarget.style.background = '#8B4513'}
          onMouseUp={(e) => e.currentTarget.style.background = '#654321'}
          onTouchStart={(e) => e.currentTarget.style.background = '#8B4513'}
          onTouchEnd={(e) => e.currentTarget.style.background = '#654321'}
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
