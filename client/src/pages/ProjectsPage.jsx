import React from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <div className="bg-primary py-16 text-center">
        <h1 className="text-5xl font-heading font-bold text-white mb-4">Our Projects</h1>
        <p className="text-light font-medium text-lg">Explore our portfolio of stunning landscapes.</p>
      </div>
      <Projects />
    </motion.div>
  );
};

export default ProjectsPage;
