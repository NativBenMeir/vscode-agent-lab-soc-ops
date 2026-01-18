interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 overflow-hidden" 
         style={{
           background: 'linear-gradient(135deg, #F5DEB3 0%, #DEB887 50%, #D2B48C 100%)',
         }}>
      
      {/* Radial gradient overlay for café lighting */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.3) 0%, rgba(139,69,19,0.15) 60%, rgba(62,39,35,0.25) 100%)',
           }}
      />

      {/* Coffee ring stains - positioned absolutely at random coordinates */}
      <svg className="absolute opacity-10" style={{ top: '8%', left: '12%', width: '60px', height: '60px' }}>
        <circle cx="30" cy="30" r="25" fill="none" stroke="#8B4513" strokeWidth="2" />
        <circle cx="30" cy="30" r="20" fill="none" stroke="#8B4513" strokeWidth="1.5" opacity="0.6" />
        <circle cx="30" cy="30" r="15" fill="none" stroke="#D2691E" strokeWidth="1" opacity="0.4" />
      </svg>

      <svg className="absolute" style={{ top: '15%', right: '8%', width: '70px', height: '70px', opacity: 0.12 }}>
        <circle cx="35" cy="35" r="30" fill="none" stroke="#8B4513" strokeWidth="2.5" />
        <circle cx="35" cy="35" r="24" fill="none" stroke="#D2691E" strokeWidth="1.8" opacity="0.7" />
        <circle cx="35" cy="35" r="18" fill="none" stroke="#F5DEB3" strokeWidth="1.2" opacity="0.5" />
      </svg>

      <svg className="absolute" style={{ bottom: '18%', left: '15%', width: '50px', height: '50px', opacity: 0.08 }}>
        <circle cx="25" cy="25" r="22" fill="none" stroke="#6F4E37" strokeWidth="2" />
        <circle cx="25" cy="25" r="17" fill="none" stroke="#8B4513" strokeWidth="1.5" opacity="0.6" />
      </svg>

      <svg className="absolute opacity-15" style={{ bottom: '25%', right: '18%', width: '80px', height: '80px' }}>
        <circle cx="40" cy="40" r="35" fill="none" stroke="#D2691E" strokeWidth="3" />
        <circle cx="40" cy="40" r="28" fill="none" stroke="#8B4513" strokeWidth="2" opacity="0.7" />
        <circle cx="40" cy="40" r="20" fill="none" stroke="#F5DEB3" strokeWidth="1.5" opacity="0.5" />
      </svg>

      <svg className="absolute opacity-10" style={{ top: '60%', left: '5%', width: '65px', height: '65px' }}>
        <circle cx="32" cy="32" r="28" fill="none" stroke="#6F4E37" strokeWidth="2.2" />
        <circle cx="32" cy="32" r="22" fill="none" stroke="#D2691E" strokeWidth="1.6" opacity="0.6" />
      </svg>

      {/* Coffee bean decorations - scattered and rotated */}
      <svg className="absolute" style={{ top: '10%', left: '25%', width: '20px', height: '30px', transform: 'rotate(25deg)', animation: 'float-bean 4s ease-in-out infinite', '--rotate-start': '25deg', opacity: 0.20 } as React.CSSProperties}>
        <ellipse cx="10" cy="15" rx="8" ry="13" fill="#3E2723"/>
        <path d="M 10 5 Q 10 15 10 25" stroke="#6F4E37" strokeWidth="1.5" fill="none"/>
      </svg>

      <svg className="absolute" style={{ top: '35%', right: '12%', width: '18px', height: '28px', transform: 'rotate(-40deg)', animation: 'float-bean 5s ease-in-out infinite 0.5s', '--rotate-start': '-40deg', opacity: 0.15 } as React.CSSProperties}>
        <ellipse cx="9" cy="14" rx="7" ry="12" fill="#3E2723"/>
        <path d="M 9 4 Q 9 14 9 24" stroke="#6F4E37" strokeWidth="1.3" fill="none"/>
      </svg>

      <svg className="absolute" style={{ bottom: '12%', left: '8%', width: '22px', height: '32px', transform: 'rotate(60deg)', animation: 'float-bean 4.5s ease-in-out infinite 1s', '--rotate-start': '60deg', opacity: 0.18 } as React.CSSProperties}>
        <ellipse cx="11" cy="16" rx="9" ry="14" fill="#3E2723"/>
        <path d="M 11 4 Q 11 16 11 28" stroke="#6F4E37" strokeWidth="1.6" fill="none"/>
      </svg>

      <svg className="absolute" style={{ bottom: '40%', right: '6%', width: '19px', height: '29px', transform: 'rotate(-15deg)', animation: 'float-bean 5.5s ease-in-out infinite 1.5s', '--rotate-start': '-15deg', opacity: 0.16 } as React.CSSProperties}>
        <ellipse cx="9.5" cy="14.5" rx="7.5" ry="12.5" fill="#3E2723"/>
        <path d="M 9.5 4 Q 9.5 14.5 9.5 25" stroke="#6F4E37" strokeWidth="1.4" fill="none"/>
      </svg>

      <svg className="absolute" style={{ top: '45%', left: '18%', width: '21px', height: '31px', transform: 'rotate(80deg)', animation: 'float-bean 4.8s ease-in-out infinite 2s', '--rotate-start': '80deg', opacity: 0.14 } as React.CSSProperties}>
        <ellipse cx="10.5" cy="15.5" rx="8.5" ry="13.5" fill="#3E2723"/>
        <path d="M 10.5 4 Q 10.5 15.5 10.5 27" stroke="#6F4E37" strokeWidth="1.5" fill="none"/>
      </svg>

      <svg className="absolute" style={{ top: '70%', right: '22%', width: '20px', height: '30px', transform: 'rotate(-55deg)', animation: 'float-bean 5.2s ease-in-out infinite 2.5s', '--rotate-start': '-55deg', opacity: 0.17 } as React.CSSProperties}>
        <ellipse cx="10" cy="15" rx="8" ry="13" fill="#3E2723"/>
        <path d="M 10 5 Q 10 15 10 25" stroke="#6F4E37" strokeWidth="1.5" fill="none"/>
      </svg>

      <svg className="absolute" style={{ bottom: '55%', left: '30%', width: '23px', height: '33px', transform: 'rotate(10deg)', animation: 'float-bean 4.3s ease-in-out infinite 3s', '--rotate-start': '10deg', opacity: 0.19 } as React.CSSProperties}>
        <ellipse cx="11.5" cy="16.5" rx="9.5" ry="14.5" fill="#3E2723"/>
        <path d="M 11.5 4 Q 11.5 16.5 11.5 29" stroke="#6F4E37" strokeWidth="1.7" fill="none"/>
      </svg>

      <svg className="absolute" style={{ top: '22%', right: '28%', width: '17px', height: '27px', transform: 'rotate(-70deg)', animation: 'float-bean 5.8s ease-in-out infinite 3.5s', '--rotate-start': '-70deg', opacity: 0.13 } as React.CSSProperties}>
        <ellipse cx="8.5" cy="13.5" rx="6.5" ry="11.5" fill="#3E2723"/>
        <path d="M 8.5 4 Q 8.5 13.5 8.5 23" stroke="#6F4E37" strokeWidth="1.2" fill="none"/>
      </svg>

      <div className="relative text-center max-w-sm z-10" style={{ animation: 'fade-in-stagger 0.8s ease-out' }}>
        {/* Title with bounce and wiggle */}
        <div style={{ animation: 'bounce-wiggle 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}>
          <h1 className="text-5xl font-bold mb-1" style={{ 
            color: '#3E2723',
            textShadow: '2px 2px 4px rgba(139,69,19,0.3), -1px -1px 2px rgba(255,255,255,0.5)',
            transform: 'rotate(-2deg)',
          }}>
            Soc Ops Café
          </h1>
          <p className="text-sm mb-1" style={{ color: '#6F4E37', opacity: 0.8 }}>
            ☕ Welcome to the Café ☕
          </p>
          <p className="text-xs mb-6" style={{ color: '#8B4513', opacity: 0.7, fontStyle: 'italic' }}>
            Est. 2026
          </p>
        </div>

        {/* Coffee cup with steam animation */}
        <div className="relative inline-block mb-8" style={{ animation: 'fade-in-stagger 1s ease-out 0.3s both' }}>
          <div className="text-6xl mb-2">☕</div>
          {/* Steam animations */}
          <div className="absolute" style={{ 
            top: '-10px', 
            left: '50%', 
            transform: 'translateX(-50%)',
            pointerEvents: 'none'
          }}>
            <div style={{
              width: '8px',
              height: '20px',
              background: 'linear-gradient(to top, rgba(255,255,255,0.6), transparent)',
              borderRadius: '50% 50% 0 0',
              animation: 'steam-rise 3s ease-in-out infinite',
              position: 'absolute',
              left: '-4px',
            }}/>
            <div style={{
              width: '8px',
              height: '20px',
              background: 'linear-gradient(to top, rgba(255,255,255,0.5), transparent)',
              borderRadius: '50% 50% 0 0',
              animation: 'steam-rise-2 3.5s ease-in-out infinite 0.5s',
              position: 'absolute',
              left: '4px',
            }}/>
            <div style={{
              width: '8px',
              height: '20px',
              background: 'linear-gradient(to top, rgba(255,255,255,0.7), transparent)',
              borderRadius: '50% 50% 0 0',
              animation: 'steam-rise-3 3.2s ease-in-out infinite 1s',
              position: 'absolute',
              left: '0px',
            }}/>
          </div>
        </div>
        
        {/* Instructions card with slide-up animation and coffee cup decoration */}
        <div className="bg-white/95 rounded-lg p-6 shadow-lg mb-8 backdrop-blur-sm" 
             style={{ 
               borderTop: '3px solid #8B4513',
               borderBottom: '3px solid #8B4513',
               borderLeft: '1px dashed #D2691E',
               borderRight: '1px dashed #D2691E',
               animation: 'slide-up-rotate 0.6s ease-out 0.4s both',
               position: 'relative',
             }}>
          
          {/* Decorative coffee cup illustration at top */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <svg width="50" height="50" viewBox="0 0 50 50">
              <rect x="10" y="20" width="25" height="20" rx="2" fill="#6F4E37" stroke="#3E2723" strokeWidth="2"/>
              <path d="M 35 25 Q 42 25 42 30 Q 42 35 35 35" fill="none" stroke="#3E2723" strokeWidth="2"/>
              <ellipse cx="22.5" cy="20" rx="12" ry="3" fill="#8B4513"/>
              <path d="M 18 15 Q 20 10 22 15" stroke="#D2691E" strokeWidth="1.5" fill="none" opacity="0.7"/>
              <path d="M 22 13 Q 24 8 26 13" stroke="#D2691E" strokeWidth="1.5" fill="none" opacity="0.6"/>
            </svg>
          </div>

          <h2 className="font-bold text-lg mb-4 mt-2" style={{ color: '#3E2723' }}>
            How to play
          </h2>
          <ul className="text-left text-sm space-y-2.5" style={{ color: '#6F4E37' }}>
            <li className="flex items-start">
              <span className="mr-2">☕</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">☕</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">☕</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* Start button with enhanced styling */}
        <button
          onClick={onStart}
          className="w-full font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #8B4513 0%, #6F4E37 100%)',
            color: '#F5DEB3',
            border: '2px solid #3E2723',
            animation: 'fade-in-stagger 0.8s ease-out 0.6s both',
          }}
        >
          Start Your Coffee Break ☕
        </button>
      </div>
    </div>
  );
}
