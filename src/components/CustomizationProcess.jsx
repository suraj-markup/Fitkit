import { motion } from 'framer-motion';
import { Palette, Upload, Package } from 'lucide-react';

const CustomizationProcess = () => {
  const steps = [
    {
      icon: Palette,
      title: "Select Your Fabric",
      description: "Choose from our range of performance materials.",
      color: "#0052FF"
    },
    {
      icon: Upload,
      title: "Send Us Your Design",
      description: "Provide your logos, colors, and design concept.",
      color: "#C6FF00"
    },
    {
      icon: Package,
      title: "We Create & Deliver",
      description: "Our team handles the production and delivers your custom kits.",
      color: "#0052FF"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello FITKIT, I'd like to start my custom order!");
    window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Your Vision, Brought to Life in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to delivery, we make custom sportswear creation effortless and enjoyable.
          </p>
        </motion.div>

        <div className="relative">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-[#0052FF] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className="bg-[#F8F9FA] rounded-xl p-8 pt-12 text-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon 
                      className="w-10 h-10" 
                      style={{ color: step.color }}
                    />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#212121] mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-5">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 bg-[#C6FF00] rounded-full flex items-center justify-center"
                    >
                      <svg 
                        className="w-6 h-6 text-[#212121]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13 7l5 5m0 0l-5 5m5-5H6" 
                        />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="md:hidden flex justify-center space-x-4 mt-8">
            {steps.slice(0, -1).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="w-8 h-8 bg-[#C6FF00] rounded-full flex items-center justify-center"
              >
                <svg 
                  className="w-4 h-4 text-[#212121]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#0052FF] to-[#C6FF00] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Custom Kit?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's bring your team's vision to life with premium custom sportswear.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="bg-white text-[#212121] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Custom Order
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomizationProcess; 