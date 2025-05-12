
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setVisible(true);
    
    // Preload background image
    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2970"; // City buildings image
    img.onload = () => setImageLoaded(true);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden">
      {/* Red accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-red-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-red-600/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div 
        className={`absolute inset-0 w-full h-full transition-all duration-2000 ${imageLoaded ? 'scale-100' : 'scale-110'}`}
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(139,0,0,0.5) 100%), url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2970')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transformOrigin: 'center',
          transition: 'transform 6s ease-out'
        }}
      ></div>
      
      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-black/80 backdrop-blur-sm p-10 rounded-lg max-w-xl mx-auto border border-red-500/30">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            READY TO START
            <br />A NEW CHAPTER?
          </h1>
          <div className="mt-8">
            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto border border-red-400 text-center inline-block">
              GET STARTED
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <button onClick={scrollToFeatures} className="text-white animate-float">
            <ChevronDown className="h-10 w-10 text-red-400" />
          </button>
        </div>
      </div>
      
      {/* Red accent sparkles */}
      <div className="absolute bottom-40 left-40 w-3 h-3 bg-red-500 rounded-full animate-ping" style={{ animationDuration: "4s" }}></div>
      <div className="absolute top-40 right-60 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDuration: "6s" }}></div>
    </div>
  );
};

export default Hero;
