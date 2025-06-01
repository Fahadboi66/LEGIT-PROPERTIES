import { useState } from 'react';
import { Menu, X, Home, User, Building, MessageSquare, HelpCircle } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', icon: <Home className="h-4 w-4" /> },
    { name: 'Contacts', href: '#contact', icon: <MessageSquare className="h-4 w-4" /> },
    { name: 'Support', href: '#faq', icon: <HelpCircle className="h-4 w-4" /> },
    { name: 'Location', href: '#features', icon: <Building className="h-4 w-4" /> },
    { name: 'About Us', href: '#about', icon: <User className="h-4 w-4" /> },
  ];

  return (
    <nav className="w-full z-50 transition-all duration-300 bg-transparent">
      <div className="px-6 sm:px-8 lg:px-16 box-border max-w-full">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-luxury-blue tracking-tight">
                LEGIT
              </span>
              <span className="text-2xl font-bold text-luxury-white tracking-tight">
                PROPERTIES
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-luxury-white hover:text-luxury-blue transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button for Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-luxury-white text-luxury-blue px-4 py-2 rounded-full font-medium text-sm hover:bg-blue-100 transition-all duration-300 blue-glow"
            >
              Try Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg focus:outline-none text-luxury-white hover:bg-blue-900/20 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-luxury-dark/90 backdrop-blur-lg border-t border-blue-300/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-luxury-white hover:text-luxury-blue block px-3 py-2 rounded-lg text-base font-medium flex items-center transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-2 text-luxury-blue">{link.icon}</span>
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-luxury-white text-luxury-blue block w-full text-center px-4 py-2 rounded-full font-medium text-sm hover:bg-blue-100 transition-all duration-300 blue-glow"
            >
              Try Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;