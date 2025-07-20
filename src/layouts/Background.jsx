import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  // Slow matrix rain animation
  const createMatrixVariants = () => ({
    animate: {
      y: ['-100vh', '100vh'],
      opacity: [0, 0.8, 0.8, 0],
      transition: {
        duration: Math.random() * 4 + 6, // Slower: 6-10 seconds
        repeat: Infinity,
        ease: 'linear',
        times: [0, 0.2, 0.8, 1],
        delay: Math.random() * 8 // More delayed start
      }
    }
  });

  // City skyline parallax animation
  const cityVariants = {
    animate: {
      x: ['-100%', '100%'],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  // Holographic UI elements
  const holoVariants = {
    animate: {
      opacity: [0.3, 0.8, 0.3],
      scale: [0.98, 1.02, 0.98],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  // Neon glow pulse
  const neonPulse = {
    animate: {
      boxShadow: [
        '0 0 20px rgba(0, 255, 255, 0.3)',
        '0 0 40px rgba(0, 255, 255, 0.7)',
        '0 0 20px rgba(0, 255, 255, 0.3)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  // Data stream animation
  const dataStream = {
    animate: {
      y: [0, -100],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeOut'
      }
    }
  };

  const matrixChars = ['01', '10', '11', '00', '101', '010', '110', '001'];
  const codeElements = [
    'function()', 'const x =', 'if (true)', 'return;', 'async/await',
    'class {}', 'import *', 'export {}', 'try/catch', 'Promise.then()',
    'console.log', '=> arrow', '&& ||', '!== ===', 'null undefined',
    'API.call()', 'JSON.parse', 'fetch()', 'React.useState', 'useEffect'
  ];
  
  const gtaElements = ['Vice City', 'Los Santos', 'Liberty City', 'WANTED', 'GTA VI', '★★★★★'];
  const cyberpunkElements = ['NEURAL LINK', 'CYBER DECK', 'NET RUNNER', 'BRAIN DANCE', 'CORPO', 'SAMURAI'];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-black">
      
      {/* Animated City Skyline - GTA Style */}


      {/* Slow Matrix Digital Rain */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute text-green-400/60 font-mono font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 8}px`,
              textShadow: '0 0 10px currentColor'
            }}
            variants={createMatrixVariants()}
            animate="animate"
          >
            {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          </motion.div>
        ))}

        {/* Additional slower binary rain */}
        {[...Array(40)].map((_, i) => (
          <motion.div 
            key={`binary-${i}`}
            className="absolute text-cyan-400/40 font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 6}px`,
              textShadow: '0 0 5px currentColor'
            }}
            animate={{
              y: ['-100vh', '100vh'],
              opacity: [0, 0.6, 0.6, 0],
              transition: {
                duration: Math.random() * 6 + 8, // Even slower: 8-14 seconds
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 10
              }
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      {/* Holographic Programming Panels */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={`holo-${i}`}
            className="absolute border border-cyan-400/30 bg-cyan-900/10 backdrop-blur-sm rounded-lg p-4"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              width: `${150 + Math.random() * 100}px`,
              height: `${80 + Math.random() * 60}px`
            }}
            variants={holoVariants}
            animate="animate"
            transition={{
              ...holoVariants.animate.transition,
              delay: Math.random() * 5
            }}
          >
            <div className="text-cyan-300/70 font-mono text-xs">
              {codeElements[Math.floor(Math.random() * codeElements.length)]}
            </div>
            <div className="text-green-400/50 font-mono text-xs mt-1">
              {Math.random() > 0.5 ? 'SUCCESS' : 'LOADING...'}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Neon Circuit Lines */}
    



      {/* Cyberpunk Status Bars */}
      <div className="absolute left-10 top-1/4 space-y-4">
        {['NEURAL', 'CYBER', 'NET'].map((label, i) => (
          <motion.div 
            key={label}
            className="bg-black/50 border border-cyan-400/50 p-2 rounded"
            variants={neonPulse}
            animate="animate"
            transition={{
              ...neonPulse.animate.transition,
              delay: i * 0.5
            }}
          >
            <div className="text-cyan-400 font-mono text-xs">{label}</div>
            <div className="w-20 h-1 bg-gray-700 rounded">
              <motion.div 
                className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded"
                animate={{
                  width: [`${Math.random() * 50 + 30}%`, `${Math.random() * 50 + 30}%`],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>



      {/* Scanlines with Glow */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(transparent 49%, rgba(0, 255, 255, 0.3) 50%, transparent 51%)',
          backgroundSize: '100% 3px'
        }}
        animate={{
          y: ['0%', '100%'],
          transition: {
            duration: 0.2,
            repeat: Infinity,
            ease: 'linear'
          }
        }}
      />
    </div>
  );
};

export default Background;