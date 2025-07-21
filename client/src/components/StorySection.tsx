import { motion } from "framer-motion";

export default function StorySection() {
  const journeySteps = [
    {
      number: "01",
      title: "The Quest Begins",
      description: "Players embark on Rama's legendary journey, making choices that reflect the eternal struggle between dharma and adharma, learning that true victory comes from righteousness.",
      subtitle: "Exile to the Forest",
      color: "saffron"
    },
    {
      number: "02",
      title: "Trials of Character",
      description: "Through Sita's abduction and the alliance with Hanuman, players learn about loyalty, courage, and the power of unwavering faith in the face of adversity.",
      subtitle: "The Great Battle",
      color: "antique-gold"
    },
    {
      number: "03",
      title: "Triumph of Truth",
      description: "The final confrontation with Ravana teaches that true strength comes from righteousness, and that truth always prevails over falsehood.",
      subtitle: "Return to Ayodhya",
      color: "temple-gold"
    }
  ];

  return (
    <section id="story" className="py-24 bg-deep-charcoal text-warm-ivory relative overflow-hidden">
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
            Fig 03. The Sacred Epic
          </span>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8">
            The Ramayan<br/>Reimagined
          </h2>
          <p className="text-xl text-warm-ivory/80 max-w-3xl mx-auto leading-relaxed">
            Journey through the timeless tale of Lord Rama, where every choice shapes destiny 
            and every lesson illuminates the path of righteousness.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-saffron/20 to-burgundy/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-antique-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🏛️</span>
                  </div>
                  <h3 className="font-playfair text-2xl text-warm-ivory mb-2">The Divine Journey</h3>
                  <p className="text-warm-ivory/80">From Ayodhya to Lanka</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-inter text-antique-gold text-sm tracking-wide uppercase">
                  The Divine Journey
                </span>
                <h3 className="font-playfair text-2xl font-semibold text-warm-ivory mt-2">
                  From Ayodhya to Lanka
                </h3>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                className={`border-l-4 border-${step.color} pl-6`}
              >
                <h4 className="font-playfair text-2xl font-semibold mb-4 text-warm-ivory">
                  {step.title}
                </h4>
                <p className="text-warm-ivory/80 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-${step.color}/20 rounded-full flex items-center justify-center`}>
                    <span className={`font-playfair font-bold text-${step.color}`}>
                      {step.number}
                    </span>
                  </div>
                  <span className={`text-${step.color === 'saffron' ? 'antique-gold' : 'saffron'}`}>
                    {step.subtitle}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
