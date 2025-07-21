import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Crown, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-luxury-black/95 backdrop-blur-md shadow-2xl border-b border-pure-gold/30' 
          : 'bg-luxury-black/90 backdrop-blur-sm border-b border-pure-gold/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Crown className="w-8 h-8 text-pure-gold group-hover:text-champagne-gold transition-colors duration-300" />
            </motion.div>
            <span className="font-playfair text-2xl font-semibold text-pure-gold group-hover:text-champagne-gold transition-colors duration-300">
              Conquest of Truth
            </span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Vision', id: 'vision' },
              { name: 'Story', id: 'story' },
              { name: 'Learning', id: 'learning' },
              { name: 'Mission', id: 'mission' },
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-antique-gold hover:text-pure-gold transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pure-gold group-hover:w-full transition-all duration-300"
                />
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 215, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="gradient-gold text-luxury-black px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium relative overflow-hidden"
            >
              <span className="relative z-10">Join Quest</span>
              <motion.div
                className="absolute inset-0 bg-champagne-gold opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>
          </div>
          
          <button
            className="md:hidden text-pure-gold hover:text-champagne-gold transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-pure-gold/30"
          >
            <div className="flex flex-col space-y-4 mt-4">
              {[
                { name: 'Vision', id: 'vision' },
                { name: 'Story', id: 'story' },
                { name: 'Learning', id: 'learning' },
                { name: 'Mission', id: 'mission' },
                { name: 'Join Quest', id: 'contact' },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-antique-gold hover:text-pure-gold transition-all duration-300 py-2"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
