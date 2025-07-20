import React, { useState, useEffect } from 'react';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Advanced Cyberpunk Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-cyan-400/30 font-mono text-sm matrix-rain"
              style={{
                left: `${i * 2}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {['01', '10', '11', '00', '01', '10'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>

        {/* Cyberpunk Grid System */}
        <div 
          className="absolute inset-0 opacity-15 cyberpunk-grid"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
          }}
        ></div>
        
        {/* Neon Orbs with Glow */}
        <div className="absolute top-1/5 left-1/8 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse shadow-2xl shadow-cyan-500/20"></div>
        <div className="absolute bottom-1/5 right-1/6 w-80 h-80 bg-purple-500/12 rounded-full blur-3xl animate-pulse shadow-2xl shadow-purple-500/20 delay-2000"></div>
        <div className="absolute top-3/5 left-3/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse shadow-2xl shadow-yellow-500/15 delay-4000"></div>
        <div className="absolute top-1/2 left-1/6 w-48 h-48 bg-green-500/8 rounded-full blur-3xl animate-pulse shadow-2xl shadow-green-500/10 delay-6000"></div>

        {/* Floating Programming Elements */}
        <div className="absolute inset-0 font-mono opacity-8">
          {[
            '{ code }', '[ array ]', '< html >', '( function )', '// comment', 
            '=== true', '!== false', '=> arrow', '&& and', '|| or',
            'const', 'let', 'var', 'function', 'return', 'import', 'export',
            'async', 'await', 'promise', 'callback', 'null', 'undefined'
          ].map((symbol, i) => (
            <div 
              key={i}
              className={`absolute code-float ${i % 4 === 0 ? 'text-cyan-400' : i % 4 === 1 ? 'text-purple-400' : i % 4 === 2 ? 'text-yellow-400' : 'text-green-400'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${10 + Math.random() * 8}px`,
                animationDelay: `${Math.random() * 8}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Glitch Lines */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent glitch-line"
              style={{
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Scanlines */}
        <div className="absolute inset-0 opacity-5 scanlines"></div>

        {/* Neural Network Connections */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10">
            {[...Array(15)].map((_, i) => (
              <g key={i}>
                <line 
                  x1={`${Math.random() * 100}%`} 
                  y1={`${Math.random() * 100}%`} 
                  x2={`${Math.random() * 100}%`} 
                  y2={`${Math.random() * 100}%`} 
                  stroke="url(#grad1)" 
                  strokeWidth="1"
                  className="animate-pulse"
                  style={{animationDelay: `${Math.random() * 3}s`}}
                />
                <circle 
                  cx={`${Math.random() * 100}%`} 
                  cy={`${Math.random() * 100}%`} 
                  r="2" 
                  fill="currentColor" 
                  className="text-cyan-400 animate-pulse"
                  style={{animationDelay: `${Math.random() * 3}s`}}
                />
              </g>
            ))}
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: 'rgb(6, 182, 212)', stopOpacity: 0}} />
                <stop offset="50%" style={{stopColor: 'rgb(6, 182, 212)', stopOpacity: 0.5}} />
                <stop offset="100%" style={{stopColor: 'rgb(147, 51, 234)', stopOpacity: 0}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Background Styles */}
      <style jsx>{`
        .matrix-rain {
          animation: matrixRain 3s linear infinite;
        }

        .cyberpunk-grid {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.6) 1px, transparent 1px),
            linear-gradient(rgba(147, 51, 234, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.4) 1px, transparent 1px),
            linear-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px);
          background-size: 120px 120px, 120px 120px, 40px 40px, 40px 40px, 8px 8px, 8px 8px;
          animation: gridCyberpunk 8s ease-in-out infinite;
        }

        .code-float {
          animation: codeFloat 8s ease-in-out infinite;
        }

        .glitch-line {
          animation: glitchLine 2s ease-in-out infinite;
        }

        .scanlines {
          background-image: linear-gradient(transparent 50%, rgba(0, 255, 255, 0.1) 50%);
          background-size: 100% 4px;
          animation: scanlines 0.1s linear infinite;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        .delay-4000 {
          animation-delay: 4s;
        }

        .delay-6000 {
          animation-delay: 6s;
        }

        @keyframes matrixRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes gridCyberpunk {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.15;
          }
          25% { 
            transform: translate(30px, 15px) scale(1.02);
            opacity: 0.25;
          }
          50% { 
            transform: translate(15px, 30px) scale(0.98);
            opacity: 0.20;
          }
          75% { 
            transform: translate(-15px, 10px) scale(1.01);
            opacity: 0.18;
          }
        }

        @keyframes codeFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.08;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
            opacity: 0.15;
          }
          50% { 
            transform: translateY(-40px) translateX(-5px) rotate(180deg); 
            opacity: 0.12;
          }
          75% { 
            transform: translateY(-30px) translateX(15px) rotate(270deg); 
            opacity: 0.10;
          }
        }

        @keyframes glitchLine {
          0%, 100% { 
            opacity: 0; 
            transform: translateX(-100%);
          }
          50% { 
            opacity: 0.3; 
            transform: translateX(100%);
          }
        }

        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </>
  );
};

export default Background;