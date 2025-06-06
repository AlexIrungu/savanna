import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Users, Award, Heart, ChevronRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { 
      number: "10+", 
      label: "Years Experience", 
      icon: Award,
      color: "from-mindaro to-vanilla",
      description: "Decade of crafting perfect journeys"
    },
    { 
      number: "500+", 
      label: "Happy Clients", 
      icon: Users,
      color: "from-vanilla to-mindaro",
      description: "Travelers who became friends"
    },
    { 
      number: "50+", 
      label: "Destinations", 
      icon: MapPin,
      color: "from-mindaro to-ghost-white",
      description: "Hidden gems across Kenya"
    }
  ];

  const features = [
    "Personalized itinerary planning",
    "24/7 local support during travels",
    "Exclusive access to hidden gems",
    "Cultural immersion experiences",
    "Sustainable tourism practices",
    "Business travel coordination"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-vanilla/30 via-ghost-white to-mindaro/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-mindaro/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-vanilla/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-beaver/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-mindaro/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <Heart className="w-4 h-4 text-savanna-dark" />
                <span className="text-sm font-medium text-savanna-dark">Passionate Travel Expert</span>
              </div>
              
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-savanna-dark mb-6 leading-tight">
                Your Personal Travel
                <span className="block text-transparent bg-gradient-to-r from-beaver to-savanna-dark bg-clip-text">
                  Concierge
                </span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-mindaro to-vanilla rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 font-raleway text-beaver text-lg leading-relaxed mb-8">
              <p className="transform transition-all duration-700 delay-300">
                As a locally-based travel advisor with extensive knowledge of Kenya's diverse landscapes, cultures, and business environment, I provide <span className="font-semibold text-savanna-dark">personalized service</span> that goes beyond typical tourism.
              </p>
              <p className="transform transition-all duration-700 delay-500">
                Whether you're seeking the thrill of wildlife encounters, meaningful cultural exchanges, or efficient business travel solutions, my expertise ensures a <span className="font-semibold text-savanna-dark">seamless, authentic experience</span>.
              </p>
              <p className="transform transition-all duration-700 delay-700">
                With deep connections throughout the country and a commitment to sustainable, responsible tourism, I create journeys that <span className="font-semibold text-savanna-dark">benefit both travelers and local communities</span>.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 text-sm text-beaver transform transition-all duration-500 hover:text-savanna-dark"
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-mindaro rounded-full flex-shrink-0"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-mindaro/20 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-white/90 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${1000 + index * 200}ms` }}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-savanna-dark group-hover:scale-110 transition-transform duration-300">
                          {stat.number}
                        </div>
                        <IconComponent className="w-5 h-5 text-mindaro group-hover:text-savanna-dark transition-colors duration-300" />
                      </div>
                      <div className="text-xs text-beaver group-hover:text-savanna-dark transition-colors duration-300">
                        {stat.label}
                      </div>
                      {hoveredStat === index && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-savanna-dark text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 animate-pulse">
                          {stat.description}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-mindaro to-vanilla text-savanna-dark px-8 py-4 rounded-full font-raleway font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Let's Plan Together</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white/50 backdrop-blur-sm border-2 border-mindaro/30 text-savanna-dark px-8 py-4 rounded-full font-raleway font-semibold text-lg hover:bg-white/80 hover:border-mindaro transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Get to Know Me</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative group">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-beaver/20 to-savanna-dark/20 backdrop-blur-sm border border-mindaro/20 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                  alt="Travel Advisor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-savanna-dark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating info card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-semibold text-savanna-dark">Available Now</div>
                      <div className="text-sm text-beaver">Ready to plan your journey</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-mindaro to-vanilla rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-r from-vanilla to-ghost-white rounded-full opacity-25 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Floating badges */}
              <div className="absolute top-6 right-6 bg-mindaro/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <Award className="w-6 h-6 text-savanna-dark" />
              </div>
              
              <div className="absolute top-20 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                <div className="text-center">
                  <div className="text-lg font-bold text-savanna-dark">Kenya</div>
                  <div className="text-xs text-beaver">Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;