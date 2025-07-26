import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InteractiveProductCard from './InteractiveProductCard';
import { fabricImages } from '../assets/images';

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

const ExploreKits = () => {
  const [activeSection, setActiveSection] = useState('sports'); // 'sports' or 'categories'
  const navigate = useNavigate();

  // Product data with real fabric images
  const basketballProduct = {
    sport: "Basketball",
    images: {
      "BAS1": fabricImages.basketball["Polyester-Spandex (Lycra)"],
      "BAS2": fabricImages.basketball["Interlock Polyester Mesh"],
      "BAS3": fabricImages.basketball["Dry-Fit Dot Mesh"],
    },
    tags: ["BAS1", "BAS2", "BAS3"],
    fabricName: {
        "BAS1": "Polyester-Spandex (Lycra)",
        "BAS2": "Interlock Polyester Mesh",
        "BAS3": "Dry-Fit Dot Mesh",
    },
    descriptions: {
      "BAS1": "Premium stretch fabric with excellent moisture-wicking properties and superior comfort for intense basketball games.",
      "BAS2": "Professional-grade mesh fabric with superior breathability and moisture management for optimal performance.",
      "BAS3": "Advanced moisture-wicking technology with dot-knit construction for enhanced airflow and comfort.",
    }
  };

  const footballProduct = {
    sport: "Football",
    images: {
      "FOO1": fabricImages.football["Recycled Polyester Dry-Fit"],
      "FOO2": fabricImages.football["Bird-Eye Mesh"],
      "FOO3": fabricImages.football["Warp Knit Interlock"],
    },
    tags: ["FOO1", "FOO2", "FOO3"],
    fabricName: {
        "FOO1": "Recycled Polyester Dry-Fit",
        "FOO2": "Bird-Eye Mesh",
        "FOO3": "Warp Knit Interlock"
    },
    descriptions: {
      "FOO1": "Eco-friendly recycled polyester with dry-fit technology for sustainable performance.",
      "FOO2": "Bird-eye mesh fabric for enhanced ventilation and lightweight comfort.",
      "FOO3": "Durable warp knit interlock for strength and flexibility in football kits."
    }
  };

  const cricketProduct = {
    sport: "Cricket",
    images: {
      "CRI1": fabricImages.cricket["Dry-Fit Polyester"],
      "CRI2": fabricImages.cricket["Dot-Knit Polyester"],
      "CRI3": fabricImages.cricket["Cotton-Poly Piqué"]
    },
    tags: ["CRI1", "CRI2", "CRI3"],
    fabricName: {
        "CRI1": "Dry-Fit Polyester",
        "CRI2": "Dot-Knit Polyester",
        "CRI3": "Cotton-Poly Piqué"
    },
    descriptions: {
      "CRI1": "Advanced moisture-wicking technology with superior comfort for intense cricket matches.",
      "CRI2": "Lightweight and breathable fabric with unique dot-knit texture for superior ventilation.",
      "CRI3": "Traditional comfort with modern performance, perfect blend of cotton and polyester for breathable wear."
    }
  };

  const badmintonProduct = {
    sport: "Badminton",
    images: {
      "BAD1": fabricImages.badminton["Microfiber Polyester"],
      "BAD2": fabricImages.badminton["Dry-Fit Jersey Knit"],
      "BAD3": fabricImages.badminton["Warp Knit Fabric"],
    },
    tags: ["BAD1", "BAD2", "BAD3"],
    fabricName: {
        "BAD1": "Microfiber Polyester",
        "BAD2": "Dry-Fit Jersey Knit",
        "BAD3": "Warp Knit Fabric"
    },
    descriptions: {
      "BAD1": "Ultra-lightweight microfiber polyester for maximum agility and comfort in badminton.",
      "BAD2": "Advanced dry-fit jersey knit with superior moisture management for intense matches.",
      "BAD3": "Durable warp knit fabric providing excellent stretch and breathability for badminton."
    }
  };

  const volleyballProduct = {
    sport: "Volleyball",
    images: {
      "VOL1": fabricImages.volleyball["Polyester-Spandex"],
      "VOL2": fabricImages.volleyball["Dry-Fit Knit"],
      "VOL3": fabricImages.volleyball["Jacquard Mesh"],
    },
    tags: ["VOL1", "VOL2", "VOL3"],
    fabricName: {
        "VOL1": "Polyester-Spandex",
        "VOL2": "Dry-Fit Knit",
        "VOL3": "Jacquard Mesh"
    },
    descriptions: {
      "VOL1": "Premium stretch fabric with excellent moisture-wicking properties for dynamic volleyball movements.",
      "VOL2": "Advanced dry-fit knit technology for superior comfort and performance during intense matches.",
      "VOL3": "Sophisticated jacquard mesh fabric providing excellent breathability and stylish design."
    }
  };

  const products = [basketballProduct, footballProduct, cricketProduct, badmintonProduct, volleyballProduct];

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

  const handleTagClick = (tag, productIndex) => {
    console.log(`Tag ${tag} clicked for product ${productIndex}`);
    // You can add additional logic here for tag interactions
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
            
            {/* Interactive Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <InteractiveProductCard
                    images={product.images} // Pass the entire images object
                    sport={product.sport}
                    tags={product.tags}
                    descriptions={product.descriptions}
                    onTagClick={(tag) => handleTagClick(tag, index)}
                    fabricName={product.fabricName}
                  />
                </motion.div>
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