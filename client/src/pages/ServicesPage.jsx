import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <div className="bg-primary py-16 text-center">
        <h1 className="text-5xl font-heading font-bold text-white mb-4">Our Services</h1>
        <p className="text-light font-medium text-lg">Comprehensive landscaping solutions for every need.</p>
      </div>
      <Services />
    </motion.div>
  );
};

export default ServicesPage;
