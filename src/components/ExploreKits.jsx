import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SportCard = ({ sport, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-[#0052FF] to-[#C6FF00] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0052FF]/80 to-[#C6FF00]/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl">{sport.icon}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2">
            {sport.name}
          </h3>
          <p className="text-white/90 text-sm mb-3">
            {sport.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {sport.fabrics.slice(0, 2).map((fabric, idx) => (
              <span key={idx} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                {fabric}
              </span>
            ))}
            {sport.fabrics.length > 2 && (
              <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                +{sport.fabrics.length - 2} more
              </span>
            )}
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-all duration-300">
          <ArrowRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </motion.div>
  );
};

const CategoryCard = ({ category, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-[#212121] to-[#0052FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#212121]/80 to-[#0052FF]/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl">{category.icon}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2">
            {category.name}
          </h3>
          <p className="text-white/90 text-sm mb-3">
            {category.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {category.sports.slice(0, 2).map((sport, idx) => (
              <span key={idx} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                {sport}
              </span>
            ))}
            {category.sports.length > 2 && (
              <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                +{category.sports.length - 2} more
              </span>
            )}
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-all duration-300">
          <ArrowRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </motion.div>
  );
};

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
          <span className="text-6xl">🏀</span>
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

const ExploreKits = () => {
  const [activeSection, setActiveSection] = useState('sports'); // 'sports' or 'categories'
  const navigate = useNavigate();

  const sports = [
    {
      id: 'basketball',
      name: 'Basketball',
      icon: '🏀',
      description: 'Professional basketball uniforms and gear',
      fabrics: ['Cotton-Poly Piqué', 'Polyester-Spandex (Lycra)', 'Interlock Polyester Mesh', 'Dry-Fit Dot Mesh']
    },
    {
      id: 'football',
      name: 'Football',
      icon: '⚽',
      description: 'Complete football team uniforms',
      fabrics: ['Polyester Mesh', 'Sublimation Fabric', 'Moisture Wicking', 'Breathable Mesh']
    },
    {
      id: 'cricket',
      name: 'Cricket',
      icon: '🏏',
      description: 'Premium cricket team wear',
      fabrics: ['Polyester-Cotton Blend', 'Moisture Management', 'UV Protection', 'Quick Dry']
    },
    {
      id: 'tennis',
      name: 'Tennis',
      icon: '🎾',
      description: 'Performance tennis apparel',
      fabrics: ['Dri-FIT Technology', 'Stretch Fabric', 'Breathable Mesh', 'Lightweight Polyester']
    },
    {
      id: 'badminton',
      name: 'Badminton',
      icon: '🏸',
      description: 'Lightweight badminton gear',
      fabrics: ['Lightweight Polyester', 'Moisture Wicking', 'Quick Dry', 'Stretch Fabric']
    },
    {
      id: 'volleyball',
      name: 'Volleyball',
      icon: '🏐',
      description: 'Dynamic volleyball uniforms',
      fabrics: ['Spandex Blend', 'Moisture Management', '4-Way Stretch', 'Breathable']
    }
  ];

  const categories = [
    {
      id: 'jerseys',
      name: 'Jerseys',
      icon: '👕',
      description: 'Professional sports jerseys',
      sports: ['Basketball', 'Football', 'Cricket', 'Tennis', 'Badminton', 'Volleyball']
    },
    {
      id: 'shorts',
      name: 'Shorts',
      icon: '🩳',
      description: 'Performance sports shorts',
      sports: ['Basketball', 'Football', 'Tennis', 'Badminton', 'Volleyball']
    },
    {
      id: 'tracksuits',
      name: 'Tracksuits',
      icon: '👟',
      description: 'Complete training tracksuits',
      sports: ['All Sports', 'Training', 'Warm-up', 'Casual']
    },
    {
      id: 'hoodies',
      name: 'Hoodies',
      icon: '🧥',
      description: 'Comfortable sports hoodies',
      sports: ['All Sports', 'Training', 'Casual', 'Warm-up']
    },
    {
      id: 'jackets',
      name: 'Varsity Jackets',
      icon: '🧥',
      description: 'Team varsity jackets',
      sports: ['All Sports', 'Team Wear', 'Casual', 'Premium']
    }
  ];

  const handleSportClick = (sportId) => {
    // Navigate to sports products page
    navigate(`/products?sport=${sportId}`);
  };

  const handleCategoryClick = (categoryId) => {
    // Navigate to category products page
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Explore Our Kits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our collection of high-performance sportswear designed for champions.
          </p>
        </motion.div>

        {/* Section Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-[#F8F9FA] rounded-lg p-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('sports')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeSection === 'sports'
                  ? 'bg-[#0052FF] text-white shadow-lg'
                  : 'text-[#212121] hover:bg-[#0052FF] hover:text-white'
              }`}
            >
              Shop by Sports
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('categories')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeSection === 'categories'
                  ? 'bg-[#0052FF] text-white shadow-lg'
                  : 'text-[#212121] hover:bg-[#0052FF] hover:text-white'
              }`}
            >
              Shop by Category
            </motion.button>
          </div>
        </motion.div>

        {/* Sports Section */}
        {activeSection === 'sports' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-[#212121]">Shop by Sports</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const message = encodeURIComponent("Hello FITKIT, I'd like to see all sports products!");
                  window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
                }}
                className="text-[#0052FF] font-medium hover:text-[#C6FF00] transition-colors duration-200"
              >
                View All →
              </motion.button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sports.map((sport, index) => (
                <SportCard
                  key={sport.id}
                  sport={sport}
                  index={index}
                  onClick={() => handleSportClick(sport.id)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Categories Section */}
        {activeSection === 'categories' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-[#212121]">Shop by Category</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const message = encodeURIComponent("Hello FITKIT, I'd like to see all category products!");
                  window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
                }}
                className="text-[#0052FF] font-medium hover:text-[#C6FF00] transition-colors duration-200"
              >
                View All →
              </motion.button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  index={index}
                  onClick={() => handleCategoryClick(category.id)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const message = encodeURIComponent("Hello FITKIT, I'd like to explore all your products!");
              window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
            }}
            className="btn-primary"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreKits; 