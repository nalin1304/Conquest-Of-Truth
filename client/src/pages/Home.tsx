import { useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import StorySection from "@/components/StorySection";
import LearningSection from "@/components/LearningSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Conquest of Truth - Mythology-Inspired Learning | Ancient Wisdom for Modern Times";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience the timeless wisdom of Ramayan through innovative board games. Value-based learning for children aged 6-14, bringing ancient Indian mythology to modern families through engaging gameplay.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Experience the timeless wisdom of Ramayan through innovative board games. Value-based learning for children aged 6-14, bringing ancient Indian mythology to modern families through engaging gameplay.';
      document.head.appendChild(meta);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Conquest of Truth - Mythology-Inspired Learning' },
      { property: 'og:description', content: 'Bringing the timeless wisdom of Ramayan to modern families through innovative, value-based board game experiences.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
    ];

    ogTags.forEach(tag => {
      const existing = document.querySelector(`meta[property="${tag.property}"]`);
      if (existing) {
        existing.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-luxury-black overflow-x-hidden">
      <LoadingScreen />
      <Navigation />
      <HeroSection />
      <VisionSection />
      <StorySection />
      <LearningSection />
      <MissionSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
