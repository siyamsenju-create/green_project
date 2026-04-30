import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <div className="bg-primary py-16 text-center">
        <h1 className="text-5xl font-heading font-bold text-white mb-4">Contact Us</h1>
        <p className="text-light font-medium text-lg">Get in touch with us for a free consultation.</p>
      </div>
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
