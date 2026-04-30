import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { X, ZoomIn } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = ['All', 'garden', 'landscape', 'terrace', 'maintenance'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('/api/projects');
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = filter === 'All' 
    ? projects.slice(0, 8) 
    : projects.filter(p => p.category === filter).slice(0, 8);

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-6">Our Recent Projects</h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-100 text-textMuted hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[1,2,3,4].map(i => <div key={i} className="h-64 bg-gray-200 animate-pulse rounded-xl"></div>)}
           </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project._id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer h-72"
                  onClick={() => setSelectedImage(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                    <ZoomIn className="text-white w-8 h-8 mb-4 transform translate-y-4 group-hover:translate-y-0 transition duration-300" />
                    <h3 className="text-xl font-heading font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">{project.title}</h3>
                    <p className="text-gray-300 text-sm capitalize transform translate-y-4 group-hover:translate-y-0 transition duration-300 delay-100">{project.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-light transition">
              <X className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full md:w-2/3 h-64 md:h-[500px] object-cover" />
              <div className="p-8 md:w-1/3 flex flex-col justify-center">
                <span className="text-light font-medium uppercase tracking-wider mb-2">{selectedImage.category}</span>
                <h3 className="text-3xl font-heading font-bold text-dark mb-4">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-6">{selectedImage.description}</p>
                <div className="text-sm text-gray-500 flex items-center mb-6">
                  <span className="font-semibold text-dark mr-2">Location:</span> {selectedImage.location}
                </div>
                <button onClick={() => setSelectedImage(null)} className="mt-auto bg-dark text-white px-6 py-3 rounded-full hover:bg-primary transition">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
