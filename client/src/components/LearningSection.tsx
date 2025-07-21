import { motion } from "framer-motion";
import { Users, School, Brain, Target } from "lucide-react";

export default function LearningSection() {
  const stats = [
    {
      icon: Target,
      title: "6-14",
      subtitle: "Age Range",
      description: "Carefully designed for optimal learning and engagement",
      gradient: "from-saffron to-sacred-orange"
    },
    {
      icon: Users,
      title: "Family Bonding",
      subtitle: "Together",
      description: "Brings generations together through shared storytelling",
      gradient: "from-antique-gold to-temple-gold"
    },
    {
      icon: School,
      title: "Educational Use",
      subtitle: "Schools",
      description: "Perfect for schools and educational institutions",
      gradient: "from-burgundy to-saffron"
    },
    {
      icon: Brain,
      title: "Cognitive Growth",
      subtitle: "Development",
      description: "Develops critical thinking and moral reasoning",
      gradient: "from-temple-gold to-antique-gold"
    }
  ];

  const learningPoints = [
    {
      title: "Moral Decision Making",
      description: "Players face ethical dilemmas that mirror real-life situations, developing strong moral compass.",
      color: "saffron"
    },
    {
      title: "Cultural Heritage",
      description: "Deep dive into Indian mythology while building pride in cultural identity.",
      color: "antique-gold"
    },
    {
      title: "Strategic Thinking",
      description: "Complex gameplay mechanics that enhance problem-solving and strategic planning skills.",
      color: "burgundy"
    }
  ];

  return (
    <section id="learning" className="py-24 bg-gradient-to-br from-warm-ivory via-antique-gold/5 to-saffron/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="font-inter text-antique-gold text-sm tracking-[0.2em] uppercase mb-4 block">
            Fig 04. Educational Excellence
          </span>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-deep-charcoal mb-8">
            Beyond Entertainment<br/>Into Enlightenment
          </h2>
          <p className="text-xl text-soft-charcoal max-w-3xl mx-auto leading-relaxed">
            Every element is carefully crafted to nurture moral reasoning, cultural appreciation, 
            and character development in young minds aged 6 to 14.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2 text-deep-charcoal">
                {stat.title}
              </h3>
              <p className="text-soft-charcoal text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card rounded-3xl p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-6 text-deep-charcoal">
                The Learning Journey
              </h3>
              <div className="space-y-6">
                {learningPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-6 h-6 bg-${point.color} rounded-full flex-shrink-0 mt-1`} />
                    <div>
                      <h4 className="font-semibold text-deep-charcoal mb-2">
                        {point.title}
                      </h4>
                      <p className="text-soft-charcoal">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-saffron/10 to-antique-gold/10 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🎲</span>
                  </div>
                  <h3 className="font-playfair text-2xl text-deep-charcoal mb-2">Learning Through Play</h3>
                  <p className="text-soft-charcoal">Educational board game experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
