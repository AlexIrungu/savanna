import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Award, Heart, ChevronRight, Star, Globe, Camera, Shield, Mountain, Waves, TreePine } from 'lucide-react';
import manor from '../assets/giraffemanor.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { 
      number: "10+", 
      label: "Years Experience", 
      icon: Award,
      description: "Decade of expertise"
    },
    { 
      number: "1000+", 
      label: "Adventures Crafted", 
      icon: Camera,
      description: "Unforgettable journeys"
    },
    { 
      number: "24/7", 
      label: "Travel Support", 
      icon: Shield,
      description: "Always here for you"
    },
    { 
      number: "100%", 
      label: "Bespoke Service", 
      icon: Heart,
      description: "Tailored to you"
    }
  ];

  const services = [
    {
      icon: TreePine,
      title: "Safari Adventures",
      subtitle: "Maasai Mara & Beyond",
      description: "Witness the Great Migration, spot the Big Five, and experience Kenya's world-renowned national parks with our expert guides.",
      features: ["Maasai Mara Wildlife Safaris", "Amboseli Elephant Viewing", "Tsavo National Parks", "Private Game Drives"]
    },
    {
      icon: Waves,
      title: "Beach Escapes",
      subtitle: "Coastal Paradise",
      description: "Relax on pristine white sand beaches, enjoy water sports, and discover the Swahili culture along Kenya's stunning coastline.",
      features: ["Diani Beach Retreats", "Malindi Cultural Tours", "Watamu Marine Parks", "Lamu Island Adventures"]
    },
    {
      icon: Mountain,
      title: "Mountain Expeditions",
      subtitle: "Conquer New Heights",
      description: "Challenge yourself with Mount Kenya climbing expeditions and explore the breathtaking highlands of East Africa.",
      features: ["Mount Kenya Climbing", "Aberdare Ranges", "Hell's Gate Adventures", "Rift Valley Escapes"]
    },
    {
      icon: Globe,
      title: "Cultural Experiences",
      subtitle: "Rich Heritage",
      description: "Immerse yourself in Kenya's vibrant culture, meet local communities, and discover authentic traditions and customs.",
      features: ["Maasai Village Visits", "Samburu Cultural Tours", "Nairobi City Experiences", "Traditional Craft Workshops"]
    }
  ];

  const expertise = [
    {
      icon: Star,
      title: "Certified Local Experts",
      description: "Our team of certified travel professionals brings deep knowledge of Kenya's hidden gems and popular destinations."
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate with confidence in multiple languages, ensuring seamless travel experiences across East Africa."
    },
    {
      icon: Shield,
      title: "Safe & Responsible Travel",
      description: "We prioritize your safety while promoting sustainable tourism practices that benefit local communities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ghost-white via-vanilla/10 to-mindaro/5 font-raleway">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mindaro/5 via-transparent to-vanilla/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`space-y-8 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'} transition-all duration-1000`}>
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-mindaro/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Heart className="w-5 h-5 text-beaver" />
                  <span className="text-beaver font-semibold">Kenya's Premier Travel Agency</span>
                </div>
                
                <h1 className="font-playfair text-5xl md:text-6xl font-bold text-eerie-black leading-tight">
                  Crafting Unforgettable
                  <span className="block bg-gradient-to-r from-beaver to-mindaro bg-clip-text text-transparent">
                    African Adventures
                  </span>
                </h1>
                
                <p className="text-xl text-beaver leading-relaxed max-w-2xl">
                  We specialize in creating bespoke safari adventures, beach escapes, and cultural experiences across East Africa. From Maasai Mara wildlife safaris to Diani Beach retreats and Mount Kenya expeditions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="group bg-gradient-to-r from-mindaro to-vanilla text-eerie-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Adventure</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link 
                  to="/story"
                  className="group bg-white/70 backdrop-blur-sm border-2 border-mindaro/30 text-eerie-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:border-mindaro transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Our Story</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className={`relative ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} transition-all duration-1000 delay-300`}>
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                  <img 
                    src={manor}
                    alt="Kenya Safari Adventure"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eerie-black/30 via-transparent to-transparent"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 bg-mindaro/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <TreePine className="w-6 h-6 text-eerie-black" />
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-eerie-black">Kenya Awaits</div>
                        <div className="text-sm text-beaver">Your Adventure Starts Here</div>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-mindaro to-vanilla rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-vanilla to-ghost-white rounded-full opacity-25 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-mindaro/20 text-center hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <IconComponent className="w-8 h-8 text-mindaro mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-eerie-black mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-beaver mb-1">{stat.label}</div>
                  <div className="text-xs text-beaver/70">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-eerie-black mb-6">
              Our Signature Experiences
            </h2>
            <p className="text-xl text-beaver max-w-3xl mx-auto">
              From wildlife safaris to beach escapes, we handle every detail of your Kenyan adventure with personalized service and local expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Navigation */}
            <div className="space-y-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                      activeService === index 
                        ? 'bg-gradient-to-r from-mindaro/20 to-vanilla/20 border-2 border-mindaro/30' 
                        : 'bg-white/50 hover:bg-white/70 border border-mindaro/10'
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl transition-colors duration-300 ${
                        activeService === index ? 'bg-mindaro/30' : 'bg-mindaro/10 group-hover:bg-mindaro/20'
                      }`}>
                        <IconComponent className="w-6 h-6 text-beaver" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-eerie-black text-lg mb-1">{service.title}</h3>
                        <p className="text-beaver text-sm font-medium mb-2">{service.subtitle}</p>
                        <p className="text-beaver/80 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Service Details */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-mindaro/20">
              <div className="mb-6">
                <h3 className="font-playfair text-3xl font-bold text-eerie-black mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-beaver text-lg leading-relaxed">
                  {services[activeService].description}
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-eerie-black text-lg">What's Included:</h4>
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-mindaro rounded-full"></div>
                    <span className="text-beaver">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-mindaro/5 via-vanilla/5 to-ghost-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-eerie-black mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-beaver max-w-2xl mx-auto">
              Our certified local travel experts combine deep knowledge with personalized service to create your perfect East African adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-mindaro/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="bg-mindaro/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-mindaro/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-beaver" />
                    </div>
                    <h3 className="font-semibold text-eerie-black text-xl mb-4">{item.title}</h3>
                    <p className="text-beaver leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-mindaro/10 to-vanilla/10 backdrop-blur-sm rounded-3xl p-12 border border-mindaro/20">
            <h2 className="font-playfair text-4xl font-bold text-eerie-black mb-6">
              Ready to Explore Kenya?
            </h2>
            <p className="text-xl text-beaver mb-8 max-w-2xl mx-auto">
              Let our certified local experts craft your perfect East African adventure. From breathtaking landscapes to diverse wildlife and rich heritage.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-mindaro to-vanilla text-eerie-black px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Plan Your Adventure</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;