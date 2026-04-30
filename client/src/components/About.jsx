import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const expertise = [
    "Expert Landscape Design",
    "Professional Garden Maintenance",
    "Quality Hardscaping",
    "Eco-Friendly Solutions"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-primary rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="/images/about.png" 
              alt="Professional Gardeners" 
              className="relative z-10 rounded-2xl w-full h-[500px] object-cover shadow-xl"
            />
            <div className="absolute top-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary font-heading">20+</span>
                <span className="text-textMuted font-medium text-sm text-center">Years of<br/>Experience</span>
              </div>
            </div>
            <div className="absolute bottom-8 -left-8 bg-dark text-white p-4 rounded-full shadow-2xl z-20 hidden md:block border-4 border-white">
              <span className="font-semibold px-2">Since 2004</span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h4 className="text-light font-bold uppercase tracking-wider mb-2">About GreenScape</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-6 leading-tight">
              We Make Your Outdoor <br/>Dreams Come True
            </h2>
            <p className="text-textMuted text-lg mb-8 leading-relaxed">
              For over two decades, GreenScape has been at the forefront of transforming ordinary spaces into breathtaking natural landscapes. Our passionate team of horticulturists, designers, and craftsmen work tirelessly to create environments that bring joy and harmony.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {expertise.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-light h-6 w-6 flex-shrink-0" />
                  <span className="text-textDark font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/services" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-dark transition-all transform hover:-translate-y-1 shadow-lg">
              View Services
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
