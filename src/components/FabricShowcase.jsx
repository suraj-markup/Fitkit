import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const FabricShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const fabrics = [
    {
      name: "Pro-Mesh Polyester",
      description: "Lightweight & breathable, ideal for summer sports. Features advanced moisture-wicking technology to keep you dry during intense gameplay.",
      benefits: [
        "Advanced moisture-wicking",
        "UV protection",
        "Quick-dry technology",
        "Anti-odor treatment"
      ],
      color: "#0052FF"
    },
    {
      name: "Flex-Fit Spandex",
      description: "Maximum stretch and comfort for dynamic movements. Perfect for sports requiring flexibility and range of motion.",
      benefits: [
        "4-way stretch",
        "Body-hugging fit",
        "Compression support",
        "Enhanced mobility"
      ],
      color: "#C6FF00"
    },
    {
      name: "Cotton-Poly Piqué",
      description: "Classic comfort with modern performance. The perfect blend of natural cotton and synthetic fibers for everyday wear.",
      benefits: [
        "Natural comfort",
        "Durable construction",
        "Easy maintenance",
        "Breathable fabric"
      ],
      color: "#0052FF"
    },
    {
      name: "Dry-Fit Dot Mesh",
      description: "Premium performance fabric with enhanced breathability. Features a unique dot mesh pattern for superior airflow.",
      benefits: [
        "Superior airflow",
        "Lightweight feel",
        "Professional finish",
        "Long-lasting quality"
      ],
      color: "#C6FF00"
    }
  ];

  return (
    <section id="fabrics" className="py-20 bg-[#F8F9FA]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            The Foundation of Great Performance
          </h2>
          <h3 className="text-2xl text-gray-600 max-w-3xl mx-auto">
            We believe in quality you can feel. Select the perfect fabric for your team's needs.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Fabric Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#0052FF] via-[#C6FF00] to-[#0052FF] rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">🧵</div>
                  <p className="text-xl font-semibold">Premium Fabrics</p>
                  <p className="text-sm opacity-80">Quality you can feel</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-[#C6FF00] rounded-full flex items-center justify-center"
            >
              <span className="text-2xl">✨</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#0052FF] rounded-full flex items-center justify-center"
            >
              <span className="text-xl">🏆</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Fabric Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-3">
              {fabrics.map((fabric, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === index
                      ? 'bg-[#0052FF] text-white shadow-lg'
                      : 'bg-white text-[#212121] hover:bg-[#0052FF] hover:text-white'
                  }`}
                >
                  {fabric.name}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 
                  className="text-2xl font-bold text-[#212121] mb-4"
                  style={{ color: fabrics[activeTab].color }}
                >
                  {fabrics[activeTab].name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {fabrics[activeTab].description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-[#212121] mb-3">Key Benefits:</h4>
                  {fabrics[activeTab].benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: fabrics[activeTab].color }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const message = encodeURIComponent(`Hello FITKIT, I'm interested in the ${fabrics[activeTab].name} fabric!`);
                    window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
                  }}
                  className="mt-6 btn-primary w-full"
                >
                  Inquire About This Fabric
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FabricShowcase; 