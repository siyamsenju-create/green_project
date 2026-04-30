import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Hero = () => {
  const text = "Transform Your Outdoor Space";

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/images/hero.png')",
          backgroundAttachment: "fixed" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-primary/50 to-dark/90 mix-blend-multiply"></div>
      </div>

      {/* Floating Leaves Decoration */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <svg className="absolute top-1/4 left-10 w-12 h-12 text-light/40 animate-float" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
        <svg className="absolute top-1/3 right-20 w-16 h-16 text-accent/30 animate-float-delayed" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c3.47.5 6.89-1.11 9.06-4.28C17.56 12.77 22.59 9.13 22 4.56c-1.33-1.06-3.69-1.22-5-.56z" />
        </svg>
        <svg className="absolute bottom-1/4 left-1/4 w-8 h-8 text-light/50 animate-float" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c3.47.5 6.89-1.11 9.06-4.28C17.56 12.77 22.59 9.13 22 4.56c-1.33-1.06-3.69-1.22-5-.56z" />
        </svg>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 drop-shadow-lg"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          Expert landscaping and gardening services to bring your dream outdoor spaces to life.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, duration: 0.5, type: 'spring' }}
        >
          <Link to="/services" className="px-8 py-4 bg-light text-white rounded-full font-semibold text-lg hover:bg-primary transition-all shadow-[0_0_20px_rgba(82,183,136,0.4)] hover:shadow-[0_0_25px_rgba(45,106,79,0.6)] transform hover:-translate-y-1">
            View Services
          </Link>
          <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-dark transition-all transform hover:-translate-y-1">
            Contact Now
          </Link>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 4, duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white w-10 h-10" />
      </motion.div>
    </div>
  );
};

export default Hero;
