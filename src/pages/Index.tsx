import { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [visibleSections, setVisibleSections] = useState<{[key: string]: boolean}>({
    about: false,
    stats: false,
    features: false,
    process: false,
    testimonials: false,
    faq: false,
    pricing: false,
    cta: false,
    footer: false
  });
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [
      { ref: aboutRef, id: 'about' },
      { ref: statsRef, id: 'stats' },
      { ref: featuresRef, id: 'features' },
      { ref: processRef, id: 'process' },
      { ref: testimonialsRef, id: 'testimonials' },
      { ref: pricingRef, id: 'pricing' },
      { ref: faqRef, id: 'faq' },
      { ref: ctaRef, id: 'cta' },
      { ref: footerRef, id: 'footer' }
    ];

    sections.forEach(section => {
      if (section.ref.current) {
        section.ref.current.id = section.id;
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  const BlueAccent = ({ position, delay = 0 }: { position: string, delay?: number }) => (
    <div 
      className={`absolute ${position} w-3 h-3 bg-luxury-blue rounded-full animate-ping blue-glow`} 
      style={{ animationDuration: `${3 + delay}s`, animationDelay: `${delay}s` }}
    ></div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-luxury-dark to-gray-900 text-luxury-white">
      <Navbar />
      <Hero />
      
      <div className="relative">
        <BlueAccent position="top-40 left-10" />
        <BlueAccent position="bottom-80 right-20" delay={1} />
        <BlueAccent position="top-[60%] left-[80%]" delay={0.5} />
        <BlueAccent position="top-[30%] right-[10%]" delay={1.5} />
        <BlueAccent position="bottom-[20%] left-[15%]" delay={2} />
      
        <div ref={aboutRef} className={`transition-all duration-1000 transform ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <About />
        </div>
        
        <div ref={statsRef} className={`transition-all duration-1000 transform ${visibleSections.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Stats />
        </div>
        
        <div ref={featuresRef} className={`transition-all duration-1000 transform ${visibleSections.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Features />
        </div>
        
        <div ref={processRef} className={`transition-all duration-1000 transform ${visibleSections.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Process />
        </div>
        
        <div ref={testimonialsRef} className={`transition-all duration-1000 transform ${visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Testimonials />
        </div>

        <div ref={pricingRef} className={`transition-all duration-1000 transform ${visibleSections.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Pricing />
        </div>
        
        <div ref={faqRef} className={`transition-all duration-1000 transform ${visibleSections.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <FAQ />
        </div>
                
        <div ref={ctaRef} className={`transition-all duration-1000 transform ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <CTA />
        </div>
        
        <div ref={footerRef} className={`transition-all duration-1000 transform ${visibleSections.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;