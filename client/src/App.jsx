import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-body">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* 404 Route */}
            <Route path="*" element={
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="pt-32 pb-20 text-center min-h-[70vh] flex flex-col items-center justify-center"
              >
                <h1 className="text-6xl font-heading font-bold text-primary mb-4">404</h1>
                <p className="text-xl text-textMuted mb-8">Oops! The page you're looking for was not found.</p>
                <button onClick={() => window.history.back()} className="bg-primary text-white px-8 py-3 rounded-full hover:bg-dark transition">Go Back</button>
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-light hover:bg-primary text-white p-3 rounded-full shadow-lg z-50 transition-colors"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
