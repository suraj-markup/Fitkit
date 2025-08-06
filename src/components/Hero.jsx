import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Palette, Zap, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-slideshow-image/dist/styles.css';
import hero1 from '../assets/optimized/IMG_7453.JPG';
import hero2 from '../assets/optimized/DSC03471.jpg';
import hero3 from '../assets/optimized/IMG_7431.JPG';
import hero4 from '../assets/optimized/IMG_7424.JPG';
// import hero5 from '../assets/optimized/IMG_7420.JPG';
import hero6 from '../assets/optimized/Basketball.png';


const slideImages = [
    { url: hero1 },
    { url: hero2 },
    { url: hero6 },
    { url: hero3 },
    { url: hero4 },

];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000); // Change image every 6 seconds

        return () => clearInterval(interval);
    }, []);

    // Trigger animations on mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

        // Preload all hero images to prevent gray screen
    useEffect(() => {
        // Preload hero images
        
        const preloadHeroImages = async () => {
            const imagePromises = slideImages.map(slide => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = resolve;
                    img.src = slide.url;
                });
            });
            
            await Promise.all(imagePromises);
            setImagesLoaded(true);
        };

        preloadHeroImages();
    }, []);

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent("Hello FITKIT, I'm interested in customizing my team's kit!");
        window.open(`https://wa.me/917014680160?text=${message}`, '_blank');
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentImageIndex(index);
    };

    const features = [
        { icon: Palette, text: "Client-Provided Designs Welcome" },
        { icon: Shield, text: "Minimum Order Quantity (MOQ) - Just 10 pieces" },
        { icon: Zap, text: "Multiple Sports. One Trusted Brand." },
        { icon: Truck, text: "Domestic + International Deliveries" }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image with Ken Burns Effect - Instant Transition */}
            <div className="absolute inset-0 overflow-hidden">
                {imagesLoaded && slideImages.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.url}
                        alt={`FitKit Hero Image ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover object-center ken-burns-image transition-opacity duration-500 ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            zIndex: index === currentImageIndex ? 1 : 0
                        }}
                    />
                ))}
                {!imagesLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}
            </div>

            {/* Comprehensive Background Overlay System */}
            {/* Base dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            
          
            
            {/* Left-to-right gradient for text emphasis */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-10"></div> */}
            
            {/* Additional overlay for maximum readability */}
            {/* <div className="absolute inset-0 bg-black/30 z-10"></div> */}

            {/* Manual Navigation Arrows */}
            <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-1 sm:left-2 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
            >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-black" />
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-1 sm:right-2 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
            >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-black" />
            </motion.button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
                {slideImages.map((_, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => goToSlide(index)}
                                                 className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${index === currentImageIndex
                                ? 'bg-[#C6FF00] scale-125 shadow-lg shadow-[#C6FF00]/50'
                                : 'bg-white bg-opacity-60 hover:bg-opacity-80'
                            }`}
                    />
                ))}
            </div>

                  {/* Content Positioned to Left - Responsive */}
      <div className="absolute inset-0 flex items-center justify-center sm:justify-start z-20">
        <div className="text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 max-w-full sm:max-w-3xl lg:max-w-4xl md:max-w-[60%]">
          <div className="text-center sm:text-left">
                        {/* Main Headline with Dramatic Entrance */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 1.2, delay: 0.3, type: "spring", bounce: 0.4 }}
                            className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
                        >
                            <span className="text-red-300 drop-shadow-2xl">Your Team.</span>
                            <br />
                            <span className="text-red-400 drop-shadow-2xl">Your Gear.</span>
                            <br />
                            <span className="text-red-500 drop-shadow-2xl">Your Design.</span>
                        </motion.h1>

                        {/* Sub-headline */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 text-white drop-shadow-xl font-medium max-w-full sm:max-w-2xl"
                        >
                            Specialists in <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">custom jerseys</span>, <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">uniforms</span>, and <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">performance wear</span> for over 15+ sports.
                        </motion.p>

                        {/* Features List with Enhanced Stagger */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 max-w-full sm:max-w-3xl"
                        >
                            {features.map((feature, featureIndex) => (
                                <motion.div
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -30, scale: 0.8 }}
                                    animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
                                    transition={{
                                        duration: 0.6,
                                        delay: 1.2 + featureIndex * 0.15,
                                        type: "spring",
                                        bounce: 0.3
                                    }}
                                    className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 rounded-lg p-2 sm:p-3 hover:bg-opacity-30 transition-all duration-200" 
                                >
                                    <feature.icon className="h-5 w-5 text-[#C6FF00] drop-shadow-lg flex-shrink-0" />
                                    <span className="text-base sm:text-lg font-medium text-white drop-shadow-xl text-center sm:text-left">{feature.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button with Dramatic Entrance */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.8 }}
                            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{
                                duration: 0.8,
                                delay: 1.8,
                                type: "spring",
                                bounce: 0.4
                            }}
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.08,
                                    boxShadow: "0 20px 40px rgba(198, 255, 0, 0.3)",
                                    backgroundColor: "#B8E600"
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleWhatsAppClick}
                                className="bg-[#C6FF00] text-[#212121] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-[#C6FF00]/30 transition-all duration-300 border-2 border-transparent hover:border-[#C6FF00] w-full sm:w-auto"
                            >
                                Customize Your Kit Now
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero; 