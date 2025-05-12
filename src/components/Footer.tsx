import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              
              <a href="#" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-white">
                  LEGIT<span className="text-red-500">PROPERTIES</span>
                </span>
              </a>
            </div>

            <p className="text-gray-400 mb-6">
              Connecting real estate agents with high-quality seller leads for a
              seamless pathway to closing successful deals.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
                >
                  Why us?
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lynx-500 transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-lynx-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Canada
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-lynx-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+921234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-lynx-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@legitproperties.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} LEGIT-PROPERTIES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
