import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "FITKIT delivered exceptional quality jerseys for our basketball team. The customization options were incredible and the fabric quality exceeded our expectations. Our team looks and feels amazing on the court!",
      customer: "John S.",
      role: "Manager of FC Eagles",
      rating: 5,
      sport: "Basketball"
    },
    {
      id: 2,
      quote: "The attention to detail in our football kits is outstanding. From the initial design consultation to the final delivery, FITKIT made the entire process seamless. Highly recommended for any team!",
      customer: "Sarah M.",
      role: "Coach, Thunder FC",
      rating: 5,
      sport: "Football"
    },
    {
      id: 3,
      quote: "We've been using FITKIT for our cricket team uniforms for three seasons now. The durability and comfort of their fabrics is unmatched. The team loves the breathable material during long matches.",
      customer: "Rajesh K.",
      role: "Captain, Mumbai Lions",
      rating: 5,
      sport: "Cricket"
    },
    {
      id: 4,
      quote: "The custom tennis kits we ordered are absolutely perfect! The fit is excellent and the moisture-wicking technology keeps us comfortable during intense matches. FITKIT truly understands athletes' needs.",
      customer: "Emma W.",
      role: "Tennis Coach, Elite Academy",
      rating: 5,
      sport: "Tennis"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

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
            What People Have to Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their FITKIT experience.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
              >
                <div className="text-center">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-16 h-16 bg-[#C6FF00] rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Quote className="w-8 h-8 text-[#212121]" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed"
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.blockquote>

                  {/* Customer Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-2"
                  >
                    <h4 className="text-xl font-bold text-[#212121]">
                      {testimonials[currentIndex].customer}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                    <div className="inline-block bg-[#0052FF] text-white px-4 py-2 rounded-full text-sm font-medium">
                      {testimonials[currentIndex].sport}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#F8F9FA] transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-[#212121]" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#F8F9FA] transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-[#212121]" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-[#0052FF] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const message = encodeURIComponent("Hello FITKIT, I'd like to join your satisfied customers and order custom sportswear!");
              window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
            }}
            className="btn-primary"
          >
            Join Our Satisfied Customers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 