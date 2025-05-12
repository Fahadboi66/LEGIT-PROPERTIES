
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Building, MessageSquare, HelpCircle, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#', icon: <Home className="h-4 w-4" /> },
    { name: 'ABOUT', href: '#about', icon: <User className="h-4 w-4" /> },
    { name: 'WHY US?', href: '#features', icon: <Building className="h-4 w-4" /> },
    { name: 'FAQ\'S', href: '#faq', icon: <HelpCircle className="h-4 w-4" /> },
    { name: 'CONTACT', href: '#contact', icon: <MessageSquare className="h-4 w-4" /> },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-black backdrop-blur-md shadow-md border-b border-red-500/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">
                LEGIT<span className="text-red-500">PROPERTIES</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 flex items-center space-x-1 text-gray-100 hover:text-red-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="ml-6 px-5 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 border border-red-400"
            >
              SIGN UP
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-red-500/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-2 text-red-500">{link.icon}</span>
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="block w-full text-center mt-4 px-5 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-all duration-300 border border-red-400"
            >
              <span className="flex items-center justify-center">
                <LogIn className="h-4 w-4 mr-2" />
                SIGN UP
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
