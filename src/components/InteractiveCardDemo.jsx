import { motion } from 'framer-motion';
import InteractiveProductCard from './InteractiveProductCard';

const InteractiveCardDemo = () => {
  // Sample basketball product data
  const basketballProduct = {
    product: "Professional Basketball Jersey & Shorts Set",
    sport: "Basketball",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=edges"
    ],
    tags: ["BAS1", "BAS2", "BAS3", "BAS4"],
    descriptions: {
      "BAS1": "Cotton-Poly Piqué: Our foundational fabric, a durable and breathable polyester mesh perfect for intense games. Features moisture-wicking technology and enhanced durability.",
      "BAS2": "Polyester-Spandex (Lycra): A premium moisture-wicking blend with 4-way stretch for maximum mobility. Perfect for dynamic movements and professional performance.",
      "BAS3": "Interlock Polyester Mesh: Pro-level sublimation fabric, allowing for fully custom, vibrant designs that never fade. Ideal for team branding and custom graphics.",
      "BAS4": "Dry-Fit Dot Mesh: Lightweight performance fabric with advanced cooling technology for ultimate comfort. Features strategic ventilation zones for optimal airflow."
    }
  };

  // Sample football product data
  const footballProduct = {
    product: "Elite Football Team Uniform",
    sport: "Football",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=entropy"
    ],
    tags: ["FAB1", "FAB2", "FAB3"],
    descriptions: {
      "FAB1": "Polyester Mesh: Professional-grade mesh fabric with superior breathability and moisture management. Perfect for high-intensity football matches.",
      "FAB2": "Sublimation Fabric: Advanced sublimation technology for vibrant, fade-resistant team colors and logos. Customizable for any team design.",
      "FAB3": "Moisture Wicking: Advanced moisture-wicking technology that keeps players dry and comfortable throughout the game."
    }
  };

  // Sample cricket product data
  const cricketProduct = {
    product: "Premium Cricket Team Kit",
    sport: "Cricket",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face"
    ],
    tags: ["CRI1", "CRI2", "CRI3", "CRI4", "CRI5"],
    descriptions: {
      "CRI1": "Polyester-Cotton Blend: Traditional cricket fabric offering comfort and durability. Perfect for long matches and professional tournaments.",
      "CRI2": "Moisture Management: Advanced moisture management system that regulates body temperature and keeps players comfortable in all weather conditions.",
      "CRI3": "UV Protection: Built-in UV protection technology to shield players from harmful sun rays during outdoor matches.",
      "CRI4": "Quick Dry: Rapid-drying technology that ensures comfort even in humid conditions and during rain delays.",
      "CRI5": "Anti-Bacterial: Anti-bacterial treatment to prevent odor and maintain freshness throughout the season."
    }
  };

  const handleTagClick = (tag) => {
    console.log(`Tag clicked: ${tag}`);
    // You can add additional logic here, such as analytics tracking
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Interactive Product Cards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our interactive product cards with hover-activated image sliders, 
            dynamic fabric tags, and real-time descriptions.
          </p>
        </motion.div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basketball Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <InteractiveProductCard
              product={basketballProduct.product}
              images={basketballProduct.images}
              sport={basketballProduct.sport}
              tags={basketballProduct.tags}
              descriptions={basketballProduct.descriptions}
              onTagClick={handleTagClick}
            />
          </motion.div>

          {/* Football Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InteractiveProductCard
              product={footballProduct.product}
              images={footballProduct.images}
              sport={footballProduct.sport}
              tags={footballProduct.tags}
              descriptions={footballProduct.descriptions}
              onTagClick={handleTagClick}
            />
          </motion.div>

          {/* Cricket Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <InteractiveProductCard
              product={cricketProduct.product}
              images={cricketProduct.images}
              sport={cricketProduct.sport}
              tags={cricketProduct.tags}
              descriptions={cricketProduct.descriptions}
              onTagClick={handleTagClick}
            />
          </motion.div>
        </div>

        {/* Features Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-[#212121] mb-6 text-center">
            Interactive Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0052FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[#212121] mb-2">Hover Image Slider</h4>
              <p className="text-gray-600 text-sm">Images automatically slide on hover with navigation dots and progress bar</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#C6FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#212121]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[#212121] mb-2">Fabric Tags</h4>
              <p className="text-gray-600 text-sm">Interactive tags representing different fabric types and sports categories</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#0052FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[#212121] mb-2">Dynamic Descriptions</h4>
              <p className="text-gray-600 text-sm">Descriptions change dynamically when clicking on different fabric tags</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#C6FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#212121]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[#212121] mb-2">Smooth Animations</h4>
              <p className="text-gray-600 text-sm">Fluid transitions and animations for enhanced user experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveCardDemo; 