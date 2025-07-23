import { motion } from 'framer-motion';
import { Shield, Palette, Zap } from 'lucide-react';

const WhyTrustUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Durable Fabrics",
      description: "Kits that withstand the toughest games.",
      color: "#0052FF"
    },
    {
      icon: Palette,
      title: "Unlimited Customization",
      description: "Your design, your colors, flawlessly executed.",
      color: "#C6FF00"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Breathable materials designed for peak performance.",
      color: "#0052FF"
    }
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Why People Trust Us...
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering exceptional custom sportswear that meets the unique needs of teams across various sports. Our dedication to quality, customization, and performance sets us apart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon 
                    className="w-8 h-8" 
                    style={{ color: feature.color }}
                  />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-[#212121] mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#C6FF00] rounded-full flex items-center justify-center">
                <span className="text-[#212121] font-bold text-sm">✓</span>
              </div>
              <span className="text-lg">Client-Provided Designs Welcome</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#C6FF00] rounded-full flex items-center justify-center">
                <span className="text-[#212121] font-bold text-sm">✓</span>
              </div>
              <span className="text-lg">Low Minimum Order Quantity (MOQ) - Just 10 pieces</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#C6FF00] rounded-full flex items-center justify-center">
                <span className="text-[#212121] font-bold text-sm">✓</span>
              </div>
              <span className="text-lg">Multiple Sports. One Trusted Brand.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTrustUs; 