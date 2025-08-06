import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronLeft, ChevronRight, Filter, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { fabricImages } from '../assets/images.jsx';
import ProductSchema from './ProductSchema.jsx';
import BreadcrumbSchema from './BreadcrumbSchema.jsx';

const FabricCard = ({ fabricName, images, properties, index, labelPrefix, currentDisplayName }) => {
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 sm:mb-8 border border-gray-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Image Carousel */}
        <div className="relative bg-gray-100 rounded-t-xl md:rounded-l-xl md:rounded-tr-none" >
          <div className="aspect-square relative overflow-hidden p-2 sm:p-3">
            <img
              src={images[currentImageIndex]}
              alt={`${fabricName} jersey ${currentImageIndex + 1}`}
              className="w-full h-full object-cover rounded-lg"
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
          
          {/* Fabric Label */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-black/70 text-white px-2 sm:px-3 py-1 rounded text-sm sm:text-base lg:text-lg font-medium">
            {labelPrefix}{index + 1}
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: (index * 0.1) + (propIndex * 0.05) }}
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
              const message = encodeURIComponent(`Hello FITKIT, I'm interested in the ${fabricName} fabric for ${currentDisplayName}. Please share more details about pricing and availability.`);
              window.open(`https://wa.me/917014680160?text=${message}`, '_blank');
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

