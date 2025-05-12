
import { useRef, useEffect, useState } from 'react';

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Preload background image
    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067"; // Modern building image
    img.onload = () => setImageLoaded(true);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-black" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={`bg-black rounded-2xl p-10 md:p-16 shadow-2xl overflow-hidden relative transition-all duration-1000 transform ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} border border-red-500/30`}
        >
          <div 
            className={`absolute inset-0 transition-transform duration-3000 ${imageLoaded && inView ? 'scale-100' : 'scale-110'}`}
            style={{
              backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(139,0,0,0.3)), url('https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3,
              transformOrigin: 'center',
              transition: 'transform 5s ease-out'
            }}
          ></div>
          
          <div className="text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              GET IN TOUCH
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
              Reach out to us and let us know how we can help you with your real estate needs. 
              We're ready to connect you with high-quality seller leads today.
            </p>
            
            <a href="#" className="inline-block bg-red-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-red-400">
              CONTACT NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
