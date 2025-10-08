import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from './ScrollToTop';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import BakarwadiHero from '@/components/Bakarwadi';
import OffersHero from '@/components/OffersHero.jsx'; // Add this import
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
  <ScrollToTop />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        {/* Special Bakarwadi promo route (kept at /products/bakarwadi as before) */}
        <Route path="/products/bakarwadi" element={<BakarwadiHero />} />
              <Route path="/Offers" element={<OffersHero />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;