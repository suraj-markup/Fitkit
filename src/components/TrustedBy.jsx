import { motion } from 'framer-motion';
import { Shield, Palette, Zap, Users, Trophy, Star } from 'lucide-react';

// Import client logos
import ep3lLogo from '../assets/clients/ep3l.png';
import kirorimalLogo from '../assets/clients/kirorimal.png';
import suratLogo from '../assets/clients/surat.png';
import xavierBhiwadiLogo from '../assets/clients/xavierBhiwadi.png';
import xaviersJaipurLogo from '../assets/clients/Xaviers-Jaipur-Logo.png';

const TrustedBy = () => {
  const clients = [
    { name: "EP3L", logo: ep3lLogo },
    { name: "Kirorimal college Delhi,DU", logo: kirorimalLogo },
    { name: "Surat Ultimate Basketball League", logo: suratLogo },
    { name: "St. Xavier's Bhiwadi", logo: xavierBhiwadiLogo },
    { name: "St. Xavier's Jaipur", logo: xaviersJaipurLogo }
  ];

  const stats = [
    {
      number: "50+",
      label: "Teams Served",
      icon: Users
    },
    {
      number: "10k+",
      label: "Kits Delivered",
      icon: Trophy
    },
    {
      number: "4.9/5",
      label: "Customer Rating",
      icon: Star
    },
    {
      number: "25+",
      label: "National + International Deliveries",
      icon: Shield
    }
  ];

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

  // Create multiple sets for seamless looping
  const renderLogos = (keyPrefix) => {
    return clients.map((client, index) => (
      <div
        key={`${keyPrefix}-${index}`}
        className="flex-shrink-0 flex flex-col items-center justify-center px-2 sm:px-4 min-w-[120px] sm:min-w-[140px] lg:min-w-[160px]"
      >
        <div className="h-12 w-20 sm:h-16 sm:w-24 md:h-20 md:w-32 lg:h-24 lg:w-40 flex items-center justify-center mb-2">
          <img
            src={client.logo}
            alt={client.name}
            className="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105"
          />
        </div>
        <p className="text-xs sm:text-sm font-medium text-[#212121] text-center opacity-80 leading-tight">
          {client.name}
        </p>
      </div>
    ));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <style>
        {`
          @keyframes scroll-logos {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .scroll-container:hover .scroll-track {
            animation-play-state: paused;
          }
          
          .scroll-track {
            animation: scroll-logos 30s linear infinite;
            display: flex;
            width: max-content;
          }
        `}
      </style>
      
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#212121] mb-4 sm:mb-6">
            Why Teams <span className="text-[#0052FF]">Choose</span> Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Trusted by premier teams across sports. From concept to delivery, we craft exceptional sportswear that performs as hard as you do.
          </p>
          
          {/* Client logos carousel */}
          <div className="relative overflow-hidden bg-[#F8F9FA] rounded-xl py-4 sm:py-6 mb-12 sm:mb-16">
            <div className="scroll-container overflow-hidden">
              <div className="scroll-track">
                {/* Multiple sets for seamless loop */}
                {renderLogos('set1')}
                {renderLogos('set2')}
                {renderLogos('set3')}
                {renderLogos('set4')}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Titles and Content - Restructured for mobile */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          
          {/* Left side - Stats with title */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-[#212121] text-center lg:text-left mb-8"
            >
              The Numbers Tell Our Story
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 sm:space-x-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0052FF]">{stat.number}</div>
                      <div className="text-sm sm:text-base text-gray-600 font-medium leading-tight">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right side - Features with title */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-[#212121] text-center lg:text-left mb-8"
            >
              What Sets Us Apart
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white border-2 border-gray-100 hover:border-[#0052FF] hover:border-opacity-30 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <feature.icon 
                        className="w-5 h-5 sm:w-6 sm:h-6" 
                        style={{ color: feature.color }}
                      />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-[#212121] mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust indicators - Horizontal section below both columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 mt-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#C6FF00] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#212121] font-bold text-xs sm:text-sm">✓</span>
              </div>
              <span className="text-sm sm:text-lg font-medium leading-tight">Client-Provided Designs Welcome</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#C6FF00] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#212121] font-bold text-xs sm:text-sm">✓</span>
              </div>
              <span className="text-sm sm:text-lg font-medium leading-tight">Low MOQ - Just 10 pieces</span>
            </div>
            <div className="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#C6FF00] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#212121] font-bold text-xs sm:text-sm">✓</span>
              </div>
              <span className="text-sm sm:text-lg font-medium leading-tight">Multiple Sports. One Trusted Brand.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy; 