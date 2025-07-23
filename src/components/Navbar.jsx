import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import fitkitLogo from '../assets/fitkit.jpeg';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello FITKIT, I'm interested in a custom kit order.");
    window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-transparent shadow-lg backdrop-blur-sm ' : 'bg-transparent backdrop-blur-sm '}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
                      <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <img src={fitkitLogo} alt="FITKIT" className="w-16 h-16 rounded-full" />
              <div className="flex flex-col">
                <span className={`text-3xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-[#212121]' : 'text-white'
                }`}>FIT KIT</span>
                <span className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}>Engineered for Every Game</span>
              </div>
            </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a 
              href="#products" 
              className={`font-medium transition-all duration-300 relative ${
                isScrolled ? 'text-[#212121] hover:text-[#0052FF]' : 'text-white hover:text-[#C6FF00]'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Products
              <motion.div
                className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-[#0052FF]' : 'bg-[#C6FF00]'
                }`}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.a>
            <motion.a 
              href="#about" 
              className={`font-medium transition-all duration-300 relative ${
                isScrolled ? 'text-[#212121] hover:text-[#0052FF]' : 'text-white hover:text-[#C6FF00]'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              About Us
              <motion.div
                className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-[#0052FF]' : 'bg-[#C6FF00]'
                }`}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.a>
            <motion.a 
              href="#fabrics" 
              className={`font-medium transition-all duration-300 relative ${
                isScrolled ? 'text-[#212121] hover:text-[#0052FF]' : 'text-white hover:text-[#C6FF00]'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Fabrics
              <motion.div
                className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-[#0052FF]' : 'bg-[#C6FF00]'
                }`}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isScrolled 
                  ? 'bg-[#C6FF00] text-[#212121] hover:bg-[#B8E600]' 
                  : 'bg-[#C6FF00] text-[#212121] hover:bg-[#B8E600]'
              }`}
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-[#212121]' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-[#212121]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden mt-2 rounded-lg p-4 shadow-xl ${
              isScrolled ? 'bg-white' : 'bg-black'
            }`}
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#products" 
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-[#212121] hover:text-[#0052FF]' 
                    : 'text-white hover:text-[#C6FF00]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#about" 
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-[#212121] hover:text-[#0052FF]' 
                    : 'text-white hover:text-[#C6FF00]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#fabrics" 
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-[#212121] hover:text-[#0052FF]' 
                    : 'text-white hover:text-[#C6FF00]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fabrics
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMobileMenuOpen(false);
                }}
                className="px-4 py-2 bg-[#C6FF00] text-[#212121] hover:bg-[#B8E600] rounded-lg font-semibold transition-all duration-200"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 