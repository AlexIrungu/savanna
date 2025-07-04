import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eerie-black text-ghost-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-beaver/5 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-vanilla/5 to-transparent rounded-full transform -translate-x-36 translate-y-36"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              {/* Logo */}
              <a href="/" className="flex items-center mb-6 group">
                <div className="text-6xl font-playfair italic text-transparent bg-gradient-to-r from-vanilla to-beaver bg-clip-text mr-4 group-hover:scale-105 transition-transform duration-300">
                  Sg
                </div>
                <div className="text-ghost-white">
                  <div className="text-xl font-raleway font-bold tracking-wider group-hover:text-vanilla transition-colors duration-300">SAVANNA</div>
                  <div className="text-lg font-raleway tracking-widest text-beaver group-hover:text-ghost-white transition-colors duration-300">JOURNEYS</div>
                </div>
              </a>
              
              <p className="text-beaver font-raleway text-lg leading-relaxed max-w-md mb-6">
                Discover the untamed beauty of Africa's wilderness through expertly crafted safari experiences that create memories to last a lifetime.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-beaver">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-vanilla rounded-full"></div>
                  <span>Licensed Tour Operator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-vanilla rounded-full"></div>
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' }
              ].map(({ Icon, href, label }) => (
                <a 
                  key={label}
                  href={href} 
                  aria-label={label}
                  className="w-12 h-12 bg-gradient-to-br from-beaver/20 to-beaver/10 backdrop-blur-sm border border-beaver/20 hover:border-vanilla/50 rounded-2xl flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-vanilla/20"
                >
                  <Icon className="w-5 h-5 text-beaver group-hover:text-vanilla transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-transparent bg-gradient-to-r from-vanilla to-ghost-white bg-clip-text mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Destinations', path: '/destinations' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-beaver hover:text-vanilla transition-all duration-300 font-raleway text-lg group flex items-center"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.name}
                    </span>
                    <div className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-vanilla to-transparent ml-2 transition-all duration-300"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-transparent bg-gradient-to-r from-vanilla to-ghost-white bg-clip-text mb-6">
              Get in Touch
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-beaver/20 to-beaver/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-4 h-4 text-beaver group-hover:text-vanilla transition-colors duration-300" />
                </div>
                <div className="text-beaver font-raleway group-hover:text-ghost-white transition-colors duration-300">
                  <p className="font-semibold">Nairobi, Kenya</p>
                  <p className="text-sm opacity-80">East Africa</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-beaver/20 to-beaver/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-beaver group-hover:text-vanilla transition-colors duration-300" />
                </div>
                <a 
                  href="tel:+254700000000" 
                  className="text-beaver hover:text-vanilla transition-colors duration-300 font-raleway font-semibold"
                >
                  +254 742 779 434
                </a>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-beaver/20 to-beaver/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 text-beaver group-hover:text-vanilla transition-colors duration-300" />
                </div>
                <a 
                  href="mailto:info@savannajourneys.com" 
                  className="text-beaver hover:text-vanilla transition-colors duration-300 font-raleway font-semibold break-all"
                >
                  journeyssavanna@gmail.com
                </a>
              </div>

              {/* Business Hours */}
              <div className="mt-6 p-4 bg-gradient-to-br from-beaver/5 to-transparent rounded-2xl border border-beaver/10">
                <h4 className="font-raleway font-semibold text-ghost-white mb-2">Business Hours</h4>
                <div className="text-beaver text-sm space-y-1">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gradient-to-r from-transparent via-beaver/30 to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-beaver font-raleway text-sm mb-2 md:mb-0">
              © 2023 Savanna Journeys. All rights reserved. Crafted with ❤️ in Kenya.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {[
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Cookie Policy', path: '/cookies' }
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="text-beaver hover:text-vanilla transition-colors duration-300 font-raleway text-sm relative group"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-vanilla to-transparent transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;