import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Stats from '../components/Stats';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <div className="bg-primary py-16 text-center">
        <h1 className="text-5xl font-heading font-bold text-white mb-4">About Us</h1>
        <p className="text-light font-medium text-lg">Learn more about our journey and expertise.</p>
      </div>
      <About />
      <Stats />
    </motion.div>
  );
};

export default AboutPage;
