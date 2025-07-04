import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const isHome = location.pathname === '/' || location.pathname === '/home';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
     { name: 'Services', path: '/services' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const getNavbarClasses = () => {
    let baseClasses = 'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out';
    
    if (isHome) {
      if (scrolled) {
        baseClasses += ' bg-savanna-dark/95 backdrop-blur-lg shadow-xl border-b border-savanna-brown/30';
      } else {
        baseClasses += ' bg-transparent';
      }
    } else {
      baseClasses += ' bg-savanna-dark shadow-xl border-b border-savanna-brown/30';
    }
    
    return baseClasses;
  };

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    let classes = 'relative px-4 py-2 font-raleway font-medium transition-all duration-300 group text-sm uppercase tracking-wider';
    
    if (isActive) {
      classes += ' text-savanna-light';
    } else {
      classes += ' text-savanna-white hover:text-savanna-light';
    }
    
    return classes;
  };

  const getLogoTextClasses = () => {
    if (isHome && !scrolled) {
      return 'text-savanna-white group-hover:text-savanna-light';
    }
    return 'text-savanna-white group-hover:text-savanna-light';
  };

  const getLogoSubtextClasses = () => {
    if (isHome && !scrolled) {
      return 'text-savanna-cream/90 group-hover:text-savanna-light/90';
    }
    return 'text-savanna-cream group-hover:text-savanna-light/90';
  };

  return (
    <nav className={getNavbarClasses()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Enhanced Logo */}
          {/* Enhanced Professional Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-4 group"
            onClick={handleLinkClick}
          >
            <div className="relative">
              {/* Elegant logo container with layered design */}
              <div className="relative w-16 h-16 md:w-18 md:h-18">
                {/* Outer ring with gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-savanna-light via-savanna-cream to-savanna-brown p-0.5 group-hover:p-1 transition-all duration-500 shadow-xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-savanna-dark via-savanna-brown to-savanna-dark flex items-center justify-center">
                    {/* Inner logo container */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-savanna-cream/90 to-savanna-light/90 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-inner">
                      <img 
                        src={logo} 
                        alt="Savanna Journeys" 
                        className="w-8 h-8 md:w-10 md:h-10 object-contain filter contrast-110 brightness-110" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Ambient glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-savanna-light/20 to-savanna-cream/20 blur-lg scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Subtle pulse animation */}
                <div className="absolute inset-0 rounded-full bg-savanna-light/10 animate-pulse"></div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-0.5">
              <span className={`font-playfair font-bold text-xl md:text-2xl xl:text-3xl leading-none transition-all duration-300 ${getLogoTextClasses()} filter drop-shadow-lg`}>
                Savanna Journeys
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-savanna-light to-transparent"></div>
                <span className={`font-raleway text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 ${getLogoSubtextClasses()} filter drop-shadow-sm`}>
                  Safari Adventures
                </span>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-savanna-light to-transparent"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={getLinkClasses(link.path)}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-savanna-light transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isHome && !scrolled 
                ? 'text-savanna-white hover:text-savanna-light hover:bg-white/10' 
                : 'text-savanna-white hover:text-savanna-light hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-savanna-dark/95 backdrop-blur-md rounded-b-lg mt-2 border border-savanna-brown/20 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}
                className={`block px-4 py-3 rounded-lg font-raleway font-medium transition-all duration-200 text-sm uppercase tracking-wider ${
                  location.pathname === link.path
                    ? 'text-savanna-light bg-savanna-brown/20 border-l-4 border-savanna-light'
                    : 'text-savanna-white hover:text-savanna-light hover:bg-savanna-brown/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;