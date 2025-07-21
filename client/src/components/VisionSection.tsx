import { motion } from "framer-motion";
import { Heart, BookOpen, Gamepad2 } from "lucide-react";

export default function VisionSection() {
  const features = [
    {
      icon: Heart,
      title: "Value-Based Learning",
      description: "Every game mechanic teaches dharma, compassion, courage, and truth through engaging gameplay that resonates with young hearts.",
      delay: 0.2,
      color: "from-pure-gold to-antique-gold"
    },
    {
      icon: BookOpen,
      title: "Cultural Heritage",
      description: "Preserving and celebrating the rich tapestry of Indian mythology while making it accessible to contemporary young minds.",
      delay: 0.4,
      color: "from-antique-gold to-bronze-gold"
    },
    {
      icon: Gamepad2,
      title: "Screen-Free Gaming",
      description: "Mindful entertainment that brings families together, fostering real connections and meaningful conversations away from digital distractions.",
      delay: 0.6,
      color: "from-bronze-gold to-champagne-gold"
    }
  ];

  return (
    <section id="vision" className="py-24 bg-gradient-to-br from-deep-black to-rich-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pure-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-antique-gold rounded-full blur-2xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-antique-gold text-sm tracking-[0.3em] uppercase mb-4 block relative"
          >
            <span className="relative z-10">Fig 02. The Sacred Mission</span>
            <motion.div
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px bg-pure-gold/50"
            />
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="font-playfair text-5xl md:text-7xl font-bold text-pure-gold mb-8 leading-tight"
          >
            <motion.span 
              className="block"
              whileInView={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Reconnecting Young India
            </motion.span>
            <span className="block text-antique-gold">with Ancient Wisdom</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-champagne-gold/90 max-w-4xl mx-auto leading-relaxed"
          >
            In an age of digital overload, we return to the timeless art of storytelling through play, 
            bringing the sacred teachings of Ramayan to life for the next generation.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                delay: feature.delay, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 60,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              className="luxury-glass rounded-3xl p-8 text-center group relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)`
                }}
              />
              
              {/* Subtle gold particle effects */}
              {Array.from({ length: 3 }).map((_, particleIndex) => (
                <motion.div
                  key={particleIndex}
                  className="absolute w-1 h-1 bg-pure-gold/40 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.random() * 10 - 5, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                  }}
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`
                  }}
                />
              ))}
              
              <motion.div
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
                className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 relative z-10`}
              >
                <feature.icon className="w-10 h-10 text-luxury-black relative z-10" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-luxury-black/20 rounded-2xl"
                />
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: feature.delay + 0.2 }}
                className="font-playfair text-2xl font-semibold mb-4 text-pure-gold group-hover:text-champagne-gold transition-colors duration-300"
              >
                {feature.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: feature.delay + 0.4 }}
                className="text-antique-gold/80 leading-relaxed group-hover:text-champagne-gold/90 transition-colors duration-300"
              >
                {feature.description}
              </motion.p>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-pure-gold/30 rounded-full" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-antique-gold/30 rounded-full" />
            </motion.div>
          ))}
        </div>
        

        
        {/* Market opportunity highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="luxury-glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-playfair text-2xl text-pure-gold mb-4">Market Opportunity</h3>
            <p className="text-antique-gold/90 mb-4">
              Targeting the ₹2,400 crore Indian toy market with culturally relevant educational gaming
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-champagne-gold font-bold text-lg">15M+</div>
                <div className="text-bronze-gold">Target Children</div>
              </div>
              <div className="text-center">
                <div className="text-champagne-gold font-bold text-lg">1.5M+</div>
                <div className="text-bronze-gold">Schools & NGOs</div>
              </div>
              <div className="text-center">
                <div className="text-champagne-gold font-bold text-lg">23%</div>
                <div className="text-bronze-gold">Annual Growth</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
