import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin, Phone, Mail } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-vanilla via-white to-beaver/10 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        {/* 404 Header */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-beaver/20 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-eerie-black mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-beaver font-raleway mb-8">
            It looks like the safari trail you're looking for has wandered off. 
            Let's get you back on track to discover Kenya's amazing wildlife!
          </p>
        </div>

        {/* Navigation Options */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link 
            to="/" 
            className="flex items-center justify-center space-x-3 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-beaver/10"
          >
            <Home className="w-6 h-6 text-beaver" />
            <span className="font-raleway font-semibold text-eerie-black">Return Home</span>
          </Link>
          
          <Link 
            to="/destinations" 
            className="flex items-center justify-center space-x-3 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-beaver/10"
          >
            <MapPin className="w-6 h-6 text-beaver" />
            <span className="font-raleway font-semibold text-eerie-black">View Destinations</span>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-beaver/10">
          <h3 className="text-xl font-raleway font-bold text-eerie-black mb-6">
            Need Help Planning Your Safari?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-vanilla to-beaver/20 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-eerie-black" />
              </div>
              <div className="text-left">
                <div className="font-raleway font-semibold text-eerie-black text-sm">Call Us</div>
                <a href="tel:+254742779434" className="font-raleway text-beaver hover:text-eerie-black transition-colors">
                  +254 742 779 434
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-vanilla to-beaver/20 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-eerie-black" />
              </div>
              <div className="text-left">
                <div className="font-raleway font-semibold text-eerie-black text-sm">Email Us</div>
                <a href="mailto:journeyssavanna@gmail.com" className="font-raleway text-beaver hover:text-eerie-black transition-colors">
                  journeyssavanna@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-8 text-sm text-beaver/70 font-raleway">
          <p>
            Journeys Savanna specializes in Kenya safari tours, wildlife experiences, 
            and unforgettable African adventures. Based in Nairobi, we offer 
            personalized safari packages to Maasai Mara, Amboseli, and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;