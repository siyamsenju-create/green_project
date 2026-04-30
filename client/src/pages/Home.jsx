import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Services />
      <Stats />
      <Projects />
      <Testimonials />
      <Contact />
    </motion.div>
  );
};

export default Home;
