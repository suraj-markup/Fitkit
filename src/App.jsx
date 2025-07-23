import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import WhyTrustUs from './components/WhyTrustUs';
import ExploreKits from './components/ExploreKits';
import FabricShowcase from './components/FabricShowcase';
import CustomizationProcess from './components/CustomizationProcess';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <WhyTrustUs />
        <ExploreKits />
        <FabricShowcase />
        <CustomizationProcess />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
