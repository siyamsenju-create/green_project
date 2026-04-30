import React from 'react';
import CountUp from 'react-countup';
import { useInView } from '../hooks/useInView';
import { motion } from 'framer-motion';
import { Trees, Users, MapPin, Award } from 'lucide-react';

const Stats = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  const stats = [
    { id: 1, icon: <Award className="w-10 h-10" />, number: 300, suffix: '+', label: 'Projects Complete' },
    { id: 2, icon: <Users className="w-10 h-10" />, number: 290, suffix: '', label: 'Satisfied Clients' },
    { id: 3, icon: <MapPin className="w-10 h-10" />, number: 200, suffix: '', label: 'Acres Coverage' },
    { id: 4, icon: <Trees className="w-10 h-10" />, number: 30, suffix: '+', label: 'Team Members' },
  ];

  return (
    <section className="py-20 bg-dark relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64')] bg-cover bg-fixed"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-light flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-heading font-bold text-white mb-2 flex justify-center items-baseline">
                {inView ? <CountUp end={stat.number} duration={2.5} /> : '0'}
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-300 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
