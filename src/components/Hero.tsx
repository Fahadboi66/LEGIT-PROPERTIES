import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setVisible(true);
    const img = new Image();
    img.src =
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2970";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-2000 ${
          imageLoaded ? "opacity-70" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2970')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-full px-4 sm:px-6 lg:px-12 py-8 transition-all duration-1000 transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } w-full`}
      >
      <div>
        <div className="text-center lg:text-left">
          <span className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 tracking-tight leading-tight max-w-none lg:max-w-xl mx-auto lg:mx-0">
            Finding Your New
          </span>
        </div>
        <div className="text-center lg:text-left">
          <span className="text-3xl sm:text-4xl lg:text-6xl font-bold text-luxury-blue mb-4 lg:mb-6 tracking-tight leading-tight max-w-none lg:max-w-xl mx-auto lg:mx-0">
            Home
          </span>
          <span className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 tracking-tight leading-tight max-w-none lg:max-w-xl mx-auto lg:mx-0">
            {" "}Is Simple
          </span>

          <p className="text-base sm:text-lg text-white mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0 lg:max-w-md">
            LegitProperties.com is your go-to destination for finding the
            perfect rental home. With thousands of property listings across the
            globe.
          </p>
          </div>
          {/* Search Bar - Luxurious Design */}
          <div className="w-full max-w-sm mx-auto lg:mx-0 lg:max-w-4xl">
            {/* Mobile Search Bar */}
            <div className="lg:hidden backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl space-y-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="w-full px-6 py-3 lg:py-4 bg-white/90 backdrop-blur-sm border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-luxury-blue focus:bg-white text-gray-800 placeholder-gray-500 font-medium text-sm lg:text-lg shadow-lg transition-all duration-300"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <div className="w-2 h-2 bg-luxury-blue rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="relative">
                <select className="w-full px-6 py-3 lg:py-4 bg-white/90 backdrop-blur-sm border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-luxury-blue focus:bg-white text-gray-800 font-medium text-sm lg:text-lg shadow-lg transition-all duration-300 appearance-none cursor-pointer">
                  <option value="">Property Type</option>
                  <option value="villa">Luxury Villa</option>
                  <option value="apartment">Premium Apartment</option>
                  <option value="penthouse">Penthouse Suite</option>
                  <option value="cottage">Designer Cottage</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select className="w-full px-6 py-3 lg:py-4 bg-white/90 backdrop-blur-sm border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-luxury-blue focus:bg-white text-gray-800 font-medium text-sm lg:text-lg shadow-lg transition-all duration-300 appearance-none cursor-pointer">
                  <option value="">Price Range</option>
                  <option value="500000">€500K - €750K</option>
                  <option value="750000">€750K - €1M</option>
                  <option value="1000000">€1M - €2M</option>
                  <option value="2000000">€2M+</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <button className="w-full bg-luxury-dark text-luxury-white px-8 py-3 lg:py-4 rounded-2xl font-bold text-base lg:text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.02] transform">
                <Search className="h-6 w-6" />
                Discover
              </button>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2 shadow-2xl items-center gap-1 hover:bg-white/15 transition-all duration-500">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white text-gray-800 placeholder-gray-500 font-medium transition-all duration-300"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <div className="w-2 h-2 bg-luxury-blue rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="relative flex-1">
                <select className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white text-gray-800 font-medium transition-all duration-300 appearance-none cursor-pointer">
                  <option value="">Property Type</option>
                  <option value="villa">Luxury Villa</option>
                  <option value="apartment">Premium Apartment</option>
                  <option value="penthouse">Penthouse Suite</option>
                  <option value="cottage">Designer Cottage</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative flex-1">
                <select className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white text-gray-800 font-medium transition-all duration-300 appearance-none cursor-pointer">
                  <option value="">Price Range</option>
                  <option value="500000">€500K - €750K</option>
                  <option value="750000">€750K - €1M</option>
                  <option value="1000000">€1M - €2M</option>
                  <option value="2000000">€2M+</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <button className="bg-gradient-to-r bg-luxury-dark text-luxury-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-950 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transform whitespace-nowrap">
                <Search className="h-5 w-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
