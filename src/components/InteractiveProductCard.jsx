import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveProductCard = ({ 
  images = [], 
  sport, 
  tags = [], 
  descriptions = {},
  onTagClick,
  fabricName,
  onImageClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTag, setActiveTag] = useState(tags[0] || 'BAS1');
  const [imagesLoaded, setImagesLoaded] = useState(false);

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

  // Preload images to prevent flickering
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = displayImages.map(src => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve; // Continue even if some images fail
            img.src = src;
          });
        });
        
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        // If preloading fails, still show the component
        setImagesLoaded(true);
      }
    };
    
    preloadImages();
  }, [displayImages]);



  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    if (onTagClick) {
      onTagClick(tag);
    }
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? displayImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % displayImages.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-2 border border-blue-300 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      {/* Image Slider Section */}
      <div 
        className="aspect-square rounded-xl relative overflow-hidden bg-gray-100 cursor-pointer"
        onClick={onImageClick}
      >
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse bg-gray-200 w-full h-full rounded-xl"></div>
          </div>
        )}
        <AnimatePresence mode="wait">
          {imagesLoaded && displayImages[currentImageIndex] && (
            <motion.img
              key={`${activeTag}-${currentImageIndex}`}
              src={displayImages[currentImageIndex]}
              alt={`${sport} - ${activeTag} - Image ${currentImageIndex + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover rounded-xl border border-gray-300"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                e.target.style.display = 'none';
              }}
            />
          )}
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

        {/* Navigation Buttons */}
        {displayImages.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePreviousImage();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
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