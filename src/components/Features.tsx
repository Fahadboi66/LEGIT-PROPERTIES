
import { useState, useEffect, useRef } from 'react';
import { Shield, Check, XCircle } from 'lucide-react';

const Features = () => {
  const [inView, setInView] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  
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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-black text-white border-t border-red-500/20 relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542889601-399c4f3a8402?q=80&w=2070')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'grayscale(100%)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mt-2 text-5xl font-bold text-white mb-4">
            Why us?
          </h2>
          <div className="h-1 w-20 bg-red-500 mx-auto mb-8"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            At Legit Properties, we specialize in delivering high-quality seller leads and dedicated
            support for real estate professionals. Discover what makes us a trusted partner for agents
            looking to grow and succeed in today's market.
          </p>
        </div>
        
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className={`transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-red-500/20 h-full red-glow">
              <div className="text-red-500 mb-4">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Legit properties</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  All leads we provide are thoroughly vetted by three separate verification teams—
                  ensuring each property is truly legitimate and ready to sell.
                </p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-200 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-red-500/20 h-full red-glow">
              <div className="text-red-500 mb-4">
                <Check className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No competitors</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  At Legit Properties, each referral is assigned to a single agent, no 
                  competitors, no shared leads. We eliminate competition among 
                  agents to ensure you can connect with clients confidently, without 
                  the pressure to respond faster than others.
                </p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-400 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-red-500/20 h-full red-glow">
              <div className="text-red-500 mb-4">
                <XCircle className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cancel Anytime - Zero Hassle</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  We offer a contract-free partnership, giving agents the flexibility to work without long-term 
                  commitments, no 1-year, or multi-year agreements. You're free to cancel our
                  services at any time, with no penalties or cancellation fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
