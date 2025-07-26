import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronLeft, ChevronRight, Filter, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { fabricImages } from '../assets/images.jsx';

const FabricCard = ({ fabricName, images, properties, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 sm:mb-8 border border-gray-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Image Carousel */}
        <div className="relative bg-gray-100 rounded-t-xl md:rounded-l-xl md:rounded-tr-none" >
          <div className="aspect-square relative overflow-hidden p-2 sm:p-3">
            <img
              src={images[currentImageIndex]}
              alt={`${fabricName} jersey ${currentImageIndex + 1}`}
              className="w-full h-full object-fit rounded-lg"
            />
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </button>
              </>
            )}
            
            {/* Image Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
                {images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => setCurrentImageIndex(imgIndex)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* BAS Label */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-black/70 text-white px-2 sm:px-3 py-1 rounded text-sm sm:text-base lg:text-lg font-medium">
            BAS{index + 1}
          </div>
        </div>

        {/* Fabric Information */}
        <div className="p-4 sm:p-6 md:p-8 bg-gray-50 rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4 sm:mb-6">{fabricName}</h3>
          
          <div className="space-y-3 sm:space-y-4">
            {properties.map((property, propIndex) => (
              <motion.div
                key={propIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: propIndex * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-gray-800 text-base sm:text-lg font-medium">{property}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const message = encodeURIComponent(`Hello FITKIT, I'm interested in the ${fabricName} fabric!`);
              window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
            }}
            className="mt-6 sm:mt-8 bg-[#0052FF] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-[#0041CC] transition-colors duration-200 w-full shadow-md text-sm sm:text-base"
          >
            Inquire About This Fabric
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const FilterModal = ({ isOpen, onClose, sports, categories, activeSport, activeCategory, handleSportChange, handleCategoryChange }) => {
  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-80 max-w-[90vw] bg-white z-50 lg:hidden shadow-xl overflow-y-auto"
          >
            <div className="p-4 pb-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#212121]">Filter Options</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Sports Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#212121] mb-4">By Sports</h3>
                <div className="space-y-2">
                  {sports.map((sport) => (
                    <motion.button
                      key={sport.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSportChange(sport.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                        activeSport === sport.id
                          ? 'bg-[#0052FF] text-white'
                          : 'text-[#212121] hover:bg-gray-100'
                      }`}
                    >
                      {sport.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Categories Section */}
              <div>
                <h3 className="text-lg font-semibold text-[#212121] mb-4">Changer's Wear</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                        activeCategory === category
                          ? 'bg-[#0052FF] text-white'
                          : 'text-[#212121] hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [activeSport, setActiveSport] = useState('basketball');
  const [activeCategory, setActiveCategory] = useState('T-Shirts');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showFilterHint, setShowFilterHint] = useState(true);

  const sports = [
    { id: 'basketball', name: 'Basketball' },
    { id: 'badminton', name: 'Badminton' },
    { id: 'football', name: 'Football' },
    { id: 'volleyball', name: 'Volleyball' },
    { id: 'tennis', name: 'Tennis' },
    { id: 'cricket', name: 'Cricket' }
  ];

  const categories = ['T-Shirts', 'Hoodies', 'Lowers', 'Varsity Jackets', 'Tracksuits'];

  // Fabric properties for different fabric types
  const fabricProperties = {
    "Polyester-Spandex (Lycra)": [
      "Allows full-body stretch",
      "Helps fast movement", 
      "4-way stretch",
      "Body-hugging",
      "Highly flexible"
    ],
    "Interlock Polyester Mesh": [
      "Allows full-body stretch",
      "Helps fast movement",
      "4-way stretch", 
      "Body-hugging",
      "Highly flexible"
    ],
    "Dry-Fit Dot Mesh": [
      "Allows full-body stretch",
      "Helps fast movement",
      "4-way stretch",
      "Body-hugging", 
      "Highly flexible"
    ],
    "Recycled Polyester Dry-Fit": [
      "Eco-friendly material",
      "Moisture-wicking",
      "Lightweight",
      "Quick-dry technology",
      "Sustainable choice"
    ],
    "Bird-Eye Mesh": [
      "Superior breathability",
      "Moisture management",
      "Flexible movement",
      "Professional finish",
      "Durable construction"
    ],
    "Warp Knit Interlock": [
      "Enhanced durability",
      "Professional appearance",
      "Comfortable fit",
      "Easy maintenance",
      "Long-lasting quality"
    ],
    "Dry-Fit Polyester": [
      "Advanced moisture-wicking",
      "Quick-dry technology",
      "Lightweight feel",
      "Professional finish",
      "High performance"
    ],
    "Dot-Knit Polyester": [
      "Breathable design",
      "Moisture control",
      "Flexible movement",
      "Comfortable wear",
      "Professional quality"
    ],
    "Cotton-Poly Piqué": [
      "Natural comfort",
      "Breathable fabric",
      "Durable construction",
      "Easy care",
      "Classic feel"
    ],
    "UV-Protected Polyester": [
      "UV protection",
      "Sun-safe fabric",
      "Moisture-wicking",
      "Lightweight",
      "Outdoor performance"
    ],
    "Honeycomb Knit": [
      "Unique texture",
      "Enhanced breathability",
      "Moisture management",
      "Comfortable fit",
      "Professional look"
    ],
    "Mesh Polyester": [
      "Maximum ventilation",
      "Lightweight design",
      "Quick-dry",
      "Flexible movement",
      "Athletic performance"
    ],
    "Microfiber Polyester": [
      "Ultra-soft feel",
      "Moisture-wicking",
      "Lightweight",
      "Quick-dry",
      "Premium comfort"
    ],
    "Dry-Fit Jersey Knit": [
      "Advanced moisture control",
      "Comfortable stretch",
      "Professional finish",
      "Easy care",
      "Athletic performance"
    ],
    "Warp Knit Fabric": [
      "Superior stretch",
      "Shape retention",
      "Durable construction",
      "Professional appearance",
      "Long-lasting"
    ],
    "Polyester-Spandex": [
      "4-way stretch",
      "Body-hugging fit",
      "Flexible movement",
      "Comfort stretch",
      "Athletic performance"
    ],
    "Dry-Fit Knit": [
      "Moisture-wicking",
      "Quick-dry technology",
      "Lightweight",
      "Breathable",
      "Athletic performance"
    ],
    "Jacquard Mesh": [
      "Decorative texture",
      "Enhanced breathability",
      "Professional appearance",
      "Comfortable wear",
      "Unique design"
    ]
  };

  // Handle URL parameters on component mount
  useEffect(() => {
    const sportParam = searchParams.get('sport');
    if (sportParam && sports.find(s => s.id === sportParam)) {
      setActiveSport(sportParam);
    }
  }, [searchParams]);

  const handleSportChange = (sportId) => {
    setActiveSport(sportId);
    setIsFilterOpen(false); // Close filter on mobile after selection
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setIsFilterOpen(false); // Close filter on mobile after selection
  };

  const getCurrentFabrics = () => {
    const sportFabrics = fabricImages[activeSport] || {};
    return Object.entries(sportFabrics).map(([fabricName, images]) => ({
      name: fabricName,
      images,
      properties: fabricProperties[fabricName] || [
        "High-quality fabric",
        "Comfortable fit",
        "Durable construction",
        "Professional finish",
        "Athletic performance"
      ]
    }));
  };

  const currentSportName = sports.find(s => s.id === activeSport)?.name || 'Basketball';

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-24">
      <div className="container-custom py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Sidebar - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-[#F8F9FA] rounded-xl p-4 sm:p-6 sticky top-4 sm:top-6 lg:top-8">
              <div className="mb-6 lg:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-[#212121] mb-3 sm:mb-4">By Sports</h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                  {sports.map((sport) => (
                    <motion.button
                      key={sport.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSportChange(sport.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${
                        activeSport === sport.id
                          ? 'bg-[#0052FF] text-white'
                          : 'text-[#212121] hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      {sport.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#212121] mb-3 sm:mb-4">Changer's Wear</h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${
                        activeCategory === category
                          ? 'bg-[#0052FF] text-white'
                          : 'text-[#212121] hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-1 lg:col-span-3">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#212121] mb-2">
                {currentSportName} Fabrics
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Choose from our premium collection of performance fabrics designed for {currentSportName.toLowerCase()}
              </p>
            </motion.div>

            {/* MOQ and Order Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 p-3 sm:p-4 bg-[#F8F9FA] rounded-lg">
              <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#212121]">
                Minimum Order Quantity (MOQ) - Just 10 pieces
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const message = encodeURIComponent("Hello FITKIT, I'd like to place an order!");
                  window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
                }}
                className="bg-[#C6FF00] text-[#212121] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-[#B8E600] transition-colors duration-200 whitespace-nowrap text-sm sm:text-base w-full sm:w-auto"
              >
                Order by WhatsApp
              </motion.button>
            </div>

            {/* Fabric Cards */}
            <div className="space-y-6 sm:space-y-8">
              {getCurrentFabrics().map((fabric, index) => (
                <FabricCard
                  key={fabric.name}
                  fabricName={fabric.name}
                  images={fabric.images}
                  properties={fabric.properties}
                  index={index}
                />
              ))}
            </div>

            {/* No fabrics message */}
            {getCurrentFabrics().length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center py-12 sm:py-16"
              >
                <div className="text-4xl sm:text-6xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#212121] mb-2">
                  Coming Soon!
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 px-4">
                  We're working on adding fabric options for {currentSportName}. 
                  Contact us for custom fabric solutions.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const message = encodeURIComponent(`Hello FITKIT, I'd like to inquire about ${currentSportName} fabrics!`);
                    window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
                  }}
                  className="bg-[#0052FF] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-[#0041CC] transition-colors duration-200 text-sm sm:text-base"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Filter Button for Mobile */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="lg:hidden fixed bottom-6 right-6 z-30"
      >
        {/* Filter Hint Tooltip */}
        <AnimatePresence>
          {showFilterHint && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              transition={{ delay: 1, duration: 0.3 }}
              onAnimationComplete={() => {
                setTimeout(() => setShowFilterHint(false), 3000);
              }}
              className="absolute bottom-full right-0 mb-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
            >
              Tap to filter
              <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(0, 82, 255, 0.4)',
              '0 0 0 20px rgba(0, 82, 255, 0)',
              '0 0 0 0 rgba(0, 82, 255, 0)'
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }
          }}
          onClick={() => {
            setIsFilterOpen(true);
            setShowFilterHint(false);
          }}
          className="relative bg-[#0052FF] text-white p-4 rounded-full shadow-2xl hover:bg-[#0041CC] transition-all duration-200"
          style={{
            filter: 'drop-shadow(0 10px 20px rgba(0, 82, 255, 0.3))'
          }}
        >
          <Filter className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Filter Modal for Mobile */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        sports={sports}
        categories={categories}
        activeSport={activeSport}
        activeCategory={activeCategory}
        handleSportChange={handleSportChange}
        handleCategoryChange={handleCategoryChange}
      />
    </div>
  );
};

export default ProductsPage; 