import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveProductCard = ({ 
  images = [], 
  sport, 
  tags = [], 
  descriptions = {},
  onTagClick,
  fabricName,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTag, setActiveTag] = useState(tags[0] || 'BAS1');
  const [isAutoSliding, setIsAutoSliding] = useState(false);
  const slideIntervalRef = useRef(null);

  // Handle different image structures
  const getCurrentImages = () => {
    if (typeof images === 'object' && images[activeTag]) {
      // If images is an object with tag keys
      return images[activeTag];
    } else if (Array.isArray(images)) {
      // If images is a simple array
      return images;
    }
    // Default fallback images
    return [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=edges'
    ];
  };

  const displayImages = getCurrentImages();

  // Default descriptions if none provided
  const defaultDescriptions = {
    'BAS1': 'Our foundational fabric, a durable and breathable polyester mesh perfect for intense games.',
    'BAS2': 'A premium moisture-wicking blend with 4-way stretch for maximum mobility.',
    'BAS3': 'Pro-level sublimation fabric, allowing for fully custom, vibrant designs that never fade.',
    'BAS4': 'Lightweight performance fabric with advanced cooling technology for ultimate comfort.',
    'BAS5': 'Elite compression fabric designed for professional athletes and high-performance training.',
    'FAB1': 'Professional-grade mesh fabric with superior breathability and moisture management.',
    'FAB2': 'Advanced sublimation technology for vibrant, fade-resistant team colors and logos.',
    'FAB3': 'Advanced moisture-wicking technology that keeps players dry and comfortable.',
    'CRI1': 'Traditional cricket fabric offering comfort and durability for long matches.',
    'CRI2': 'Advanced moisture management system that regulates body temperature.',
    'CRI3': 'Built-in UV protection technology to shield players from harmful sun rays.'
  };

  const displayDescriptions = Object.keys(descriptions).length > 0 ? descriptions : defaultDescriptions;

  // Reset image index when active tag changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTag]);

  // Auto-slide functionality
  useEffect(() => {
    if (isHovered && displayImages.length > 1) {
      setIsAutoSliding(true);
      slideIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
      }, 1500);
    } else {
      setIsAutoSliding(false);
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    }

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [isHovered, displayImages.length]);

  // Reset to first image when hover ends
  useEffect(() => {
    if (!isHovered) {
      setCurrentImageIndex(0);
    }
  }, [isHovered]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
    // Pause auto-sliding when user manually navigates
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    if (onTagClick) {
      onTagClick(tag);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-xl p-2 border border-blue-300 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      {/* Image Slider Section */}
      <div className="aspect-square rounded-xl relative overflow-hidden bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${activeTag}-${currentImageIndex}`}
            src={displayImages[currentImageIndex]}
            alt={`${sport} - ${activeTag} - Image ${currentImageIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="w-full h-full object-fit rounded-xl border border-gray-300"
          />
        </AnimatePresence>

        {/* Navigation Dots */}
        {displayImages.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
          >
            {displayImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDotClick(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </motion.div>
        )}

        {/* Progress Bar */}
        {isAutoSliding && (
          <motion.div
            key={`${activeTag}-${currentImageIndex}`}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'linear' }}
            className="absolute bottom-0 left-0 h-1 bg-white/30"
          />
        )}

        {/* Color Indicator Dot */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm" />
      </div>

      {/* Product Information */}
      <div className="p-6">
        {/* Sport/Category Name */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-[#0052FF] mb-3 text-center"
        >
          {sport}
        </motion.h3>

        

        {/* Interactive Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-4 justify-center"
        >
          {tags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? 'bg-[#0052FF] text-white shadow-md'
                  : 'bg-[#F8F9FA] text-[#212121] border border-[#EAEAEA] hover:bg-[#0052FF] hover:text-white hover:border-[#0052FF]'
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
        {/* Product Name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-lg font-bold text-center"
        >
          {fabricName[activeTag]}
        </motion.p>
        {/* Dynamic Description */}
        <motion.div
          key={activeTag}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-[60px] flex items-center justify-center"
        >
          <p className="text-gray-700 text-sm text-center leading-relaxed">
            {displayDescriptions[activeTag] || 'Description not available.'}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveProductCard; 