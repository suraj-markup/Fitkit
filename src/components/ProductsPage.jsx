import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, CheckCircle } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const ProductCard = ({ product, index }) => {
  const handleViewDetails = () => {
    const message = encodeURIComponent(`Hello FITKIT, I'm interested in the ${product.title}!`);
    window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-square bg-gray-200 relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-[#0052FF] to-[#C6FF00] opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">{product.icon}</span>
        </div>
        {product.isBestSeller && (
          <div className="absolute top-4 left-4 bg-[#C6FF00] text-[#212121] px-3 py-1 rounded-full text-sm font-bold">
            Best Seller
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#212121] mb-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{product.material}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-[#F8F9FA] text-[#0052FF] px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewDetails}
          className="btn-secondary w-full flex items-center justify-center space-x-2"
        >
          <Eye className="w-4 h-4" />
          <span>View Details</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeSport, setActiveSport] = useState('Basketball');
  const [activeCategory, setActiveCategory] = useState('Hoodies');

  const sports = ['Basketball', 'Badminton', 'Football', 'Volleyball', 'Tennis', 'Archery', 'Kabaddi', 'Table Tennis', 'Swimming', 'Hockey', 'Handball', 'Netball', 'Boxing', 'Kho-Kho'];
  const categories = ['T-Shirts', 'Hoodies', 'Lowers', 'Varsity Jackets', 'Tracksuits'];

  // Handle URL parameters on component mount
  useEffect(() => {
    const sportParam = searchParams.get('sport');
    const categoryParam = searchParams.get('category');
    
    if (sportParam) {
      // Map sport IDs to display names
      const sportMap = {
        'basketball': 'Basketball',
        'football': 'Football',
        'cricket': 'Cricket',
        'tennis': 'Tennis',
        'badminton': 'Badminton',
        'volleyball': 'Volleyball'
      };
      setActiveSport(sportMap[sportParam] || 'Basketball');
    }
    
    if (categoryParam) {
      // Map category IDs to display names
      const categoryMap = {
        'jerseys': 'T-Shirts',
        'shorts': 'Lowers',
        'tracksuits': 'Tracksuits',
        'hoodies': 'Hoodies',
        'jackets': 'Varsity Jackets'
      };
      setActiveCategory(categoryMap[categoryParam] || 'Hoodies');
    }
  }, [searchParams]);

  const basketballProducts = [
    {
      id: 1,
      title: "Lane Basketball Single Side Away Uniform",
      material: "Cotton-Poly Piqué",
      tags: ["Basketball", "Away"],
      icon: "🏀",
      isBestSeller: false
    },
    {
      id: 2,
      title: "Lane Basketball Single Side Home Uniform",
      material: "Polyester-Spandex (Lycra)",
      tags: ["Basketball", "Home"],
      icon: "🏀",
      isBestSeller: true
    },
    {
      id: 3,
      title: "Basketball Uniform - CBU002",
      material: "Interlock Polyester Mesh",
      tags: ["Basketball", "Premium"],
      icon: "🏀",
      isBestSeller: false
    },
    {
      id: 4,
      title: "Basketball Uniform - CBU001",
      material: "Dry-Fit Dot Mesh",
      tags: ["Basketball", "Performance"],
      icon: "🏀",
      isBestSeller: true
    }
  ];

  const hoodieProducts = [
    {
      id: 1,
      title: "Lane Basketball Single Side Away Uniform",
      material: "Cotton-Poly Piqué",
      tags: ["Basketball", "Away"],
      icon: "🏀",
      isBestSeller: false
    },
    {
      id: 2,
      title: "Lane Basketball Single Side Home Uniform",
      material: "Polyester-Spandex (Lycra)",
      tags: ["Basketball", "Home"],
      icon: "🏀",
      isBestSeller: true
    },
    {
      id: 3,
      title: "Basketball Uniform - CBU002",
      material: "Interlock Polyester Mesh",
      tags: ["Basketball", "Premium"],
      icon: "🏀",
      isBestSeller: false
    },
    {
      id: 4,
      title: "Basketball Uniform - CBU001",
      material: "Dry-Fit Dot Mesh",
      tags: ["Basketball", "Performance"],
      icon: "🏀",
      isBestSeller: true
    }
  ];

  const getCurrentProducts = () => {
    if (activeCategory === 'Hoodies') {
      return hoodieProducts;
    }
    return basketballProducts;
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const handleSportChange = (sport) => {
    setActiveSport(sport);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBackClick}
                className="p-2 rounded-lg hover:bg-[#F8F9FA] transition-colors duration-200"
              >
                <ArrowLeft className="w-6 h-6 text-[#212121]" />
              </motion.button>
              <div>
                <h1 className="text-2xl font-bold text-[#212121]">FIT KIT</h1>
                <p className="text-sm text-gray-600">Engineered for Every Game</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent"
                />
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <nav className="flex space-x-6">
                <a href="#" className="text-[#212121] hover:text-[#0052FF] transition-colors duration-200">Products</a>
                <a href="#" className="text-[#212121] hover:text-[#0052FF] transition-colors duration-200">About Us</a>
                <a href="#" className="text-[#212121] hover:text-[#0052FF] transition-colors duration-200">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#F8F9FA] rounded-xl p-6 sticky top-8">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#212121] mb-4">By Sports</h3>
                <div className="space-y-2">
                  {sports.map((sport) => (
                    <motion.button
                      key={sport}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSportChange(sport)}
                      className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                        activeSport === sport
                          ? 'bg-[#0052FF] text-white'
                          : 'text-[#212121] hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      {sport}
                    </motion.button>
                  ))}
                </div>
              </div>

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
          <div className="lg:col-span-3">
            {/* Ready to Go Designs Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-[#212121] mb-6">Ready to Go designs...</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-[4/3] bg-gradient-to-br from-[#0052FF] to-[#C6FF00] rounded-xl cursor-pointer"
                  />
                ))}
              </div>
            </motion.div>

            {/* MOQ and Order Button */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-lg font-semibold text-[#212121]">
                Minimum Order Quantity (MOQ) - Just 10 pieces
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const message = encodeURIComponent("Hello FITKIT, I'd like to place an order!");
                  window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
                }}
                className="bg-[#C6FF00] text-[#212121] px-6 py-3 rounded-lg font-bold hover:bg-[#B8E600] transition-colors duration-200"
              >
                Order by WhatsApp
              </motion.button>
            </div>

            {/* Featured Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-square bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-xl relative overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl">🏀</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">Team Name 13</h3>
                      <p className="text-white/90">PLAYER 13</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">BAS1</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#212121] mb-4">Material</h3>
                  <p className="text-lg text-gray-700 mb-6">Polyester-Spandex (Lycra)</p>
                  
                  <h4 className="text-lg font-semibold text-[#212121] mb-4">Features</h4>
                  <div className="space-y-3">
                    {[
                      "Allows full-body stretch",
                      "Helps fast movement",
                      "4-way stretch",
                      "body-hugging",
                      "highly flexible"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#C6FF00]" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl relative overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🏀</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">KNIGHTS 00</h3>
                    <p className="text-white/90">00</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">White & Blue Basketball Kit</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-600 rounded-xl relative overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🏀</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">LANE 00</h3>
                    <p className="text-white/90">NAME 00</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Black & Blue Basketball Kit</p>
              </motion.div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getCurrentProducts().map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 