import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logoEpice from "@/assets/logo-epice.jpg";

const AnimatedLogo = () => {
  const [showInfinity, setShowInfinity] = useState(false);
  const [showFinalLogo, setShowFinalLogo] = useState(false);
  const [meteorPosition, setMeteorPosition] = useState({ x: 0, y: 0 });
  const [pathLength, setPathLength] = useState(0);

  // Infinity symbol path - adjusted for the logo proportions
  const infinityPath = "M 60 50 C 60 30, 90 20, 110 35 C 130 50, 130 70, 110 85 C 90 100, 60 90, 60 70 C 60 50, 60 30, 40 20 C 20 10, -10 30, -10 50 C -10 70, 20 90, 40 80 C 60 70, 60 50, 60 50";

  useEffect(() => {
    // Start infinity animation after text appears
    const timer = setTimeout(() => {
      setShowInfinity(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showInfinity) return;

    const svgPath = document.getElementById('infinity-path') as unknown as SVGPathElement;
    if (!svgPath) return;

    const totalLength = svgPath.getTotalLength();
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setPathLength(progress);

      if (svgPath) {
        const point = svgPath.getPointAtLength(progress * totalLength);
        setMeteorPosition({ x: point.x, y: point.y });
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Show final logo after animation completes
        setTimeout(() => {
          setShowFinalLogo(true);
        }, 300);
      }
    };

    requestAnimationFrame(animate);
  }, [showInfinity]);

  return (
    <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] mx-auto">
      {/* Final Logo - fades in at the end */}
      <motion.img
        src={logoEpice}
        alt="epice"
        className="absolute inset-0 w-full h-full object-contain"
        initial={{ opacity: 0 }}
        animate={{ opacity: showFinalLogo ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Animated SVG overlay */}
      {!showFinalLogo && (
        <svg
          viewBox="-20 0 140 100"
          className="absolute inset-0 w-full h-full"
          style={{ transform: 'scale(1.2) translateY(10%)' }}
        >
          {/* Hidden path for getPointAtLength */}
          <path
            id="infinity-path"
            d={infinityPath}
            fill="none"
            stroke="transparent"
          />

          {/* Animated infinity symbol - the trail */}
          {showInfinity && (
            <motion.path
              d={infinityPath}
              fill="none"
              stroke="url(#trailGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="1"
              strokeDashoffset={1 - pathLength}
              pathLength="1"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(255, 200, 100, 0.8))',
              }}
            />
          )}

          {/* Meteor - the glowing point */}
          {showInfinity && pathLength < 1 && (
            <g transform={`translate(${meteorPosition.x}, ${meteorPosition.y})`}>
              {/* Outer glow */}
              <circle
                r="8"
                fill="url(#meteorGlow)"
                opacity="0.6"
              />
              {/* Inner bright core */}
              <circle
                r="4"
                fill="#fff"
                style={{
                  filter: 'drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #ffa500)',
                }}
              />
              {/* Sparkle effect */}
              <circle
                r="2"
                fill="#fffbe6"
              />
            </g>
          )}

          {/* Gradients */}
          <defs>
            <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="50%" stopColor="#D4A574" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
            <radialGradient id="meteorGlow">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="40%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      )}

      {/* Text "epice" - appears first */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showFinalLogo ? 0 : 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-wider"
          style={{ 
            color: '#8B4513',
            textShadow: '0 0 20px rgba(139, 69, 19, 0.5)',
            opacity: showInfinity ? 0.3 : 1,
            transition: 'opacity 0.5s'
          }}
        >
          epice
        </span>
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;
