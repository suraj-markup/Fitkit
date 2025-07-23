import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  const handleViewDetails = () => {
    const message = encodeURIComponent(`Hello FITKIT, I'm interested in the ${product.title}!`);
    window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}I 
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
  const [activeSport, setActiveSport] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');

  const sports = ['All', 'Basketball', 'Football', 'Cricket', 'Tennis', 'Badminton', 'Volleyball'];
  const categories = ['All', 'Jerseys', 'Shorts', 'Tracksuits', 'Hoodies', 'Jackets'];

  const products = [
    {
      id: 1,
      title: "Maverick Basketball Kit",
      tags: ["Basketball", "Best Seller"],
      isBestSeller: true,
      sport: "Basketball",
      category: "Jerseys"
    },
    {
      id: 2,
      title: "Elite Football Jersey",
      tags: ["Football", "Premium"],
      isBestSeller: false,
      sport: "Football",
      category: "Jerseys"
    },
    {
      id: 3,
      title: "Pro Cricket Uniform",
      tags: ["Cricket", "New"],
      isBestSeller: false,
      sport: "Cricket",
      category: "Jerseys"
    },
    {
      id: 4,
      title: "Champion Tennis Kit",
      tags: ["Tennis", "Best Seller"],
      isBestSeller: true,
      sport: "Tennis",
      category: "Jerseys"
    },
    {
      id: 5,
      title: "Athletic Tracksuit",
      tags: ["All Sports", "Comfort"],
      isBestSeller: false,
      sport: "All",
      category: "Tracksuits"
    },
    {
      id: 6,
      title: "Performance Hoodie",
      tags: ["Training", "Warm"],
      isBestSeller: false,
      sport: "All",
      category: "Hoodies"
    },
    {
      id: 7,
      title: "Team Varsity Jacket",
      tags: ["All Sports", "Premium"],
      isBestSeller: true,
      sport: "All",
      category: "Jackets"
    },
    {
      id: 8,
      title: "Pro Shorts",
      tags: ["All Sports", "Comfort"],
      isBestSeller: false,
      sport: "All",
      category: "Shorts"
    }
  ];

  const filteredProducts = products.filter(product => {
    const sportMatch = activeSport === 'All' || product.sport === activeSport;
    const categoryMatch = activeCategory === 'All' || product.category === activeCategory;
    return sportMatch && categoryMatch;
  });

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

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Sports Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#212121] mb-4">Shop by Sports</h3>
            <div className="flex flex-wrap gap-3">
              {sports.map((sport) => (
                <motion.button
                  key={sport}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSport(sport)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeSport === sport
                      ? 'bg-[#0052FF] text-white'
                      : 'bg-[#F8F9FA] text-[#212121] hover:bg-[#0052FF] hover:text-white'
                  }`}
                >
                  {sport}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Categories Filter */}
          <div>
            <h3 className="text-lg font-semibold text-[#212121] mb-4">Shop by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-[#0052FF] text-white'
                      : 'bg-[#F8F9FA] text-[#212121] hover:bg-[#0052FF] hover:text-white'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const message = encodeURIComponent("Hello FITKIT, I'd like to see all your products!");
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