import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import logoEpice from "@/assets/logo-epice.jpg";

const AnimatedLogo = () => {
  const controls = useAnimation();
  const meteorControls = useAnimation();
  const textControls = useAnimation();

  // Infinity symbol path
  const infinityPath = "M 60 50 C 60 30, 90 20, 110 35 C 130 50, 130 70, 110 85 C 90 100, 60 90, 60 70 C 60 50, 60 30, 40 20 C 20 10, -10 30, -10 50 C -10 70, 20 90, 40 80 C 60 70, 60 50, 60 50";

  useEffect(() => {
    const runAnimation = async () => {
      // 1. Show text first
      await textControls.start({ opacity: 1, y: 0 });
      
      // 2. Wait a moment
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // 3. Fade text and start drawing
      textControls.start({ opacity: 0.2 });
      
      // 4. Draw the infinity path with meteor
      await controls.start({
        pathLength: 1,
        transition: { duration: 2.5, ease: "easeInOut" }
      });
      
      // 5. Fade out animation and show final logo
      await controls.start({ opacity: 0, transition: { duration: 0.3 } });
      await textControls.start({ opacity: 0, transition: { duration: 0.3 } });
    };

    runAnimation();
  }, [controls, textControls]);

  return (
    <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] mx-auto">
      {/* Final Logo - always present, fades in at the end */}
      <motion.img
        src={logoEpice}
        alt="epice"
        className="absolute inset-0 w-full h-full object-contain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.5 }}
      />

      {/* Animated SVG overlay */}
      <svg
        viewBox="-20 0 140 100"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ transform: 'scale(1.2) translateY(10%)' }}
      >
        {/* Animated infinity symbol - the trail */}
        <motion.path
          d={infinityPath}
          fill="none"
          stroke="url(#trailGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={controls}
          style={{
            filter: 'drop-shadow(0 0 8px rgba(255, 200, 100, 0.8))',
          }}
        />

        {/* Meteor following the path */}
        <motion.circle
          r="5"
          fill="#fff"
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{ 
            offsetDistance: "100%", 
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{ 
            duration: 2.5, 
            ease: "easeInOut",
            delay: 0.8,
            opacity: { times: [0, 0.05, 0.9, 0.95, 1] }
          }}
          style={{
            offsetPath: `path("${infinityPath}")`,
            filter: 'drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #ffa500) drop-shadow(0 0 30px #ff6600)',
          }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="50%" stopColor="#D4A574" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text "epice" - appears first */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={textControls}
        transition={{ duration: 0.6 }}
      >
        <span 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-wider"
          style={{ 
            color: '#8B4513',
            textShadow: '0 0 20px rgba(139, 69, 19, 0.5)',
          }}
        >
          epice
        </span>
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;
