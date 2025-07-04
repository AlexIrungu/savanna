import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mountain, Briefcase, Users, Leaf, Map, Heart, ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 'luxury-safari',
      icon: Mountain,
      title: "Luxury Safari Experiences",
      description: "Exclusive access to Kenya's most prestigious wildlife reserves with expert guides and personalized itineraries.",
      color: "from-orange-400 to-red-500",
      hoverColor: "hover:from-orange-500 hover:to-red-600",
      bgGlow: "bg-orange-500/10",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 'business-travel',
      icon: Briefcase,
      title: "Business Travel Logistics", 
      description: "Comprehensive planning for corporate travelers including transport, accommodation, and networking opportunities.",
      color: "from-blue-400 to-indigo-500",
      hoverColor: "hover:from-blue-500 hover:to-indigo-600",
      bgGlow: "bg-blue-500/10",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 'cultural-immersion',
      icon: Users,
      title: "Cultural Immersion",
      description: "Authentic experiences with local communities, artisans, and culinary experts for a deeper understanding of Kenya.",
      color: "from-purple-400 to-pink-500",
      hoverColor: "hover:from-purple-500 hover:to-pink-600",
      bgGlow: "bg-purple-500/10",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 'wellness-retreats',
      icon: Heart,
      title: "Wellness Retreats",
      description: "Rejuvenating escapes combining natural beauty, mindfulness, and traditional healing practices.",
      color: "from-green-400 to-emerald-500",
      hoverColor: "hover:from-green-500 hover:to-emerald-600",
      bgGlow: "bg-green-500/10",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 'conservation-experiences',
      icon: Leaf,
      title: "Conservation Experiences",
      description: "Participate in wildlife conservation initiatives and sustainable tourism projects across Kenya.",
      color: "from-teal-400 to-cyan-500",
      hoverColor: "hover:from-teal-500 hover:to-cyan-600",
      bgGlow: "bg-teal-500/10",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 'custom-itineraries',
      icon: Map,
      title: "Custom Itineraries",
      description: "Bespoke travel planning tailored to your specific interests, schedule, and preferences.",
      color: "from-amber-400 to-yellow-500",
      hoverColor: "hover:from-amber-500 hover:to-yellow-600",
      bgGlow: "bg-amber-500/10",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const handleLearnMore = (service) => {
    navigate(`/services/booking?service=${service.id}`);
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-mindaro/5 via-transparent to-vanilla/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-beaver/5 via-transparent to-mindaro/5"></div>
        
        {/* Floating orbs with better positioning */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-mindaro/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-40 h-40 bg-vanilla/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-beaver/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Enhanced Header Section */}
        <div className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-mindaro/20 to-vanilla/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-savanna-dark mb-8 border border-mindaro/20 shadow-sm">
            <Sparkles className="w-4 h-4 text-mindaro animate-pulse" />
            <span className="font-raleway">What We Offer</span>
          </div>
          
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-savanna-dark via-beaver to-savanna-dark bg-clip-text text-transparent mb-6 leading-tight">
            Our Services
          </h2>
          
          <p className="font-raleway text-lg sm:text-xl text-beaver max-w-3xl mx-auto leading-relaxed px-4">
            Crafting extraordinary experiences that blend luxury, authenticity, and sustainability for the modern traveler
          </p>
          
          {/* Enhanced animated underline */}
          <div className="flex justify-center mt-8">
            <div className="relative w-32 h-1 bg-gradient-to-r from-mindaro via-vanilla to-mindaro rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mindaro to-transparent animate-ping"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Enhanced Card with better hover effects */}
                <div className="relative group h-[420px] bg-white rounded-3xl overflow-hidden border border-gray-100/80 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-3 hover:scale-[1.02] hover:border-white">
                  
                  {/* Background Image with better overlay */}
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Multi-layered overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/95 transition-all duration-500"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-15 group-hover:opacity-25 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Enhanced Icon with glow effect */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${service.bgGlow} group-hover:shadow-2xl`}>
                      <IconComponent className={`w-8 h-8 bg-gradient-to-br ${service.color} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110`} />
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                    </div>
                    
                    {/* Enhanced floating particles */}
                    <div className={`absolute top-0 right-0 w-3 h-3 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping`}></div>
                    <div className={`absolute -top-1 -right-1 w-2 h-2 bg-mindaro rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 animate-bounce`}></div>
                  </div>
                  
                  {/* Enhanced Content Section */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="relative">
                      <h3 className="font-raleway text-2xl lg:text-3xl font-bold text-white mb-4 drop-shadow-lg group-hover:text-mindaro transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="font-raleway text-gray-200 text-base leading-relaxed mb-6 drop-shadow-md group-hover:text-white transition-colors duration-300">
                        {service.description}
                      </p>
                      
                      {/* Enhanced CTA Section */}
                      <div className="flex items-center justify-between">
                        <button 
                          onClick={() => handleLearnMore(service)}
                          className="group/btn flex items-center gap-2 text-mindaro/90 hover:text-mindaro font-medium transition-all duration-300 hover:gap-3"
                        >
                          <span className="text-sm lg:text-base">Learn More</span>
                          <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                            hoveredCard === index ? 'translate-x-2 scale-110' : ''
                          }`} />
                        </button>
                        
                        {/* Enhanced service number */}
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-0.5 bg-mindaro/60 group-hover:bg-mindaro transition-colors duration-300"></div>
                          <span className="text-white/60 group-hover:text-mindaro font-mono text-sm font-medium transition-colors duration-300">
                            0{index + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced decorative elements */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-white/5 to-mindaro/10 rounded-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12"></div>
                  
                  {/* Improved shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  {/* Border glow on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`}></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced Bottom CTA Section */}
        <div className={`text-center mt-16 lg:mt-24 transition-all duration-1000 delay-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-mindaro/15 via-vanilla/10 to-mindaro/15 backdrop-blur-sm px-8 py-6 rounded-3xl border border-mindaro/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-savanna-dark text-center sm:text-left">
              <span className="font-raleway text-lg lg:text-xl font-semibold block">Ready to start your journey?</span>
              <span className="font-raleway text-beaver text-sm mt-1">Let's create unforgettable experiences together</span>
            </div>
            <button 
              onClick={() => navigate('/services/booking')}
              className="group bg-gradient-to-r from-mindaro to-vanilla hover:from-mindaro/90 hover:to-vanilla/90 text-savanna-dark px-8 py-4 rounded-2xl font-raleway font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-fit"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;