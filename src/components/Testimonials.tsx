
import { useRef, useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  rating: number;
}

const TestimonialCard = ({ testimonial, index, inView }: { 
  testimonial: Testimonial;
  index: number;
  inView: boolean;
}) => {
  return (
    <div 
      className={`bg-luxury-dark/70 backdrop-blur-sm p-6 rounded-lg shadow-lg mx-4 my-8 min-w-[300px] max-w-[350px] card-hover transition-all duration-700 transform border border-red-500/20 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex text-luxury-blue mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} fill="currentColor" className="h-5 w-5" />
        ))}
      </div>
      <p className="text-white mb-4">&ldquo;{testimonial.content}&rdquo;</p>
      <div className="flex items-center">
        <div className="bg-luxury-blue text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
          {testimonial.author.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-white">{testimonial.author}</h4>
          <p className="text-sm text-gray-300">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [inView, setInView] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
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

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  const testimonials: Testimonial[] = [
    {
      content: "Legit Properties has completely transformed my business. Their triple-verified leads have helped me close more deals with less effort.",
      author: "Michael Johnson",
      role: "Real Estate Agent, BC",
      rating: 5
    },
    {
      content: "I've tried numerous lead generation services, but Legit Properties stands out with their exclusive assignment model and high conversion rates.",
      author: "Sarah Williams",
      role: "Broker, ON",
      rating: 5
    },
    {
      content: "The exclusive territory model ensures I'm not competing with other agents for the same leads. It's a game-changer for my business.",
      author: "David Chen",
      role: "Real Estate Agent, AB",
      rating: 5
    },
    {
      content: "Legit Properties delivers on their promises. Their performance-based fee structure is refreshing in this industry.",
      author: "Jennifer Lopez",
      role: "Team Leader, BC",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-luxury-dark text-white border-t border-red-500/20 relative">
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'grayscale(100%)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            SIMPLE VERIFIED REFERRALS ACROSS CANADA
          </h2>
          <div className="h-1 w-32 bg-blue-500 mx-auto my-4"></div>
          <p className="mt-4 text-xl text-luxury-grey max-w-3xl mx-auto">
            Providing the best leads for real estate agents
          </p>
        </div>
        
        <div ref={testimonialRef} className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`testimonial-${index}`} testimonial={testimonial} index={index} inView={inView} />
            ))}
          </div>
          <div 
            className="flex animate-infinite-scroll" 
            style={{ 
              animation: "infinite-scroll 30s linear infinite",
              animationDelay: "15s"
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`testimonial-dup-${index}`} testimonial={testimonial} index={index} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
