
import { useState, useEffect, useRef } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [inView, setInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
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

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  const faqItems: FAQItem[] = [
    {
      question: "What does a triple verified lead mean?",
      answer: "Triple Verification is our lead qualification process, where three dedicated teams independently review and validate each lead to ensure it's accurate, motivated, and ready for our partner agents."
    },
    {
      question: "How will I receive leads once I sign up?",
      answer: "Leads are delivered in two ways. In rare case, when a prospect is ready to sell within 20-30 days, we offer live call transfers. More commonly, you'll receive leads via email, including all essential details and a recording of the prospect's conversation for context."
    },
    {
      question: "What if i don't receive any leads?",
      answer: "We're committed to delivering on our promise. If we're unable to provide any leads within 60 days of completing your profile, you'll receive a full refund, though our team works hard to ensure that never happens."
    }
  ];

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black border-t border-red-500/20 relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2074')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'grayscale(100%)'
        }}
      ></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-white mb-4">
            FAQ's
          </h2>
          <div className="h-1 w-20 bg-red-500 mx-auto mb-8"></div>
        </div>
        
        <div 
          ref={faqRef} 
          className="space-y-8"
        >
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-red-500/20`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => toggleQuestion(index)}
            >
              <div className="mb-2">
                <h3 className="text-2xl font-bold text-white">
                  {item.question}
                </h3>
                <p className="mt-2 text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
