import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Shield, Palette, Zap, Users, Trophy, Star } from "lucide-react";

// Import client logos
import ep3lLogo from '../assets/clients/ep3l.png';
import kirorimalLogo from '../assets/clients/kirorimal.png';
import suratLogo from '../assets/clients/surat.png';
import xavierBhiwadiLogo from '../assets/clients/xavierBhiwadi.png';
import xaviersJaipurLogo from '../assets/clients/Xaviers-Jaipur-Logo.png';
import cblLogo from '../assets/clients/CBL.png';
import DBallLeague from '../assets/clients/DBallLeague.png';
import jmcLogo from '../assets/clients/JMC.png';

const clientLogos = [
  { name: "EP3L", logo: ep3lLogo },
  { name: "D Ball League", logo: DBallLeague },
  { name: "Corporate Basketball League", logo: cblLogo },
  { name: "Surat Ultimate Basketball League", logo: suratLogo },
  { name: "St. Xavier's Jaipur", logo: xaviersJaipurLogo },
  { name: "Kirorimal college Delhi,DU", logo: kirorimalLogo },
  { name: "St. Xavier's Bhiwadi", logo: xavierBhiwadiLogo },
  { name: "Jesu & Marry College, DU", logo: jmcLogo }
];

// Infinity Carousel with buttery-smooth looping
const InfiniteLogoCarousel = ({ clients }) => {
  const trackRef = useRef();
  const animRef = useRef();
  const posRef = useRef(0);
  const speed = 1; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const setWidth = () => {
      track.style.minWidth = `${track.scrollWidth}px`;
    };
    setWidth();
    window.addEventListener("resize", setWidth);

    function animate() {
      posRef.current -= speed;
      const firstSetWidth = track.scrollWidth / 2;
      if (Math.abs(posRef.current) >= firstSetWidth) {
        posRef.current = 0;
      }
      track.style.transform = `translateX(${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("resize", setWidth);
      cancelAnimationFrame(animRef.current);
    };
  }, [clients]);

  const doubled = [...clients, ...clients];

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: "#F8F9FA",
        borderRadius: 16,
        padding: "24px 0",
        position: "relative",
        marginBottom: 32
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          minWidth: "100%",
          transition: "none"
        }}
      >
        {doubled.map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 min-w-[150px] sm:min-w-[170px] lg:min-w-[200px]"
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
        ))}
      </div>
    </div>
  );
};

const stats = [
  { number: "50+", label: "Teams Served", icon: Users },
  { number: "10k+", label: "Kits Delivered", icon: Trophy },
  { number: "4.9/5", label: "Customer Rating", icon: Star },
  { number: "25+", label: "National + International Deliveries", icon: Shield }
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

export default function TrustedBy() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
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
          {/* Infinite carousel */}
          <InfiniteLogoCarousel clients={clientLogos} />
        </motion.div>

        {/* Stats & Features */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Left: Stats */}
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

          {/* Right: Features */}
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

        {/* Trust indicators */}
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
}
