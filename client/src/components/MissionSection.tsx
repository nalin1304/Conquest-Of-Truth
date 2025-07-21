import { motion } from "framer-motion";
import { Sprout, HandHeart, Globe } from "lucide-react";

export default function MissionSection() {
  const missions = [
    {
      icon: Sprout,
      title: "Cultivating Values",
      description: "We believe that the foundation of a strong society lies in children who understand the difference between right and wrong, who value truth over convenience, and who choose compassion over selfishness.",
      borderColor: "border-saffron"
    },
    {
      icon: HandHeart,
      title: "Building Community",
      description: "Through shared play experiences, we strengthen family bonds and create communities where ancient wisdom flows naturally from one generation to the next, preserving our rich cultural heritage.",
      borderColor: "border-antique-gold"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our vision extends beyond borders, sharing the universal values embedded in Indian philosophy with children worldwide, fostering global understanding and respect for diverse wisdom traditions.",
      borderColor: "border-temple-gold"
    }
  ];

  return (
    <section id="mission" className="py-24 bg-deep-charcoal text-warm-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-saffron/20 to-burgundy/20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="font-inter text-antique-gold text-sm tracking-[0.2em] uppercase mb-4 block">
            Fig 05. Sacred Mission
          </span>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8">
            Nurturing Tomorrow's<br/>Dharmic Leaders
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className={`glass-card rounded-2xl p-8 border-l-4 ${mission.borderColor}`}
            >
              <mission.icon className="w-12 h-12 text-saffron mb-6" />
              <h3 className="font-playfair text-2xl font-semibold mb-4">
                {mission.title}
              </h3>
              <p className="text-warm-ivory/80 leading-relaxed">
                {mission.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <blockquote className="font-playfair text-2xl md:text-3xl italic text-antique-gold mb-8 max-w-4xl mx-auto leading-relaxed">
            "यत्र धर्मस्तत्र जयः - Where there is dharma, there is victory. 
            Through play, we plant the seeds of righteousness in young hearts."
          </blockquote>
          <div className="flex justify-center items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-saffron to-sacred-orange rounded-full flex items-center justify-center">
              <span className="text-2xl">🕉️</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-warm-ivory">Ancient Wisdom</p>
              <p className="text-antique-gold text-sm">Timeless Values for Modern Times</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
