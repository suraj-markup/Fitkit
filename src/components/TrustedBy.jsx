import { motion } from 'framer-motion';

const TrustedBy = () => {
  const clients = [
    { name: "Goldstein Basketball", logo: "🏀" },
    { name: "Hoboken Sports", logo: "⚽" },
    { name: "Pro Athletics", logo: "🏃" },
    { name: "Elite Sports", logo: "🏆" },
    { name: "Champion League", logo: "🥇" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#212121] mb-12">
            Trusted By...
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="text-4xl md:text-5xl filter grayscale hover:grayscale-0 transition-all duration-300">
                  {client.logo}
                </div>
                <p className="text-sm font-medium text-[#212121] text-center">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy; 