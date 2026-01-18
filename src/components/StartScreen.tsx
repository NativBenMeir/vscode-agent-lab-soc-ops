import { useState } from 'react';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Inline styles for button states (Tailwind 4 limitation)
  const buttonStyle = {
    backgroundColor: isPressed 
      ? 'var(--color-accent-light)' 
      : 'var(--color-accent)',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-coffee-bg">
      <div className="text-center max-w-sm">
        {/* Title with animation and text shadow */}
        <div className="relative mb-2" style={{
          animation: 'fadeInSlideDown 600ms ease-out',
        }}>
          <h1 
            className="text-5xl font-display font-bold text-coffee-dark mb-1"
            style={{
              textShadow: '1px 1px 0 rgba(93, 64, 55, 0.2)',
            }}
          >
            Soc Ops
          </h1>
          {/* SVG hand-drawn underline */}
          <svg
            className="w-full h-3 mt-1"
            viewBox="0 0 200 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M2 8C20 4 40 6 60 5C80 4 100 6 120 5C140 4 160 7 180 6C185 5.5 190 6 198 7"
              stroke="var(--color-coffee-dark)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Subtitle with animation */}
        <p 
          className="text-xl font-display text-coffee-medium mb-2"
          style={{
            animation: 'fadeIn 600ms ease-out 150ms both',
          }}
        >
          Social Bingo
        </p>
        
        <p 
          className="text-sm text-coffee-light mb-8"
          style={{
            animation: 'fadeIn 600ms ease-out 150ms both',
          }}
        >
          A Social Icebreaker Game
        </p>
        
        {/* Instructions card with animation and hover effect */}
        <div 
          className="bg-white rounded-lg p-6 shadow-sm border border-coffee-light/20 mb-8 transition-shadow duration-300 hover:shadow-md"
          style={{
            animation: 'fadeInSlideUp 600ms ease-out 300ms both',
          }}
        >
          <h2 className="font-display font-semibold text-coffee-dark mb-4 text-lg">How to play</h2>
          <ul className="text-left text-coffee-medium space-y-3 text-base">
            <li className="flex items-start">
              <span className="mr-2">☕</span>
              <span>Pull up a chair and meet your colleagues!</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">💬</span>
              <span>Chat with folks to find matches for each square</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎉</span>
              <span>Complete a row, column, or diagonal to win!</span>
            </li>
          </ul>
          <p className="text-xs text-coffee-light mt-4 font-display">
            24 conversation starters brewing ☕
          </p>
        </div>

        {/* Button with animation and micro-interactions */}
        <button
          onClick={onStart}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
          aria-label="Start playing Social Bingo"
          className="w-full text-white font-display font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          style={{
            ...buttonStyle,
            animation: 'scaleIn 600ms ease-out 450ms both',
            transform: isPressed 
              ? 'scale(0.98)' 
              : isHovered 
                ? 'translateY(-2px)' 
                : 'translateY(0)',
            boxShadow: isPressed
              ? '0 2px 4px rgba(0, 0, 0, 0.1)'
              : isHovered
                ? '0 8px 16px rgba(37, 99, 235, 0.3)'
                : '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
