import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const SavannaFooter = () => {
  return (
    <footer className="bg-eerie-black text-ghost-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <div className="text-6xl font-playfair italic text-mindaro mr-4">
                  Sg
                </div>
                <div className="text-ghost-white">
                  <div className="text-xl font-raleway font-bold tracking-wider">SAVANNA</div>
                  <div className="text-lg font-raleway tracking-widest">JOURNEYS</div>
                </div>
              </div>
              
              <p className="text-beaver font-raleway text-lg leading-relaxed max-w-md">
                Discover the untamed beauty of Africa's wilderness through expertly crafted safari experiences that create memories to last a lifetime.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-beaver hover:bg-mindaro rounded-full flex items-center justify-center transition-colors duration-300 group">
                <Facebook className="w-5 h-5 text-ghost-white group-hover:text-eerie-black" />
              </a>
              <a href="#" className="w-12 h-12 bg-beaver hover:bg-mindaro rounded-full flex items-center justify-center transition-colors duration-300 group">
                <Instagram className="w-5 h-5 text-ghost-white group-hover:text-eerie-black" />
              </a>
              <a href="#" className="w-12 h-12 bg-beaver hover:bg-mindaro rounded-full flex items-center justify-center transition-colors duration-300 group">
                <Twitter className="w-5 h-5 text-ghost-white group-hover:text-eerie-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-mindaro mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Safari Packages', 'About Us', 'Destinations', 'Gallery', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-beaver hover:text-mindaro transition-colors duration-300 font-raleway text-lg">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-mindaro mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-beaver mt-1 flex-shrink-0" />
                <div className="text-beaver font-raleway">
                  <p>Nairobi, Kenya</p>
                  <p>East Africa</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-beaver flex-shrink-0" />
                <a href="tel:+254700000000" className="text-beaver hover:text-mindaro transition-colors duration-300 font-raleway">
                  +254 700 000 000
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-beaver flex-shrink-0" />
                <a href="mailto:info@savannajourneys.com" className="text-beaver hover:text-mindaro transition-colors duration-300 font-raleway">
                  info@savannajourneys.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-beaver border-opacity-30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-playfair font-bold text-mindaro mb-2">Stay Connected</h4>
              <p className="text-beaver font-raleway">Subscribe to our newsletter for exclusive safari deals and travel tips</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-transparent border border-beaver rounded-l-lg focus:outline-none focus:border-mindaro text-ghost-white placeholder-beaver font-raleway flex-grow md:w-80"
              />
              <button className="px-6 py-3 bg-mindaro text-eerie-black font-raleway font-bold rounded-r-lg hover:bg-vanilla transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-beaver border-opacity-30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-beaver font-raleway text-sm mb-2 md:mb-0">
              © 2024 Savanna Journeys. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-beaver hover:text-mindaro transition-colors duration-300 font-raleway text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-beaver hover:text-mindaro transition-colors duration-300 font-raleway text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-beaver hover:text-mindaro transition-colors duration-300 font-raleway text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SavannaFooter;