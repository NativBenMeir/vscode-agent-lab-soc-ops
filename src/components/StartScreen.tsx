import { useState, useEffect, useRef } from 'react';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [beanPosition, setBeanPosition] = useState({ x: 0, y: 0 });
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const [hoveredInstruction, setHoveredInstruction] = useState<number | null>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isCoffeeHovered, setIsCoffeeHovered] = useState(false);
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const beanRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Card flip animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsCardFlipped(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Cursor following coffee bean (desktop only)
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth lerp animation for coffee bean
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      beanRef.current.x = lerp(beanRef.current.x, mousePosition.x, 0.1);
      beanRef.current.y = lerp(beanRef.current.y, mousePosition.y, 0.1);
      setBeanPosition({ x: beanRef.current.x, y: beanRef.current.y });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  // 3D card tilt effect
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || 'ontouchstart' in window) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setCardRotation({ x: rotateX, y: rotateY });
  };

  const handleCardMouseLeave = () => {
    setCardRotation({ x: 0, y: 0 });
  };

  // Confetti effect on button hover
  const handleButtonHover = () => {
    setIsButtonHovered(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 600);
  };

  // Ripple effect on click
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setTimeout(() => setClickPosition(null), 600);
    onStart();
  };

  const title = "Coffee Break Bingo";
  const titleLetters = title.split('');

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #faf3e0 0%, #f5e6d3 50%, #e8d5c4 100%)',
      }}>
      
      {/* Cursor-following coffee bean (desktop only) */}
      {!('ontouchstart' in window) && (
        <div
          className="fixed pointer-events-none z-50 text-2xl transition-opacity duration-300"
          style={{
            left: `${beanPosition.x}px`,
            top: `${beanPosition.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: beanPosition.x === 0 ? 0 : 0.7,
          }}
        >
          ☕
        </div>
      )}

      {/* Pulsing coffee stain backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="coffee-stain" style={{ top: '10%', left: '15%' }} />
        <div className="coffee-stain" style={{ top: '70%', right: '10%', animationDelay: '1s' }} />
        <div className="coffee-stain" style={{ bottom: '15%', left: '10%', animationDelay: '2s' }} />
      </div>

      <div
        ref={cardRef}
        className="text-center max-w-md relative z-10 perspective-container"
        onMouseMove={handleCardMouseMove}
        onMouseLeave={handleCardMouseLeave}
        style={{
          transform: isCardFlipped 
            ? `perspective(1000px) rotateY(${cardRotation.y}deg) rotateX(${cardRotation.x}deg)` 
            : 'perspective(1000px) rotateY(180deg)',
          transition: isCardFlipped ? 'transform 0.1s ease-out' : 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Animated coffee cup with steam */}
        <div 
          className="text-6xl mb-4 inline-block relative coffee-cup"
          onMouseEnter={() => setIsCoffeeHovered(true)}
          onMouseLeave={() => setIsCoffeeHovered(false)}
          style={{
            transform: isCoffeeHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          ☕
          {isCoffeeHovered && (
            <>
              <span className="steam-1">~</span>
              <span className="steam-2">~</span>
              <span className="steam-3">~</span>
            </>
          )}
        </div>

        {/* Title with staggered bounce and sway */}
        <h1 className="text-5xl font-bold mb-2 title-sway" style={{ fontFamily: 'var(--font-display)' }}>
          {titleLetters.map((letter, index) => (
            <span
              key={index}
              className="inline-block letter-bounce"
              style={{
                animationDelay: `${index * 0.05}s`,
                color: index < 6 ? '#3e2723' : index < 12 ? '#6d4c41' : '#8d6e63',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
        <p className="text-xl mb-8" style={{ 
          color: '#6d4c41',
          fontFamily: 'var(--font-body)',
        }}>
          Social Connection Game
        </p>
        
        {/* Instructions card with hover reveals */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-2 mb-8 relative overflow-hidden"
          style={{
            borderColor: '#d7ccc8',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,243,224,0.8) 100%)',
          }}
        >
          {/* Spotlight effect following cursor */}
          <div 
            className="spotlight-effect"
            style={{
              left: `${cardRotation.y * 5 + 50}%`,
              top: `${cardRotation.x * 5 + 50}%`,
            }}
          />
          
          <h2 className="font-bold text-xl mb-4" style={{ 
            color: '#3e2723',
            fontFamily: 'var(--font-display)',
          }}>
            How to Play
          </h2>
          <ul className="text-left space-y-3">
            {[
              { emoji: '☕', text: 'Find people who match the questions' },
              { emoji: '☕', text: 'Tap a square when you find a match' },
              { emoji: '☕', text: 'Get 5 in a row to win!' },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start instruction-item"
                onMouseEnter={() => setHoveredInstruction(index)}
                onFocus={() => setHoveredInstruction(index)}
                onMouseLeave={() => setHoveredInstruction(null)}
                onBlur={() => setHoveredInstruction(null)}
                tabIndex={0}
                style={{
                  filter: hoveredInstruction === null || hoveredInstruction === index ? 'blur(0px)' : 'blur(1px)',
                  opacity: hoveredInstruction === null || hoveredInstruction === index ? 1 : 0.6,
                  transition: 'filter 0.3s ease, opacity 0.3s ease',
                }}
              >
                <span 
                  className="text-2xl mr-3 inline-block coffee-emoji-spin"
                  style={{
                    animation: hoveredInstruction === index ? 'spin 0.6s ease-in-out' : 'none',
                  }}
                >
                  {item.emoji}
                </span>
                <span style={{ 
                  color: '#5d4037',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-body)',
                }}>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Morphing button with confetti */}
        <div className="relative">
          {/* Confetti particles */}
          {showConfetti && (
            <>
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="confetti-particle"
                  style={{
                    left: '50%',
                    top: '50%',
                    '--angle': `${(i * 30)}deg`,
                    '--distance': `${80 + (i % 3) * 15}px`,
                  } as React.CSSProperties}
                >
                  ☕
                </div>
              ))}
            </>
          )}
          
          <button
            onClick={handleClick}
            onMouseEnter={handleButtonHover}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="w-full font-bold py-5 px-8 rounded-2xl text-lg relative overflow-hidden button-interactive"
            style={{
              background: isButtonHovered
                ? 'linear-gradient(135deg, #5d4037 0%, #3e2723 100%)'
                : 'linear-gradient(135deg, #6d4c41 0%, #5d4037 100%)',
              color: '#faf3e0',
              boxShadow: isButtonHovered 
                ? '0 8px 24px rgba(62, 39, 35, 0.4), inset 0 -2px 8px rgba(0,0,0,0.3)'
                : '0 4px 12px rgba(62, 39, 35, 0.3)',
              transform: isButtonHovered ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              fontFamily: 'var(--font-display)',
            }}
          >
            {/* Coffee cup fill animation */}
            <div 
              className="button-fill"
              style={{
                opacity: isButtonHovered ? 1 : 0,
              }}
            />
            
            {/* Ripple effect */}
            {clickPosition && (
              <span
                className="ripple-effect"
                style={{
                  left: `${clickPosition.x}px`,
                  top: `${clickPosition.y}px`,
                }}
              />
            )}
            
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="text-2xl">☕</span>
              <span>Start Game</span>
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .letter-bounce,
          .title-sway,
          .coffee-stain,
          .coffee-emoji-spin,
          .confetti-particle {
            animation: none !important;
          }
          .coffee-cup,
          .button-interactive,
          .instruction-item {
            transition: none !important;
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }

        .letter-bounce {
          animation: bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation-fill-mode: both;
        }

        @keyframes sway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }

        .title-sway {
          animation: sway 3s ease-in-out infinite;
        }

        @keyframes pulse-stain {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.1; }
          50% { transform: scale(1.02) rotate(2deg); opacity: 0.15; }
        }

        .coffee-stain {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50% 45% 55% 50%;
          background: radial-gradient(circle at 30% 30%, rgba(109, 76, 65, 0.15), rgba(62, 39, 35, 0.1));
          animation: pulse-stain 4s ease-in-out infinite;
          filter: blur(8px);
        }

        @keyframes steam-rise {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-30px) translateX(5px) scale(1.2); opacity: 0; }
        }

        .steam-1, .steam-2, .steam-3 {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 1.5rem;
          color: rgba(109, 76, 65, 0.5);
          animation: steam-rise 1.5s ease-out infinite;
        }

        .steam-2 {
          animation-delay: 0.3s;
          left: 40%;
        }

        .steam-3 {
          animation-delay: 0.6s;
          left: 60%;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .spotlight-effect {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: left 0.1s ease-out, top 0.1s ease-out;
          opacity: 0.5;
        }

        @keyframes confetti-burst {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: 
              translate(-50%, -50%) 
              rotate(var(--angle)) 
              translateY(var(--distance)) 
              scale(0.5);
            opacity: 0;
          }
        }

        .confetti-particle {
          position: absolute;
          animation: confetti-burst 0.6s ease-out forwards;
          font-size: 1.2rem;
          pointer-events: none;
        }

        .button-fill {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 0;
          background: linear-gradient(to top, rgba(250, 243, 224, 0.2), transparent);
          transition: height 0.4s ease-out, opacity 0.3s ease;
          animation: fill-up 0.4s ease-out forwards;
          pointer-events: none;
        }

        @keyframes fill-up {
          from { height: 0; }
          to { height: 100%; }
        }

        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }

        .ripple-effect {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(250, 243, 224, 0.6);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        }

        .perspective-container {
          perspective: 1000px;
        }

        .instruction-item {
          cursor: pointer;
        }

        @media (hover: none) and (pointer: coarse) {
          .instruction-item {
            filter: blur(0px) !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