const FilterModal = ({ isOpen, onClose, sports, categories, activeSport, activeCategory, activeMode, handleSportChange, handleCategoryChange }) => {
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
                        activeSport === sport.id && activeMode === 'sport'
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
                        activeCategory === category && activeMode === 'category'
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeSport, setActiveSport] = useState('basketball');
  const [activeCategory, setActiveCategory] = useState('Tracksuits');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showFilterHint, setShowFilterHint] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sports = [
    { id: 'basketball', name: 'Basketball' },
    { id: 'badminton', name: 'Badminton' },
    { id: 'football', name: 'Football' },
    { id: 'volleyball', name: 'Volleyball' },
    { id: 'tennis', name: 'Tennis' },
    { id: 'cricket', name: 'Cricket' },
    { id: 'boxing', name: 'Boxing' },
    { id: 'archery', name: 'Archery' },
    { id: 'swimming', name: 'Swimming' },
    { id: 'tabletennis', name: 'Table Tennis' },
    { id: 'kabaddi', name: 'Kabaddi' },
    { id: 'hockey', name: 'Hockey' },
    { id: 'handball', name: 'Handball' },
    { id: 'netball', name: 'Netball' },
    { id: 'kho-kho', name: 'Kho-Kho' },
  ];

  const categories = ['Tracksuits', 'Lowers', 'Varsity Jackets', 'Hoodies'];

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
    ],
    "Cotton-Poly Piqué": [
      "Maximum comfort",
      "Minimal distraction",
      "Soft texture",
      "Semi-absorbent",
      "Light stretch"
    ],
    "Jersey Knit Cotton": [
      "Easy to wear",
      "Non-intense movement",
      "Casual look",
      "Natural feel",
      "Breathable"
    ],
    "Compression Lycra": [
      "Skin-tight support",
      "High movement performance",
      "Muscle-compression fit",
      "Stretchable",
      "Anti-roll hems"
    ],
    "Polyester-Spandex + Mesh Panels": [
      "Combines flexibility with ventilation",
      "Zoned ventilation",
      "Tight fit",
      "Movement-supportive",
      "Enhanced breathability"
    ],
    "Dry-Fit Micro Polyester": [
      "Feels light",
      "Helps avoid overheating",
      "Soft touch",
      "Cooling finish",
      "Wrinkle-free"
    ],
    "Mesh Knit Fabric": [
      "Keeps sweat away",
      "Indoor environments",
      "Open mesh texture",
      "Good airflow",
      "Temperature control"
    ],
    "Interlock Knit": [
      "Balanced comfort & durability",
      "Flat surface",
      "No pilling",
      "Maintains color",
      "Professional finish"
    ],
    "Chlorine-Resistant Nylon-Spandex": [
      "Withstands pool chemicals",
      "Ultra-stretch",
      "Snug fit",
      "Fade-resistant",
      "Pool performance"
    ],
    "Polyester PBT": [
      "Maintains shape",
      "Ideal for racing swimwear",
      "High elasticity",
      "Low water absorption",
      "Competition grade"
    ],
    "Lycra Blend Fabric": [
      "Allows movement",
      "Speeds drying",
      "Thin fit",
      "Smooth feel",
      "Body-hugging"
    ],
    "Tough Polyester Interlock": [
      "Sturdy for contact-heavy sport",
      "Strong weave",
      "Retains structure",
      "Abrasion-resistant",
      "Durable construction"
    ],
    "Dry-Fit Knit + Mesh": [
      "Keeps sweat in check",
      "Fast-paced play",
      "Dual-panel design",
      "Flexible",
      "Keeps cool"
    ],
    "Stretchable Polyester": [
      "Enables swift direction changes",
      "Flexible",
      "Lightweight",
      "Quick dry",
      "Movement freedom"
    ],
    "Mesh Dry-Fit": [
      "Helps maintain airflow",
      "Open-knit zones",
      "Cool feel",
      "Rapid sweat release",
      "Ventilation focused"
    ],
    "Bird-Eye Fabric": [
      "Durable and ventilated",
      "Textured knit",
      "Body fit",
      "Wear-resistant",
      "Professional texture"
    ],
    "Polyester Interlock with Spandex": [
      "Comfortable for quick moves",
      "Stretchy",
      "Retains shape",
      "Soft feel",
      "Movement support"
    ],
    "Lightweight Dry-Fit": [
      "Feels airy during games",
      "Thin weave",
      "Odor-resistant",
      "Color-holding",
      "Game performance"
    ],
    "Honeycomb Mesh": [
      "Promotes airflow",
      "Textured",
      "Stylish",
      "Open-cell knit",
      "Enhanced ventilation"
    ],
    "Dry-Fit Mesh Fabric": [
      "Keeps athletes dry",
      "High sweat zones",
      "Thin and breathable",
      "Elastic support",
      "Performance focused"
    ],
    "Airtex Polyester": [
      "Feels light",
      "Dries quickly",
      "Perforated",
      "Ultra-light",
      "Stretchy"
    ],
    "Nylon-Spandex Knit": [
      "Stretch for footwork",
      "Speed enhancement",
      "Comfortable",
      "Tight fit",
      "High elasticity"
    ],
    "Lycra Polyester": [
      "Agility-focused stretch",
      "Fast runners",
      "4-way stretch",
      "Flexible",
      "Form-fitting"
    ],
    "Warp Knit Mesh": [
      "Enhances ventilation",
      "Comfort focused",
      "Quick-dry",
      "Low snag",
      "Sporty texture"
    ],
    "Dot Knit Dry-Fit": [
      "Ideal for long hours in heat",
      "Sweat-wicking",
      "Textured airflow zones",
      "Heat management",
      "Endurance focused"
    ],

    // Changer's Wear Fabric Properties
    "Interlock Polyester": [
      "Double-knit polyester with smooth surface",
      "Durable construction",
      "Excellent printability",
      "Retains shape well",
      "Professional finish"
    ],
    "Micro Polyester": [
      "Lightweight, woven polyester",
      "Breathable fabric",
      "Great for sublimation",
      "Summer use friendly",
      "Quick-dry technology"
    ],
    "Softshell Polyester": [
      "Technical outerwear fabric",
      "Water-resistant properties",
      "Windproof protection",
      "Soft inner lining",
      "Premium durability"
    ],
    "Poly Taslan": [
      "Crisp-feel coated polyester",
      "Water-repellent finish",
      "Used in bottoms and jackets",
      "Durable construction",
      "Professional appearance"
    ],
    "French Terry": [
      "Cotton-poly loopback knit",
      "Warm and absorbent",
      "Training-friendly",
      "Comfortable fit",
      "Versatile use"
    ],
    "Nylon-Spandex (Premium)": [
      "Stretchy and soft high-performance blend",
      "4-way stretch capability",
      "Sleek appearance",
      "Body-fit design",
      "Sweat-wicking properties"
    ],
    "Lycra-Cotton Blend": [
      "Cotton stretch fabric",
      "Breathable material",
      "Flexible movement",
      "Casual activewear ideal",
      "Natural comfort"
    ],
    "Interlock Knit": [
      "Dense double-knit fabric",
      "Premium finish quality",
      "Good printability",
      "Shape retention",
      "Professional look"
    ],
    "Loop Knit": [
      "Structured feel with warmth",
      "Ideal for winter training pants",
      "Textured appearance",
      "Comfortable wear",
      "Durable construction"
    ],
    "Wool Blend + PU Leather Sleeves": [
      "Classic varsity jacket material",
      "Warm and structured",
      "College-style identity",
      "Premium appearance",
      "Heritage look"
    ],
    "Poly-Cotton Twill": [
      "Stiff, durable woven fabric",
      "Good for embroidery and patches",
      "Professional appearance",
      "Long-lasting quality",
      "Easy maintenance"
    ],
    "Interlock Knit Polyester": [
      "Modern knit option for lightweight varsity styles",
      "Soft and sporty",
      "Wearable in all seasons",
      "Comfortable fit",
      "Contemporary look"
    ],
    "Brushed Polyester Fleece": [
      "Warm brushed inner",
      "Smooth outer surface",
      "Lightweight winter use",
      "Comfortable warmth",
      "Easy care"
    ],
    "Spacer Fabric (3D Knit)": [
      "Premium technical fabric with soft volume",
      "Breathable construction",
      "Structured appearance",
      "Wrinkle-resistant",
      "Advanced engineering"
    ],
    "French Terry (Cotton-Poly)": [
      "Loop-back knit with smooth outer and soft inner",
      "Mid-weight fabric",
      "Breathable material",
      "Suitable for all seasons",
      "Versatile comfort"
    ],
    "Cotton Fleece": [
      "Brushed inside, soft cotton-based fabric",
      "Cozy and insulating",
      "Ideal for winter",
      "Natural warmth",
      "Comfortable wear"
    ],
    "Polyester Fleece": [
      "Brushed polyester knit",
      "Lightweight warmth",
      "Shrink-resistant",
      "Fast-drying properties",
      "Easy maintenance"
    ],
    "Loop Knit Fabric": [
      "Looped interior, textured outer",
      "Structured design",
      "Durable construction",
      "Winter-ready",
      "Contemporary look"
    ],
    "Melange Cotton Fleece": [
      "Heathered cotton fleece blend",
      "Stylish appearance",
      "Soft feel",
      "Perfect for casual or post-match wear",
      "Premium comfort"
    ]
  };

  // Handle URL parameters on component mount
  useEffect(() => {
    const sportParam = searchParams.get('sport');
    const categoryParam = searchParams.get('category');
    
    // Priority: Category (changer's wear) takes precedence over sport
    if (categoryParam) {
      // Handle changer's wear categories with different naming conventions
      const categoryMappings = {
        'tracksuits': 'Tracksuits',
        'lowers': 'Lowers',
        'varsityjackets': 'Varsity Jackets',
        'hoodies': 'Hoodies',
        'lowersjoggers': 'Lowers'
      };
      
      const mappedCategory = categoryMappings[categoryParam.toLowerCase()] || categoryParam;
      if (categories.includes(mappedCategory)) {
        setActiveCategory(mappedCategory);
        setActiveMode('category');
        // Clear sport parameter if category is present
        if (sportParam) {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.delete('sport');
          setSearchParams(newSearchParams, { replace: true });
        }
        return; // Exit early to prevent sport handling
      }
    }
    
    // Only handle sport if no valid category is present
    if (sportParam && sports.find(s => s.id === sportParam)) {
      setActiveSport(sportParam);
      setActiveMode('sport');
      // Reset to default category when viewing sports
      setActiveCategory('Tracksuits');
    } else if (!categoryParam && !sportParam) {
      // Default state - show sports mode
      setActiveMode('sport');
    }
  }, [searchParams, sports, categories]);

  const handleSportChange = (sportId) => {
    setActiveSport(sportId);
    setActiveMode('sport');
    setIsFilterOpen(false); // Close filter on mobile after selection
    
    // Update URL parameters - clear category when selecting sport
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('sport', sportId);
    newSearchParams.delete('category'); // Remove category to avoid conflicts
    setSearchParams(newSearchParams);
    
    // Reset to default category when switching to sports
    setActiveCategory('Tracksuits');
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveMode('category');
    setIsFilterOpen(false); // Close filter on mobile after selection
    
    // Update URL parameters - clear sport when selecting category
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('category', category.toLowerCase().replace(/\s+/g, '').replace('/', ''));
    newSearchParams.delete('sport'); // Remove sport to avoid conflicts
    setSearchParams(newSearchParams);
    
    // Reset to default sport when switching to changer's wear
    setActiveSport('basketball');
  };

  const getCurrentFabrics = () => {
    // Check if we're viewing a changer's wear category based on activeMode
    const changersWearCategories = ['tracksuits', 'lowers', 'varsityjackets', 'hoodies'];
    const categoryKey = activeCategory.toLowerCase().replace(/\s+/g, '').replace('/', '');
    
    let fabricsSource = {};
    
    if (activeMode === 'category' && changersWearCategories.includes(categoryKey)) {
      // Use changer's wear fabrics
      fabricsSource = fabricImages[categoryKey] || {};
    } else {
      // Use sport fabrics
      fabricsSource = fabricImages[activeSport] || {};
    }
    
    return Object.entries(fabricsSource).map(([fabricName, images]) => ({
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

  // Track which mode is currently active
  const [activeMode, setActiveMode] = useState('sport'); // 'sport' or 'category'
  
  const getCurrentDisplayName = () => {
    const changersWearCategories = ['tracksuits', 'lowers', 'varsityjackets', 'hoodies'];
    const categoryKey = activeCategory.toLowerCase().replace(/\s+/g, '').replace('/', '');
    
    if (activeMode === 'category' && changersWearCategories.includes(categoryKey)) {
      return activeCategory;
    } else {
      return sports.find(s => s.id === activeSport)?.name || 'Basketball';
    }
  };

  const currentDisplayName = getCurrentDisplayName();

  const getLabelPrefix = () => {
    const changersWearCategories = ['tracksuits', 'lowers', 'varsityjackets', 'hoodies'];
    const categoryKey = activeCategory.toLowerCase().replace(/\s+/g, '').replace('/', '');
    
    if (activeMode === 'category' && changersWearCategories.includes(categoryKey)) {
      // Use changer's wear prefixes
      const prefixMap = {
        'tracksuits': 'TRA',
        'lowers': 'LOW',
        'varsityjackets': 'VAR',
        'hoodies': 'HOO'
      };
      return prefixMap[categoryKey] || 'FAB';
    } else {
      // Use sport prefixes
      const sportPrefixMap = {
        'basketball': 'BAS',
        'football': 'FOO',
        'cricket': 'CRI',
        'badminton': 'BAD',
        'volleyball': 'VOL',
        'tennis': 'TEN',
        'boxing': 'BOX',
        'archery': 'ARC',
        'swimming': 'SWI',
        'tabletennis': 'TTE',
        'kabaddi': 'KAB',
        'hockey': 'HOC',
        'handball': 'HAN',
        'netball': 'NET',
        'kho-kho': 'KHO'
      };
      return sportPrefixMap[activeSport] || 'SPO';
    }
  };

  const labelPrefix = getLabelPrefix();

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
                        activeSport === sport.id && activeMode === 'sport'
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
                        activeCategory === category && activeMode === 'category'
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#212121] mb-2">
                {currentDisplayName} Fabrics
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Choose from our premium collection of performance fabrics designed for {currentDisplayName.toLowerCase()}
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
                  const message = encodeURIComponent("Hello FITKIT, I'd like to place an order. Please share your catalog and pricing details.");
                  window.open(`https://wa.me/917014680160?text=${message}`, '_blank');
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
                labelPrefix={labelPrefix}
                currentDisplayName={currentDisplayName}
              />
            ))}
            </div>

            {/* No fabrics message */}
            {getCurrentFabrics().length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12 sm:py-16"
              >
                <div className="text-4xl sm:text-6xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#212121] mb-2">
                  Coming Soon!
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 px-4">
                  We're working on adding fabric options for {currentDisplayName}. 
                  Contact us for custom fabric solutions.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const message = encodeURIComponent(`Hello FITKIT, I'd like to inquire about ${currentDisplayName} fabrics. Can you provide custom fabric solutions and pricing?`);
                    window.open(`https://wa.me/917014680160?text=${message}`, '_blank');
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

      {/* Floating Filter Button for Mobile - Hidden since filters moved to navbar */}
      {/* 
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="lg:hidden fixed bottom-6 right-6 z-30"
      >
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
      */}

      {/* Filter Modal for Mobile - No longer needed since filters moved to navbar */}
      {/* 
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        sports={sports}
        categories={categories}
        activeSport={activeSport}
        activeCategory={activeCategory}
        activeMode={activeMode}
        handleSportChange={handleSportChange}
        handleCategoryChange={handleCategoryChange}
      />
      */}
      {/* SEO Components */}
      <ProductSchema 
        products={getCurrentFabrics()} 
        category={currentDisplayName} 
      />
      <BreadcrumbSchema />
    </div>
  );
};

export default ProductsPage; 