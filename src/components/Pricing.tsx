
import { Check, Info } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  linkText: string;
}

const PricingCard = ({ plan, index, inView }: { plan: Plan; index: number; inView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`rounded-lg overflow-hidden transition-all duration-700 transform ${
        isHovered ? 'scale-105 shadow-xl' : 'shadow-lg'
      } ${plan.popular ? 'border-2 border-luxury-blue' : 'border border-gray-700'} ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`p-6 ${plan.popular ? 'bg-black' : 'bg-luxury-dark'}`}>
        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
        <div className="mt-4 flex items-baseline text-white">
          <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
          <span className="ml-1 text-lg font-semibold">referral fee</span>
        </div>
        <p className="mt-2 text-sm text-luxury-grey">{plan.description}</p>
      </div>
      
      <div className="p-6 bg-gray-900 text-white space-y-4">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-luxury-blue flex-shrink-0 mr-2" />
              <span className="text-luxury-grey">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href="#contact" 
          className={`mt-6 w-full block text-center py-3 px-4 rounded-md font-medium transition-colors duration-300 ${
            plan.popular 
              ? 'bg-luxury-blue text-white hover:bg-blue-700 border border-blue-400' 
              : 'bg-black text-white border border-blue-500 hover:bg-luxury-dark'
          }`}
        >
          {plan.linkText}
        </a>
      </div>
      
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-luxury-blue text-white px-3 py-1 text-sm font-semibold">
          Popular
        </div>
      )}
    </div>
  );
};

const Pricing = () => {
  const [inView, setInView] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);
  
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

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, []);

  const plans: Plan[] = [
    {
      name: "Starting Agent",
      price: "20%",
      description: "Perfect for new real estate agents",
      features: [
        "Triple verified leads",
        "Exclusive assignment",
        "No competition",
        "No upfront costs",
        "Cancel anytime",
        "Direct lead connection"
      ],
      linkText: "Get Started"
    },
    {
      name: "Growth Partner",
      price: "20%",
      description: "For agents ready to scale",
      features: [
        "Triple verified leads",
        "Exclusive assignment",
        "Priority lead delivery",
        "No upfront costs",
        "Cancel anytime",
        "Performance tracking"
      ],
      popular: true,
      linkText: "Get Started"
    },
    {
      name: "Brokerage Solution",
      price: "20%",
      description: "Designed for brokerages",
      features: [
        "Triple verified leads",
        "Team distribution",
        "Custom territory mapping",
        "No upfront costs",
        "Dedicated account manager",
        "Performance reporting"
      ],
      linkText: "Contact Us"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-luxury-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mt-2 text-4xl font-bold text-luxury-dark sm:text-5xl">
            Simple Pricing Structure
          </h2>
          <p className="mt-4 text-lg text-luxury-grey max-w-3xl mx-auto">
            We only charge when you succeed. 20% referral fee on closed deals, with no upfront costs.
          </p>
        </div>
        
        <div ref={pricingRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <PricingCard plan={plan} index={index} inView={inView} />
            </div>
          ))}
        </div>
        
        <div className={`mt-10 text-center transition-all duration-700 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center text-luxury-blue">
            <Info className="h-5 w-5 mr-2" />
            <span>Need a custom plan? <a href="#contact" className="font-semibold underline">Contact us</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
