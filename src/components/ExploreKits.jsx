import { useState, useEffect, useMemo } from 'react';
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
      viewport={{ once: true, margin: "-50px" }}
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
      viewport={{ once: true, margin: "-50px" }}
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
            {category.fabrics.slice(0, 2).map((fabric, idx) => (
              <span key={idx} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                {fabric}
              </span>
            ))}
            {category.fabrics.length > 2 && (
              <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                +{category.fabrics.length - 2} more
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
      "BAS4": fabricImages.basketball["Jacquard Mesh"],
      "BAS5": fabricImages.basketball["Dot Knit Dry-Fit"],
    },
    tags: ["BAS1", "BAS2", "BAS3", "BAS4", "BAS5"],
    fabricName: {
        "BAS1": "Polyester-Spandex (Lycra)",
        "BAS2": "Interlock Polyester Mesh",
        "BAS3": "Dry-Fit Dot Mesh",
        "BAS4": "Jacquard Mesh",
        "BAS5": "Dot Knit Dry-Fit",
    },
    descriptions: {
      "BAS1": "Premium stretch fabric with excellent moisture-wicking properties and superior comfort for intense basketball games.",
      "BAS2": "Professional-grade mesh fabric with superior breathability and moisture management for optimal performance.",
      "BAS3": "Advanced moisture-wicking technology with dot-knit construction for enhanced airflow and comfort.",
      "BAS4": "Adds style and ventilation with patterned, durable, breathable construction for basketball performance.",
      "BAS5": "Ideal for long hours in heat with sweat-wicking and textured airflow zones for enhanced comfort.",
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

  const tennisProduct = {
    sport: "Tennis",
    images: {
      "TEN1": fabricImages.tennis["UV-Protected Polyester"],
      "TEN2": fabricImages.tennis["Honeycomb Knit"],
      "TEN3": fabricImages.tennis["Mesh Polyester"],
    },
    tags: ["TEN1", "TEN2", "TEN3"],
    fabricName: {
        "TEN1": "UV-Protected Polyester",
        "TEN2": "Honeycomb Knit",
        "TEN3": "Mesh Polyester"
    },
    descriptions: {
      "TEN1": "Advanced UV protection technology to shield players from harmful sun rays during outdoor matches.",
      "TEN2": "Innovative honeycomb knit structure for enhanced breathability and comfort during play.",
      "TEN3": "Professional mesh polyester with superior ventilation and lightweight performance."
    }
  };

  const products = useMemo(() => [
    basketballProduct, 
    footballProduct, 
    cricketProduct, 
    badmintonProduct, 
    volleyballProduct, 
    tennisProduct
  ], []);

  // Changer's Wear Products
  const tracksuitProduct = {
    sport: "Tracksuits",
    images: {
      "TRA1": fabricImages.tracksuits["French Terry"],
      "TRA2": fabricImages.tracksuits["Softshell Polyester"],
      "TRA3": fabricImages.tracksuits["Nylon-Spandex (Premium)"],
      "TRA4": fabricImages.tracksuits["Interlock Polyester"],
      "TRA5": fabricImages.tracksuits["Micro Polyester"],
      "TRA6": fabricImages.tracksuits["Poly Taslan"],
    },
    tags: ["TRA1", "TRA2", "TRA3", "TRA4", "TRA5", "TRA6"],
    fabricName: {
      "TRA1": "French Terry",
      "TRA2": "Softshell Polyester", 
      "TRA3": "Nylon-Spandex (Premium)",
      "TRA4": "Interlock Polyester",
      "TRA5": "Micro Polyester",
      "TRA6": "Poly Taslan",
    },
    descriptions: {
      "TRA1": "Cotton-poly loopback knit that's warm, absorbent, and training-friendly for comfortable tracksuit wear.",
      "TRA2": "Technical outerwear fabric with water-resistant, windproof properties and soft inner for premium tracksuits.",
      "TRA3": "Stretchy and soft high-performance blend with 4-way stretch, sleek body-fit, and sweat-wicking properties.",
      "TRA4": "Double-knit polyester with smooth surface, durable, printable, and retains shape well.",
      "TRA5": "Lightweight, woven polyester that's breathable, great for sublimation and summer use.",
      "TRA6": "Crisp-feel coated polyester that's water-repellent, used in bottoms and jackets."
    }
  };

  const lowersProduct = {
    sport: "Lowers / Joggers",
    images: {
      "LOW1": fabricImages.lowers["Polyester-Spandex"],
      "LOW2": fabricImages.lowers["French Terry"],
      "LOW3": fabricImages.lowers["Lycra-Cotton Blend"],
      "LOW4": fabricImages.lowers["Interlock Knit"],
      "LOW5": fabricImages.lowers["Loop Knit"],
    },
    tags: ["LOW1", "LOW2", "LOW3", "LOW4", "LOW5"],
    fabricName: {
      "LOW1": "Polyester-Spandex",
      "LOW2": "French Terry",
      "LOW3": "Lycra-Cotton Blend",
      "LOW4": "Interlock Knit",
      "LOW5": "Loop Knit",
    },
    descriptions: {
      "LOW1": "Stretch knit for athletic movement with flexible, moisture-wicking, and shape retention properties.",
      "LOW2": "Soft and absorbent with comfortable fit, ideal for everyday and training joggers.",
      "LOW3": "Cotton stretch fabric that's breathable, flexible, perfect for casual activewear.",
      "LOW4": "Dense double-knit fabric with premium finish quality and good printability.",
      "LOW5": "Structured feel with warmth, ideal for winter training pants with textured appearance."
    }
  };

  const varsityProduct = {
    sport: "Varsity Jackets",
    images: {
      "VAR1": fabricImages.varsityjackets["Wool Blend + PU Leather Sleeves"],
      "VAR2": fabricImages.varsityjackets["Spacer Fabric (3D Knit)"],
      "VAR3": fabricImages.varsityjackets["Brushed Polyester Fleece"],
      "VAR4": fabricImages.varsityjackets["Poly-Cotton Twill"],
      "VAR5": fabricImages.varsityjackets["Interlock Knit Polyester"],
    },
    tags: ["VAR1", "VAR2", "VAR3", "VAR4", "VAR5"],
    fabricName: {
      "VAR1": "Wool Blend + PU Leather Sleeves",
      "VAR2": "Spacer Fabric (3D Knit)",
      "VAR3": "Brushed Polyester Fleece",
      "VAR4": "Poly-Cotton Twill",
      "VAR5": "Interlock Knit Polyester",
    },
    descriptions: {
      "VAR1": "Classic varsity jacket material that's warm, structured, perfect for college-style identity.",
      "VAR2": "Premium technical fabric with soft volume, breathable, structured, and wrinkle-resistant.",
      "VAR3": "Warm brushed inner with smooth outer, lightweight for winter use in varsity jackets.",
      "VAR4": "Stiff, durable woven fabric that's good for embroidery and patches with professional appearance.",
      "VAR5": "Modern knit option for lightweight varsity styles, soft and sporty, wearable in all seasons."
    }
  };

  const hoodieProduct = {
    sport: "Hoodies",
    images: {
      "HOO1": fabricImages.hoodies["French Terry (Cotton-Poly)"],
      "HOO2": fabricImages.hoodies["Cotton Fleece"],
      "HOO3": fabricImages.hoodies["Polyester Fleece"],
      "HOO4": fabricImages.hoodies["Loop Knit Fabric"],
      "HOO5": fabricImages.hoodies["Melange Cotton Fleece"],
    },
    tags: ["HOO1", "HOO2", "HOO3", "HOO4", "HOO5"],
    fabricName: {
      "HOO1": "French Terry (Cotton-Poly)",
      "HOO2": "Cotton Fleece",
      "HOO3": "Polyester Fleece",
      "HOO4": "Loop Knit Fabric",
      "HOO5": "Melange Cotton Fleece",
    },
    descriptions: {
      "HOO1": "Loop-back knit with smooth outer and soft inner, mid-weight, breathable, suitable for all seasons.",
      "HOO2": "Brushed inside, soft cotton-based fabric that's cozy, insulating, ideal for winter hoodies.",
      "HOO3": "Brushed polyester knit with lightweight warmth, shrink-resistant, and fast-drying properties.",
      "HOO4": "Looped interior with textured outer, structured design, durable construction, winter-ready.",
      "HOO5": "Heathered cotton fleece blend with stylish appearance, soft feel, perfect for casual wear."
    }
  };

  const changersWearProducts = useMemo(() => [
    tracksuitProduct, 
    lowersProduct, 
    varsityProduct, 
    hoodieProduct
  ], []);

  const categories = [
    {
      id: 'tracksuits',
      name: 'Tracksuits',
      icon: '🏃‍♂️',
      description: 'Complete training tracksuits',
      fabrics: ['French Terry', 'Softshell Polyester', 'Nylon-Spandex (Premium)']
    },
    {
      id: 'lowers',
      name: 'Lowers / Joggers',
      icon: '👖',
      description: 'Athletic lowers and joggers',
      fabrics: ['Polyester-Spandex', 'French Terry', 'Lycra-Cotton Blend']
    },
    {
      id: 'varsityjackets',
      name: 'Varsity Jackets',
      icon: '🧥',
      description: 'Team varsity jackets',
      fabrics: ['Wool Blend + PU Leather', 'Spacer Fabric (3D Knit)', 'Brushed Polyester Fleece']
    },
    {
      id: 'hoodies',
      name: 'Hoodies',
      icon: '👕',
      description: 'Comfortable sports hoodies',
      fabrics: ['French Terry (Cotton-Poly)', 'Cotton Fleece', 'Polyester Fleece']
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
      <div className={`container-custom transition-opacity duration-500`}>
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
              Changer's Wear
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
                onClick={() => navigate('/products')}
                className="text-[#0052FF] font-medium hover:text-[#C6FF00] transition-colors duration-200"
              >
                View All →
              </motion.button>
            </div>
            
            {/* Interactive Product Cards Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <InteractiveProductCard
                    images={product.images} // Pass the entire images object
                    sport={product.sport}
                    tags={product.tags}
                    descriptions={product.descriptions}
                    onTagClick={(tag) => handleTagClick(tag, index)}
                    fabricName={product.fabricName}
                    onImageClick={() => navigate(`/products?sport=${product.sport.toLowerCase()}`)}
                  />
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        )}

        {/* Categories Section - Changer's Wear */}
        {activeSection === 'categories' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-[#212121]">Changer's Wear Collection</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/products?category=tracksuits')}
                className="text-[#0052FF] font-medium hover:text-[#C6FF00] transition-colors duration-200"
              >
                View All →
              </motion.button>
            </div>
            
            {/* Interactive Product Cards Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {changersWearProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <InteractiveProductCard
                    images={product.images} // Pass the entire images object
                    sport={product.sport}
                    tags={product.tags}
                    descriptions={product.descriptions}
                    onTagClick={(tag) => handleTagClick(tag, index + 100)} // Offset to avoid conflicts
                    fabricName={product.fabricName}
                    onImageClick={() => navigate(`/products?category=${product.sport.toLowerCase().replace(/\s+/g, '').replace('/', '')}`)}
                  />
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/products')}
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