import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import fitkitLogo from '../assets/fitkit.jpeg';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  
  // Check if we're on products page
  const isProductsPage = location.pathname.startsWith('/products');
  
  // Determine text colors - always dark on products page, dynamic on home page
  const shouldUseDarkText = isProductsPage || isScrolled;
  
  // Enhanced background for better visibility over dark content
  const getNavbarBackground = () => {
    if (isProductsPage) {
      return isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md';
    }
    return isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-black/20 backdrop-blur-sm';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello FITKIT, I'm interested in a custom kit order.");
    window.open(`https://wa.me/917014680160?text=${message}`, '_blank');
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavbarBackground()} ${isScrolled ? 'shadow-lg' : ''}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 flex-shrink-0"
            onClick={() => navigate('/')}
          >
            <img src={fitkitLogo} alt="FITKIT" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full" />
            <div className="flex flex-col">
              <span className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-colors duration-300 drop-shadow-sm ${
                shouldUseDarkText ? 'text-[#212121]' : 'text-white'
              }`}>FIT KIT</span>
              <span className={`text-xs transition-colors duration-300 hidden sm:block drop-shadow-sm ${
                shouldUseDarkText ? 'text-gray-600' : 'text-gray-200'
              }`}>Engineered for Every Game</span>
            </div>
          </motion.div>

          {/* Centered Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            <motion.button 
              onClick={() => navigate('/products')}
              className={`font-medium transition-all duration-300 relative drop-shadow-sm ${
                shouldUseDarkText ? 'text-[#212121] hover:text-[#0052FF]' : 'text-white hover:text-[#C6FF00]'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Products
              <motion.div
                className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  shouldUseDarkText ? 'bg-[#0052FF]' : 'bg-[#C6FF00]'
                }`}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.button>
            <motion.a 
              href="#about" 
              className={`font-medium transition-all duration-300 relative drop-shadow-sm ${
                shouldUseDarkText ? 'text-[#212121] hover:text-[#0052FF]' : 'text-white hover:text-[#C6FF00]'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              About Us
              <motion.div
                className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  shouldUseDarkText ? 'bg-[#0052FF]' : 'bg-[#C6FF00]'
                }`}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.a>
            {/* <motion.a 
              href="#" 
              className={`font-medium transition-all duration-300 relative drop-shadow-sm ${
                shouldUseDarkText ? 'text-[#212121] hover:text-[#0052FF]' : 'text-white hover:text-[#C6FF00]'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Fabrics
              <motion.div
                className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  shouldUseDarkText ? 'bg-[#0052FF]' : 'bg-[#C6FF00]'
                }`}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.a> */}
          </div>

          {/* Right Side - Search and Contact Button */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            {/* Search Bar */}
            <div className="relative flex items-center">
              <AnimatePresence mode="wait">
                {!isSearchExpanded ? (
                  /* Search Button */
                  <motion.button
                    key="search-button"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSearchExpanded(true)}
                    transition={{ duration: 0.2 }}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      shouldUseDarkText 
                        ? 'bg-white/10 hover:bg-white/20 text-[#212121]' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <Search className="h-5 w-5" />
                  </motion.button>
                ) : (
                  /* Expanded Search Bar */
                  <motion.div
                    key="search-bar"
                    initial={{ width: 0, opacity: 0, scale: 0.8 }}
                    animate={{ width: 'auto', opacity: 1, scale: 1 }}
                    exit={{ width: 0, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative flex items-center"
                  >
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className={`h-4 w-4 ${
                        shouldUseDarkText ? 'text-gray-400' : 'text-gray-300'
                      }`} />
                    </div>
                    <input
                      type="text"
                      placeholder="Search kits..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onBlur={() => {
                        if (!searchQuery) {
                          setIsSearchExpanded(false);
                        }
                      }}
                      autoFocus
                      className={`pl-10 pr-10 py-2 w-64 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0052FF] ${
                        shouldUseDarkText 
                          ? 'bg-white border-gray-300 text-[#212121] placeholder-gray-500' 
                          : 'bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-gray-200'
                      }`}
                    />
                    <button
                      onClick={() => {
                        setIsSearchExpanded(false);
                        setSearchQuery('');
                      }}
                      className={`absolute right-3 p-1 rounded-full transition-colors duration-200 ${
                        shouldUseDarkText 
                          ? 'hover:bg-gray-200 text-gray-400 hover:text-gray-600' 
                          : 'hover:bg-white/20 text-gray-300 hover:text-white'
                      }`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                shouldUseDarkText 
                  ? 'bg-[#C6FF00] text-[#212121] hover:bg-[#B8E600]' 
                  : 'bg-[#C6FF00] text-[#212121] hover:bg-[#B8E600]'
              }`}
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-5 w-5 sm:h-6 sm:w-6 drop-shadow-sm ${shouldUseDarkText ? 'text-[#212121]' : 'text-white'}`} />
            ) : (
              <Menu className={`h-5 w-5 sm:h-6 sm:w-6 drop-shadow-sm ${shouldUseDarkText ? 'text-[#212121]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden mt-2 rounded-lg p-3 sm:p-4 shadow-xl backdrop-blur-lg ${
              shouldUseDarkText ? 'bg-white/98 border border-gray-200' : 'bg-black/95 border border-white/10'
            }`}
          >
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {/* Mobile Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className={`h-4 w-4 ${
                    shouldUseDarkText ? 'text-gray-400' : 'text-gray-300'
                  }`} />
                </div>
                <input
                  type="text"
                  placeholder="Search kits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 pr-4 py-2 sm:py-2 w-full rounded-lg border text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0052FF] ${
                    shouldUseDarkText 
                      ? 'bg-gray-50 border-gray-300 text-[#212121] placeholder-gray-500' 
                      : 'bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-gray-200'
                  }`}
                />
              </div>
              
              {/* Navigation Links */}
              <button 
                onClick={() => {
                  navigate('/products');
                  setIsMobileMenuOpen(false);
                }}
                className={`font-medium text-sm sm:text-base transition-colors duration-200 text-left w-full ${
                  shouldUseDarkText 
                    ? 'text-[#212121] hover:text-[#0052FF]' 
                    : 'text-white hover:text-[#C6FF00]'
                }`}
              >
                Products
              </button>
              <a 
                href="#about" 
                className={`font-medium text-sm sm:text-base transition-colors duration-200 text-left w-full block ${
                  shouldUseDarkText 
                    ? 'text-[#212121] hover:text-[#0052FF]' 
                    : 'text-white hover:text-[#C6FF00]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              {/* <a 
                href="#fabrics" 
                className={`font-medium text-sm sm:text-base transition-colors duration-200 ${
                  shouldUseDarkText 
                    ? 'text-[#212121] hover:text-[#0052FF]' 
                    : 'text-white hover:text-[#C6FF00]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fabrics
              </a> */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMobileMenuOpen(false);
                }}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-[#C6FF00] text-[#212121] hover:bg-[#B8E600] rounded-lg font-semibold text-sm sm:text-base transition-all duration-200"
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