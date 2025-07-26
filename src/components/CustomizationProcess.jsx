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
    window.open(`https://wa.me/917014680160?text=${message}`, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] mb-4 sm:mb-6 leading-tight">
            Your Vision, Brought to Life in 3 Simple Steps
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            From concept to delivery, we make custom sportswear creation effortless and enjoyable.
          </p>
        </motion.div>

        <div className="relative">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
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
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0052FF] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className="bg-[#F8F9FA] rounded-xl p-4 sm:p-6 lg:p-8 pt-8 sm:pt-10 lg:pt-12 text-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon 
                      className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" 
                      style={{ color: step.color }}
                    />
                  </motion.div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#212121] mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (except for last step) - Hidden on mobile, visible on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-12 transform -translate-y-1/2 z-5">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 lg:w-12 lg:h-12 bg-[#C6FF00] rounded-full flex items-center justify-center"
                    >
                      <svg 
                        className="w-5 h-5 lg:w-6 lg:h-6 text-[#212121]" 
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

                {/* Mobile/Tablet Arrow (centered below each step except last) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 sm:mt-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C6FF00] rounded-full flex items-center justify-center"
                    >
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#212121]" 
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
                  </div>
                )}
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
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-[#0052FF] to-[#C6FF00] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Ready to Create Your Custom Kit?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
              Let's bring your team's vision to life with premium custom sportswear.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="bg-white text-[#212121] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto"
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