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
import SEOHead from './components/SEOHead';
import BreadcrumbSchema from './components/BreadcrumbSchema';

function HomePage() {
  return (
    <>
      <SEOHead 
        title="FitKit - Premium Sports Jersey & Athletic Wear Manufacturer | Custom Team Uniforms"
        description="FitKit is India's leading manufacturer of premium sports jerseys, athletic wear, and custom team uniforms. Specializing in cricket, football, basketball, and more. High-quality fabrics, custom designs, bulk orders."
        keywords="sports jerseys, athletic wear, team uniforms, cricket jerseys, football jerseys, basketball jerseys, custom sports wear, bulk sports clothing, sports fabric manufacturer, India"
        url="https://www.fitkitsportswear.com/"
        image="https://www.fitkitsportswear.com/og-image.png"
      />
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
      <BreadcrumbSchema />
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
              <SEOHead 
                title="Sports Jerseys & Athletic Wear | FitKit Products"
                description="Explore our complete range of sports jerseys and athletic wear. Cricket, football, basketball, hockey, volleyball, and more. Custom team uniforms with premium fabrics."
                keywords="sports jerseys, cricket jerseys, football jerseys, basketball jerseys, hockey jerseys, volleyball jerseys, athletic wear, team uniforms"
                url="https://www.fitkitsportswear.com/products"
                image="https://www.fitkitsportswear.com/products-og-image.png"
              />
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
