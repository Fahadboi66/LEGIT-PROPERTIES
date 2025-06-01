import { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, duration, suffix = '', inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
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
  const statsRef = useRef(null);

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
    { value: 1000, label: 'Realtors', suffix: '+' },
    { value: 800, label: 'Brokerages', suffix: '+' },
    { value: 10000, label: 'Leads Generated', suffix: '+' },
  ];

  return (
    <section className="relative py-12 bg-luxury-white border-t overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform backdrop-blur-xl rounded-2xl border border-luxury-grey/40 bg-luxury-blue/10 shadow-lg p-10 ${
                inView
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-5xl lg:text-6xl font-bold text-luxury-dark tracking-tight drop-shadow-md">
                <CountUp end={stat.value} duration={2000} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="mt-4 text-xl font-medium text-luxury-grey tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Gradient Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-blue opacity-30 blur-[120px] rounded-full" />
      </div>
    </section>
  );
};

export default Stats;
