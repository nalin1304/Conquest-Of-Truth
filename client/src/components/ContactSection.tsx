import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your interest! We will connect with you soon.",
        });
        setFormData({ name: '', email: '', interest: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "9321029040@gmail.com",
      color: "pure-gold"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91 93210 29040",
      color: "antique-gold"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Mumbai, Maharashtra, India",
      color: "bronze-gold"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-deep-black to-rich-black relative overflow-hidden">
      {/* Background decorative elements with subtle particles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-32 h-32 bg-pure-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-antique-gold rounded-full blur-2xl" />
      </div>
      
      {/* Subtle floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-pure-gold/60 rounded-full"
          animate={{
            y: [0, -60, 0],
            x: [0, Math.cos(i) * 15, 0],
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${70 + Math.random() * 30}%`
          }}
        />
      ))}
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
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
            <span className="relative z-10">Fig 06. Join the Sacred Quest</span>
            <motion.div
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px bg-pure-gold/50"
            />
          </motion.span>
          
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-pure-gold mb-8">
            Begin Your Journey<br/>
            <span className="text-antique-gold">Into Timeless Wisdom</span>
          </h2>
          <p className="text-xl text-champagne-gold/90 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience this revolutionary approach to value-based learning. 
            Join our community of conscious parents and educators.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="luxury-glass rounded-3xl p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-6 text-pure-gold">
                Connect With Us
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 bg-${contact.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <contact.icon className="w-5 h-5 text-luxury-black" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-champagne-gold group-hover:text-pure-gold transition-colors duration-300">{contact.title}</p>
                      <p className="text-antique-gold/90 group-hover:text-champagne-gold transition-colors duration-300">{contact.info}</p>
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
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-pure-gold font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your full name"
                    required
                    className="bg-rich-black border-antique-gold/30 focus:border-pure-gold text-champagne-gold placeholder:text-antique-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-pure-gold font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    required
                    className="bg-rich-black border-antique-gold/30 focus:border-pure-gold text-champagne-gold placeholder:text-antique-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-pure-gold font-medium mb-2">Interest</label>
                  <Select value={formData.interest} onValueChange={(value) => setFormData({...formData, interest: value})}>
                    <SelectTrigger className="bg-rich-black border-antique-gold/30 focus:border-pure-gold text-champagne-gold">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent className="bg-rich-black border-antique-gold/30">
                      <SelectItem value="parent" className="text-champagne-gold hover:bg-pure-gold/10">Parent/Family</SelectItem>
                      <SelectItem value="education" className="text-champagne-gold hover:bg-pure-gold/10">Educational Institution</SelectItem>
                      <SelectItem value="investor" className="text-champagne-gold hover:bg-pure-gold/10">Investor/Partner</SelectItem>
                      <SelectItem value="media" className="text-champagne-gold hover:bg-pure-gold/10">Media/Press</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-pure-gold font-medium mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Share your thoughts or questions..."
                    rows={4}
                    required
                    className="bg-rich-black border-antique-gold/30 focus:border-pure-gold text-champagne-gold placeholder:text-antique-gold/50"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-gold text-luxury-black py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Sending Sacred Message..." : "Begin the Quest Together"}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-champagne-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
