import { motion } from "framer-motion";
import { Crown, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Our Vision', id: 'vision' },
    { name: 'The Story', id: 'story' },
    { name: 'Learning Value', id: 'learning' },
    { name: 'Our Mission', id: 'mission' }
  ];

  const connectLinks = [
    { name: 'Join Quest', id: 'contact' },
    { name: 'Press Kit', id: '#' },
    { name: 'Partnerships', id: '#' },
    { name: 'Support', id: '#' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-deep-charcoal text-warm-ivory py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Crown className="w-8 h-8 text-saffron" />
                <span className="font-playfair text-3xl font-semibold">Conquest of Truth</span>
              </div>
              <p className="text-warm-ivory/80 leading-relaxed mb-6 max-w-md">
                Bringing the timeless wisdom of Ramayan to modern families through innovative, 
                value-based board game experiences that nurture moral character in children.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-saffron/20 rounded-full flex items-center justify-center hover:bg-saffron transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <h4 className="font-playfair text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-warm-ivory/80 hover:text-saffron transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h4 className="font-playfair text-xl font-semibold mb-6">Connect</h4>
            <ul className="space-y-3">
              {connectLinks.map((link, index) => (
                <li key={index}>
                  {link.id === 'contact' ? (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-warm-ivory/80 hover:text-saffron transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.id}
                      className="text-warm-ivory/80 hover:text-saffron transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="border-t border-antique-gold/20 pt-8 text-center"
        >
          <p className="text-warm-ivory/60">
            © 2024 Conquest of Truth. All rights reserved. | Crafted with devotion for the next generation.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
