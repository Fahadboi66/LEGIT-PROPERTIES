
import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration: number;
  suffix?: string;
  inView: boolean;
}

const CountUp = ({ end, duration, suffix = '', inView }: CountUpProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, inView]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const Stats = () => {
  const [inView, setInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

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

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats = [
    { value: 1000, label: "Realtors", suffix: "+" },
    { value: 800, label: "Brokerages", suffix: "+" },
    { value: 10000, label: "Leads Generated", suffix: "+" },
  ];

  return (
    <section className="py-16 bg-black border-t border-red-500/20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'grayscale(100%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-1000 transform glass-card p-8 rounded-lg ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-5xl lg:text-6xl font-bold text-red-500 mb-2">
                <CountUp end={stat.value} duration={2000} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="mt-2 text-xl text-white font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
