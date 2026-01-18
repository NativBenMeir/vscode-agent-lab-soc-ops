interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 coffee-texture">
      <div className="text-center max-w-sm">
        <div className="mb-2 text-5xl">☕</div>
        <h1 className="text-5xl font-bold mb-2 handwritten-title" style={{ color: '#654321' }}>
          Soc Ops
        </h1>
        <p className="text-xl mb-8" style={{ color: '#8B4513' }}>Social Bingo</p>
        
        <div className="rounded-lg p-6 shadow-lg coffee-ring mb-8 coffee-stain" style={{ background: '#f5f1e8' }}>
          <h2 className="font-semibold mb-3 handwritten-title text-2xl" style={{ color: '#654321' }}>How to play</h2>
          <ul className="text-left text-sm space-y-2" style={{ color: '#8B4513' }}>
            <li>☕ Find people who match the questions</li>
            <li>☕ Tap a square when you find a match</li>
            <li>☕ Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-md"
          style={{ background: '#654321' }}
          onMouseDown={(e) => e.currentTarget.style.background = '#8B4513'}
          onMouseUp={(e) => e.currentTarget.style.background = '#654321'}
          onTouchStart={(e) => e.currentTarget.style.background = '#8B4513'}
          onTouchEnd={(e) => e.currentTarget.style.background = '#654321'}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
