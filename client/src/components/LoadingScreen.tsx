import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown } from "lucide-react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Preparing the Sacred Journey...",
    "Awakening Ancient Wisdom...",
    "Loading Dharmic Adventures...",
    "Initializing Mythological Quest..."
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 12;
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          clearInterval(textInterval);
          setTimeout(() => {
            setIsVisible(false);
          }, 800);
          return 100;
        }
        
        return newProgress;
      });
    }, 180);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-black overflow-hidden"
        >
          {/* Animated background patterns with particles */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.08) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(255, 215, 0, 0.08) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 20%, rgba(255, 215, 0, 0.08) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 80%, rgba(255, 215, 0, 0.08) 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            />
            
            {/* Subtle loading particles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-pure-gold/50 rounded-full"
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.sin(i * 0.5) * 30, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${60 + Math.random() * 40}%`
                }}
              />
            ))}
          </div>

          <div className="text-center relative z-10">
            {/* Animated crown with enhanced effects */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotateY: 0,
                y: [0, -10, 0]
              }}
              transition={{ 
                scale: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.2, ease: "easeOut" },
                rotateY: { duration: 1.5, ease: "easeOut" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="mb-8 relative"
            >
              <div className="relative">
                <Crown className="w-20 h-20 text-pure-gold mx-auto filter drop-shadow-lg glowing" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-pure-gold/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border border-antique-gold/20 rounded-full"
                />
              </div>
            </motion.div>
            
            {/* Enhanced title with letter animation */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="mb-2"
            >
              <motion.h1 className="font-playfair text-5xl md:text-6xl font-bold text-pure-gold mb-2">
                {"Conquest of Truth".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.7 + index * 0.1,
                      ease: "easeOut" 
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

            {/* Animated subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-antique-gold text-sm tracking-widest uppercase mb-8"
            >
              Ancient Wisdom • Modern Gaming
            </motion.p>

            {/* Animated loading text */}
            <motion.p
              key={currentText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-champagne-gold text-lg mb-8 h-6"
            >
              {loadingTexts[currentText]}
            </motion.p>
            
            {/* Enhanced progress bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "20rem", opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-2 bg-rich-black rounded-full overflow-hidden mx-auto relative border border-pure-gold/30"
            >
              <motion.div
                className="h-full rounded-full relative overflow-hidden"
                style={{ 
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, hsl(45, 100%, 60%) 0%, hsl(42, 85%, 55%) 50%, hsl(48, 100%, 70%) 100%)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 gold-shimmer"
                />
              </motion.div>
              
              {/* Progress percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2"
              >
                <span className="text-champagne-gold text-sm font-mono">
                  {Math.round(progress)}%
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
