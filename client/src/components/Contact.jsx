import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const onSubmit = async (data) => {
    try {
      await axios.post('/api/contact', data);
      toast.success('Your enquiry has been sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send enquiry. Please try again later.');
    }
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-4">Get In Touch</h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">Have a project in mind? Let's discuss how we can transform your outdoor space.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          
          {/* Contact Info (Left) */}
          <motion.div 
            className="lg:col-span-2 bg-dark p-10 text-white relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-3xl font-heading font-bold mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start space-x-4">
                <MapPin className="text-light w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Our Location</h4>
                  <p className="text-gray-300">123 Green Avenue, Garden City,<br/>Chennai, TN 600001</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-light w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone Number</h4>
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-light w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email Address</h4>
                  <p className="text-gray-300">info@greenscape.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-light w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Working Hours</h4>
                  <p className="text-gray-300">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Placeholder Map Image instead of iframe for simplicity in this demo */}
            <div className="mt-10 rounded-xl overflow-hidden h-48 relative z-10">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b" alt="Map Location" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition" />
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div 
            className="lg:col-span-3 p-10"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-dark mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interested Service</label>
                  <select 
                    {...register("service")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="Landscape Design">Landscape Design</option>
                    <option value="Garden Maintenance">Garden Maintenance</option>
                    <option value="Artificial Grass">Artificial Grass</option>
                    <option value="Terrace Gardening">Terrace Gardening</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-dark transition-colors shadow-lg shadow-primary/30 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
