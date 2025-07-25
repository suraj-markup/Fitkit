import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello FITKIT, I have a question about your services!");
    window.open(`https://wa.me/917014680160?text=${message}`, '_blank');
  };

  const handleLinkClick = (href, e) => {
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
    }
  };

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/fitkit_sportswear/", 
      label: "Instagram" 
    },

  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "#about" },
    { name: "Fabrics", href: "/products" }
  ];

  const sports = [
    { name: "Basketball", href: "/products?sport=basketball" },
    { name: "Football", href: "/products?sport=football" }, 
    { name: "Cricket", href: "/products?sport=cricket" },
    { name: "Tennis", href: "/products?sport=tennis" },
    { name: "Badminton", href: "/products?sport=badminton" }
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 70146 80160", href: "tel:+917014680160" },
  ];

  return (
    <footer className="bg-[#1D2B3A] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-[#C6FF00]">FITKIT</h3>
            <p className="text-gray-300 leading-relaxed">
              Crafting exceptional custom sportswear that empowers athletes to perform at their best. 
              Your team's success starts with quality gear.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="bg-[#C6FF00] text-[#212121] px-4 py-2 rounded-lg font-semibold hover:bg-[#B8E600] transition-colors duration-200"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[#C6FF00]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.href, e)}
                    className="text-gray-300 hover:text-[#C6FF00] transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Sports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[#C6FF00]">Sports</h4>
            <ul className="space-y-2">
              {sports.map((sport, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={sport.href}
                    onClick={(e) => handleLinkClick(sport.href, e)}
                    className="text-gray-300 hover:text-[#C6FF00] transition-colors duration-200 cursor-pointer"
                  >
                    {sport.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[#C6FF00]">Contact Info</h4>
            
            {/* Contact Details */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#C6FF00] transition-colors duration-200"
                >
                  <contact.icon className="w-4 h-4" />
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-[#C6FF00] mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-[#0052FF] rounded-full flex items-center justify-center hover:bg-[#C6FF00] hover:text-[#212121] transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FITKIT. All rights reserved. | Crafting Champions, One Kit at a Time.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 