
import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-luxury-white border-t border-red-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mt-2 text-5xl font-bold sm:text-6xl text-luxury-blue">
            Who We Are
          </h2>
          <div className="flex justify-center items-center mt-4">
            <Search className="h-6 w-6 mr-2 text-black" />
            <p className="text-lg text-luxury-grey">
              Explore How Legit Properties Redefines Quality in Real Estate Lead Generation.
            </p>
          </div>
        </div>
        
        <div ref={aboutRef} className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center mt-10">
          <div className="md:col-span-2">
            <div 
              className={`relative overflow-hidden rounded-lg transition-all duration-700 shadow-lg ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ 
                aspectRatio: "4/3",
                backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-4">
                <div className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-md">
                  TRUSTED
                </div>
              </div>
              
              <div className="absolute inset-0 bg-red-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className={`md:col-span-3 space-y-6 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <p className="text-luxury-dark text-lg">
              At Legit Properties, we're a British Columbia-based referral network committed to 
              helping real estate agents across Canada grow their seller-side business. Our mission is 
              simple: connect licensed agents with high-intent property sellers and empower them 
              to close more deals with confidence and consistency.
            </p>
            
            <p className="text-luxury-dark text-lg">
              We specialise in delivering qualified seller referrals, not just cold leads. Our rigorous 
              vetting process ensures agents spend less time chasing and more time closing. 
              For every successfully closed transaction, we charge a straightforward 20% referral fee. 
              No upfront costs, no hidden fees. It's a performance-based model that lets you scale 
              your business efficiently and sustainably.
            </p>
            
            <p className="text-luxury-dark text-lg">
              Whether you're a solo agent looking to expand or a brokerage ready to boost listing 
              volume, Legit Properties is your trusted partner in real estate growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
