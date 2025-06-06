import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Mail, Phone, Instagram, Facebook, Twitter, Linkedin, Menu, X, Mountain, Briefcase, Users, Leaf, MapIcon, Spa } from 'lucide-react';
// Services Component
const Services = () => {
  const services = [
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Luxury Safari Experiences",
      description: "Exclusive access to Kenya's most prestigious wildlife reserves with expert guides and personalized itineraries."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Travel Logistics", 
      description: "Comprehensive planning for corporate travelers including transport, accommodation, and networking opportunities."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cultural Immersion",
      description: "Authentic experiences with local communities, artisans, and culinary experts for a deeper understanding of Kenya."
    },
    {
      icon: <Spa className="w-8 h-8" />,
      title: "Wellness Retreats",
      description: "Rejuvenating escapes combining natural beauty, mindfulness, and traditional healing practices."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Conservation Experiences",
      description: "Participate in wildlife conservation initiatives and sustainable tourism projects across Kenya."
    },
    {
      icon: <MapIcon className="w-8 h-8" />,
      title: "Custom Itineraries",
      description: "Bespoke travel planning tailored to your specific interests, schedule, and preferences."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ghost-white via-vanilla/30 to-mindaro/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-savanna-dark mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-mindaro mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-mindaro/20"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-mindaro to-vanilla rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-savanna-dark">
                  {service.icon}
                </div>
              </div>
              <h3 className="font-raleway text-xl font-bold text-savanna-dark mb-4">
                {service.title}
              </h3>
              <p className="font-raleway text-beaver leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services