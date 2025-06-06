import React, { useState } from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter, Linkedin,  } from 'lucide-react';
// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelType: 'leisure',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-ghost-white via-vanilla/30 to-mindaro/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-savanna-dark mb-4">
            Plan Your Journey
          </h2>
          <div className="w-24 h-1 bg-mindaro mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-raleway text-2xl font-bold text-savanna-dark mb-6">
              Get in Touch
            </h3>
            <p className="font-raleway text-beaver text-lg mb-8 leading-relaxed">
              Ready to explore Kenya with a personalized approach? Contact me to start planning your perfect journey.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-mindaro rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-savanna-dark" />
                </div>
                <div>
                  <div className="font-raleway font-semibold text-savanna-dark">Email</div>
                  <div className="font-raleway text-beaver">info@savannajoureys.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-mindaro rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-savanna-dark" />
                </div>
                <div>
                  <div className="font-raleway font-semibold text-savanna-dark">Phone</div>
                  <div className="font-raleway text-beaver">+254 700 000 000</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-mindaro rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-savanna-dark" />
                </div>
                <div>
                  <div className="font-raleway font-semibold text-savanna-dark">Office</div>
                  <div className="font-raleway text-beaver">Riverside Drive, Nairobi, Kenya</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <button
                  key={index}
                  className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-mindaro transition-all duration-300 border border-mindaro/20"
                >
                  <Icon className="w-5 h-5 text-savanna-dark" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-mindaro/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-raleway font-semibold text-savanna-dark mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-mindaro/30 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-mindaro transition-all"
                />
              </div>
              
              <div>
                <label className="block font-raleway font-semibold text-savanna-dark mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-mindaro/30 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-mindaro transition-all"
                />
              </div>
              
              <div>
                <label className="block font-raleway font-semibold text-savanna-dark mb-2">
                  Travel Purpose
                </label>
                <select
                  name="travelType"
                  value={formData.travelType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-mindaro/30 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-mindaro transition-all"
                >
                  <option value="leisure">Leisure</option>
                  <option value="business">Business</option>
                  <option value="mixed">Combined Business & Leisure</option>
                  <option value="special">Special Interest</option>
                </select>
              </div>
              
              <div>
                <label className="block font-raleway font-semibold text-savanna-dark mb-2">
                  Your Travel Vision
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-mindaro/30 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-mindaro transition-all resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-mindaro text-savanna-dark px-8 py-4 rounded-2xl font-raleway font-semibold text-lg hover:bg-vanilla transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact