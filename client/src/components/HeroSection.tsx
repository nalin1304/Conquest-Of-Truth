import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-luxury-black">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at top, rgba(255, 215, 0, 0.1) 0%, transparent 70%)",
              "radial-gradient(ellipse at bottom, rgba(255, 215, 0, 0.15) 0%, transparent 70%)",
              "radial-gradient(ellipse at center, rgba(255, 215, 0, 0.08) 0%, transparent 70%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        
        {/* Subtle floating particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute bg-pure-gold rounded-full ${
              i % 3 === 0 ? 'w-1 h-1 opacity-40' : 
              i % 3 === 1 ? 'w-0.5 h-0.5 opacity-30' : 
              'w-2 h-2 opacity-20'
            }`}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0, i % 3 === 0 ? 0.6 : i % 3 === 1 ? 0.4 : 0.3, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${80 + Math.random() * 20}%`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-inter text-antique-gold text-sm tracking-[0.3em] uppercase mb-4 block relative"
          >
            <span className="relative z-10">Fig 01. Ancient Wisdom Meets Modern Gaming</span>
            <motion.div
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px bg-pure-gold/50"
            />
          </motion.span>
          
          <h1 className="font-playfair text-6xl md:text-9xl font-bold mb-6 leading-tight">
            <motion.div className="overflow-hidden">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                className="block text-pure-gold relative"
              >
                Conquest
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne-gold/20 to-transparent"
                />
              </motion.span>
            </motion.div>
            <motion.div className="overflow-hidden">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                className="block text-antique-gold relative"
              >
                of Truth
                <motion.div
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-gold/30 to-transparent bg-[length:200%_100%]"
                />
              </motion.span>
            </motion.div>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <motion.p 
            className="text-xl md:text-2xl text-champagne-gold mb-4 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Reconnecting young India with cultural heritage through engaging, value-based board games
          </motion.p>
          
          <motion.p 
            className="text-lg text-antique-gold/80 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            A mythology-inspired series rooted in the sacred epic of Ramayan, designed for children aged 6-14
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 15px 35px rgba(255, 215, 0, 0.25)",
                y: -3
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('vision')}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="gradient-gold text-luxury-black px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
            >
              <span className="relative z-10">Begin the Sacred Journey</span>
              <motion.div
                className="absolute inset-0 bg-champagne-gold opacity-0 group-hover:opacity-15 transition-opacity duration-500"
              />
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.03,
                borderColor: "hsl(45, 100%, 60%)",
                boxShadow: "0 0 25px rgba(255, 215, 0, 0.15)"
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('story')}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="border-2 border-antique-gold text-antique-gold px-10 py-4 rounded-full font-semibold hover:bg-antique-gold hover:text-luxury-black transition-all duration-500 flex items-center space-x-3 group"
            >
              <motion.div
                whileHover={{ rotate: 45, scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Play className="w-5 h-5" />
              </motion.div>
              <span>Discover the Epic</span>
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-8 text-bronze-gold/60 text-sm"
          >
            🏆 2nd Position Winner at Startup Competition
          </motion.div>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="cursor-pointer group"
          onClick={() => scrollToSection('vision')}
        >
          <ChevronDown className="w-10 h-10 text-antique-gold mx-auto group-hover:text-pure-gold transition-colors duration-300" />
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-8 bg-pure-gold/30 mx-auto mt-2 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
