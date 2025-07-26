import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ExploreKits from './components/ExploreKits';
import FabricShowcase from './components/FabricShowcase';
import CustomizationProcess from './components/CustomizationProcess';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ExploreKits />
      {/* <FabricShowcase /> */}
      <CustomizationProcess />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F8F9FA]">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <HomePage />
              </main>
              <Footer />
            </>
          } />
          <Route path="/products/*" element={
            <>
              <Navbar />
              <main>
                <ProductsPage />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
