import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-light" />
              <span className="font-heading text-2xl font-bold">GreenScape</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming ordinary spaces into extraordinary landscapes since 2004. Professional gardening and landscaping services for residential and commercial properties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-light transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-light transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-light transition-colors">Projects Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-light transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Landscape Design</li>
              <li>Garden Maintenance</li>
              <li>Hardscaping Work</li>
              <li>Artificial Grass Setup</li>
              <li>Terrace Gardening</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Connect With Us</h3>
            <p className="text-gray-400 mb-6">Follow us on social media for the latest updates and gardening tips.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary hover:bg-light p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary hover:bg-light p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary hover:bg-light p-3 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary hover:bg-light p-3 rounded-full transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GreenScape Landscaping. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed by Antigravity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
