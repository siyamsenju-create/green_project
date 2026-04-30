import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get('/api/services');
        setServices(data.slice(0, 6)); // Show first 6 on home page
        setLoading(false);
      } catch (error) {
        console.error("Error fetching services", error);
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Leaf className="text-light w-6 h-6" />
            <h4 className="text-light font-bold uppercase tracking-wider">What We Do</h4>
            <Leaf className="text-light w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-6">
            Our Services
          </h2>
          <p className="text-textMuted text-lg">
            We offer a comprehensive range of landscaping and gardening services to meet all your outdoor needs.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="animate-pulse bg-white rounded-2xl h-80 shadow-md"></div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map((service) => (
              <motion.div 
                key={service._id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-light/20 transition-all duration-300 transform hover:-translate-y-2 group"
                variants={itemVariants}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-300 z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute -bottom-6 right-6 bg-white p-3 rounded-full shadow-lg z-20 group-hover:bg-light transition duration-300">
                    <Leaf className="w-6 h-6 text-primary group-hover:text-white transition duration-300" />
                  </div>
                </div>
                
                <div className="p-8 pt-10">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3 group-hover:text-primary transition duration-300">
                    {service.title}
                  </h3>
                  <p className="text-textMuted mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <Link to="/contact" className="inline-flex items-center text-primary font-semibold hover:text-light transition duration-300">
                    Enquire Now <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="text-center mt-12">
          <Link to="/services" className="inline-block bg-white border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all shadow-md">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
