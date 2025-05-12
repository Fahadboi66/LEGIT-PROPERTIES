
import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const Process = () => {
  const [inView, setInView] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);
  
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

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: "1",
      title: "Lead Sourcing",
      description: "We identify high-intent seller leads in your preferred service area using data-backed strategies and targeted outreach."
    },
    {
      number: "2",
      title: "Triple verification",
      description: "Our Triple Verification Team meticulously reviews each lead and ensure sellers authenticity."
    },
    {
      number: "3",
      title: "Exclusive Assignment",
      description: "Once a lead is verified, the lead is assigned exclusively to you, no competition, no shared contacts, and no bidding with other agents."
    },
    {
      number: "4",
      title: "Direct Connection",
      description: "You receive the lead details directly, allowing you to reach out, build rapport, and move forward at your own pace."
    },
    {
      number: "5",
      title: "Deal Closure & Referral Fee",
      description: "We charge a 20% referral fee only upon the successful closing of a transaction no upfront costs or hidden fees."
    }
  ];

  return (
    <section id="process" className="py-20 bg-black text-white border-t border-red-500/20 relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'grayscale(100%)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-white mb-4">
            Our Step-by-Step Process
          </h2>
          <div className="h-1 w-32 bg-red-500 mx-auto mb-8"></div>
        </div>
        
        <div ref={processRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.slice(0, 3).map((step, index) => (
            <div 
              key={index} 
              className={`p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-red-500/20 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-red-500 mb-4 flex justify-center">
                <div className="rounded-full bg-red-500/10 p-3">
                  <CheckCircle className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {step.number}. {step.title}
              </h3>
              <p className="text-gray-300 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {steps.slice(3).map((step, index) => (
            <div 
              key={index + 3} 
              className={`p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-red-500/20 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="text-red-500 mb-4 flex justify-center">
                <div className="rounded-full bg-red-500/10 p-3">
                  <CheckCircle className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {step.number}. {step.title}
              </h3>
              <p className="text-gray-300 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
