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
        className="flex-shrink-0 flex flex-col items-center justify-center px-4 min-w-[140px]"
      >
        <div className="md:h-24 md:w-40 h-16 w-32 flex items-center justify-center mb-2">
          <img
            src={client.logo}
            alt={client.name}
            className="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105"
          />
        </div>
        <p className="text-xs font-medium text-[#212121] text-center opacity-80">
          {client.name}
        </p>
      </div>
    ));
  };

  return (
    <section className="py-20 bg-white">
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
      
      <div className="container-custom">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Why Teams <span className="text-[#0052FF]">Choose</span> Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Trusted by premier teams across sports. From concept to delivery, we craft exceptional sportswear that performs as hard as you do.
          </p>
          
          {/* Client logos carousel */}
          <div className="relative overflow-hidden bg-[#F8F9FA] rounded-xl py-6 mb-16">
            <div className="scroll-container">
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

        {/* Section Titles - Aligned at same level */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#212121]"
          >
            The Numbers Tell Our Story
          </motion.h3>
          
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#212121]"
          >
            What Sets Us Apart
          </motion.h3>
        </div>

        {/* Stats and Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          
          {/* Left side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
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
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    {/* <IconComponent className="w-6 h-6 text-[#0052FF]" /> */}
                    {<IconComponent className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#0052FF]">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right side - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-gray-100 hover:border-[#0052FF] hover:border-opacity-30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon 
                      className="w-6 h-6" 
                      style={{ color: feature.color }}
                    />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#212121] mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust indicators - Horizontal section below both columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#F8F9FA] rounded-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#C6FF00] rounded-full flex items-center justify-center">
                <span className="text-[#212121] font-bold text-sm">✓</span>
              </div>
              <span className="text-lg font-medium">Client-Provided Designs Welcome</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#C6FF00] rounded-full flex items-center justify-center">
                <span className="text-[#212121] font-bold text-sm">✓</span>
              </div>
              <span className="text-lg font-medium">Low MOQ - Just 10 pieces</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#C6FF00] rounded-full flex items-center justify-center">
                <span className="text-[#212121] font-bold text-sm">✓</span>
              </div>
              <span className="text-lg font-medium">Multiple Sports. One Trusted Brand.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy; 