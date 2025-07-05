import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Play, MapPin, Phone, Mail, Calendar, Users, Award, Send, ArrowRight, Eye, Camera, Mountain, Waves } from 'lucide-react';
import lions from '../assets/lions.mp4';
import HomeContactSection from './HomeContactSection';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [hoveredDestination, setHoveredDestination] = useState(null);
  
  const slides = [
    {
      title: "Premium Travel Advisory in Kenya",
      subtitle: "Tailored experiences for discerning travelers seeking the authentic heart of East Africa",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&h=1080&fit=crop"
    },
    {
      title: "Extraordinary Wildlife Encounters",
      subtitle: "Witness the majesty of Africa's most iconic species in their natural habitat",
      image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=1920&h=1080&fit=crop"
    },
    {
      title: "Coastal Paradise",
      subtitle: "Experience pristine beaches and the rich Swahili culture along Kenya's coast",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop"
    }
  ];

  const destinations = [
    {
      name: "Maasai Mara",
      description: "Experience the Great Migration and witness nature's most spectacular show with over 2 million wildebeest crossing the Mara River",
      image: "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=600&h=400&fit=crop",
      duration: "3-5 Days",
      highlights: ["Great Migration", "Big Five", "Maasai Culture"],
      price: "From $450/day",
      category: "Wildlife Safari",
      icon: <Eye className="w-5 h-5" />
    },
    {
      name: "Diani Beach",
      description: "Pristine white sands meet turquoise waters on Kenya's premier coastline, perfect for luxury beach getaways",
      image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpYW5pJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
      duration: "2-4 Days",
      highlights: ["White Sand Beaches", "Water Sports", "Coral Reefs"],
      price: "From $280/day",
      category: "Beach Paradise",
      icon: <Waves className="w-5 h-5" />
    },
    {
      name: "Mount Kenya",
      description: "Africa's second-highest peak offers breathtaking alpine adventures and diverse ecosystems",
      image: "https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXQlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D",
      duration: "4-7 Days",
      highlights: ["Mountain Climbing", "Alpine Lakes", "Unique Flora"],
      price: "From $380/day",
      category: "Mountain Adventure",
      icon: <Mountain className="w-5 h-5" />
    },
    {
      name: "Amboseli",
      description: "Iconic views of Kilimanjaro backdrop spectacular elephant herds in this UNESCO World Heritage site",
      image: "https://images.unsplash.com/photo-1511282491208-d9b80e3deaee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGFtYm9zZWxpfGVufDB8fDB8fHww",
      duration: "2-3 Days",
      highlights: ["Kilimanjaro Views", "Elephant Herds", "Maasai Villages"],
      price: "From $420/day",
      category: "Wildlife & Culture",
      icon: <Camera className="w-5 h-5" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "London, UK",
      rating: 5,
      text: "Absolutely incredible experience! The attention to detail and personalized service made our Kenya safari unforgettable. Every moment was perfectly orchestrated.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
    },
    {
      name: "James Rodriguez",
      location: "New York, USA",
      rating: 5,
      text: "From the moment we landed to our departure, everything was seamless. The guides were knowledgeable and the accommodations exceeded expectations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      name: "Emma Thompson",
      location: "Sydney, Australia",
      rating: 5,
      text: "A truly transformative journey. The cultural immersion and wildlife encounters were beyond what we could have imagined. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="relative h-screen">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="text-center text-white max-w-5xl">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
                    <Star className="w-4 h-4 text-vanilla mr-2" />
                    <span className="text-sm font-medium">Kenya's Premier Safari Experience</span>
                  </div>
                  <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-90 max-w-4xl mx-auto leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link 
                      to="/contact"
                      className="group bg-gradient-to-r from-beaver to-beaver/90 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-vanilla hover:to-vanilla hover:text-savanna-dark transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-2"
                    >
                      <span>Plan Your Journey</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link 
                      to="/destinations"
                      className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center space-x-2"
                    >
                      <span>Explore Destinations</span>
                      <Eye className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Slider Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-20">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="group p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ChevronLeft className="w-6 h-6 text-white transition-transform group-hover:-translate-x-1" />
          </button>
          
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-beaver rounded-full' 
                    : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/70'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="group p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ChevronRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Enhanced Floating Stats */}
        <div className="absolute bottom-20 right-8 z-20 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-white border border-white/20 shadow-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-vanilla mb-2">500+</div>
              <div className="text-sm opacity-80">Happy Travelers</div>
              <div className="w-12 h-1 bg-beaver rounded-full mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-24 bg-gradient-to-br from-ghost-white to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-beaver/10 text-beaver rounded-full px-4 py-2 text-sm font-semibold mb-4">
                <Award className="w-4 h-4 mr-2" />
                Award-Winning Excellence
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-savanna-dark leading-tight">
                Crafting Unforgettable 
                <span className="text-beaver"> African Adventures</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                For over a decade, Savanna Journeys has been Kenya's premier luxury travel advisory, 
                specializing in bespoke experiences that showcase the raw beauty and rich culture of East Africa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our expert team combines intimate local knowledge with world-class service standards, 
                ensuring every journey is perfectly tailored to exceed your expectations.
              </p>
              
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center group">
                  <div className="text-4xl font-bold text-beaver mb-2 group-hover:scale-110 transition-transform">10+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-beaver mb-2 group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-beaver mb-2 group-hover:scale-110 transition-transform">50+</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
              </div>

              <Link 
                to="/about"
                className="inline-flex items-center bg-beaver text-white px-8 py-4 rounded-full font-semibold hover:bg-savanna-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl space-x-2"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=700&fit=crop"
                  alt="Safari Guide"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-beaver to-savanna-dark p-6 rounded-2xl shadow-2xl border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Award Winning</div>
                    <div className="text-sm text-white/80">Travel Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Destinations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-beaver/10 text-beaver rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Discover Kenya
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-savanna-dark mb-6">
              Kenya's Most <span className="text-beaver">Extraordinary</span> Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From the legendary Maasai Mara to pristine coastal paradises, explore Kenya's most 
              extraordinary destinations with our expert-guided experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <div 
                key={index} 
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredDestination(index)}
                onMouseLeave={() => setHoveredDestination(null)}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img 
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                      {destination.icon}
                      <span className="text-xs font-semibold text-gray-700">{destination.category}</span>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-white" />
                      <span className="text-sm text-white font-medium">{destination.duration}</span>
                    </div>
                    
                    {/* Price Badge */}
                    <div className="absolute bottom-4 right-4 bg-beaver/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm text-white font-bold">{destination.price}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-savanna-dark mb-2 group-hover:text-beaver transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {destination.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Link 
                        to="/destinations"
                        className="text-beaver font-semibold text-sm hover:text-savanna-dark transition-colors flex items-center space-x-1"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      
                      <Link 
                        to="/contact"
                        className="bg-beaver/10 text-beaver px-4 py-2 rounded-full text-sm font-semibold hover:bg-beaver hover:text-white transition-all duration-300"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/destinations"
              className="inline-flex items-center bg-gradient-to-r from-beaver to-savanna-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-savanna-dark hover:to-beaver transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl space-x-2"
            >
              <span>Explore All Destinations</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Video Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={lions} type="video/mp4" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1920&h=1080&fit=crop)'
            }}
          ></div>
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Experience the Magic of 
                <span className="text-vanilla block md:inline"> Kenya</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Watch how we transform dreams into unforgettable African adventures, 
                crafting exclusive experiences that exist nowhere else on earth.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10 max-w-4xl mx-auto">
              <div className="text-center text-white backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-vanilla mb-2">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center text-white backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-vanilla mb-2">98%</div>
                <div className="text-sm text-white/80">Return Rate</div>
              </div>
              <div className="text-center text-white backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-vanilla mb-2">24</div>
                <div className="text-sm text-white/80">Exclusive Safaris</div>
              </div>
              <div className="text-center text-white backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-vanilla mb-2">4</div>
                <div className="text-sm text-white/80">Countries</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 inline-block border border-white/20 shadow-2xl max-w-3xl mx-auto">
              <div className="text-center text-white">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-vanilla fill-current" />
                    ))}
                  </div>
                  <span className="ml-3 text-vanilla font-semibold">East Africa's #1 Luxury Safari Specialist</span>
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                  Ready to Explore?
                </div>
                <div className="text-lg mb-8 text-white/90 leading-relaxed">
                  Let us craft your perfect luxury safari adventure with exclusive access to Kenya's hidden gems
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-vanilla to-mindaro text-black px-8 py-4 rounded-full font-bold text-lg hover:from-mindaro hover:to-vanilla transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    Start Planning Your Safari
                  </Link>
                  <Link 
                    to="/contact"
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
                  >
                    Free Consultation
                  </Link>
                </div>
                
                <p className="text-white/70 text-sm mt-6">
                  Free consultation • Personalized itinerary • Exclusive partnerships
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/70 text-xs uppercase tracking-wider mb-4">As Featured In</p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 opacity-60">
                <div className="text-white font-serif text-sm">The New York Times</div>
                <div className="text-white font-sans text-sm">Lonely Planet</div>
                <div className="text-white font-bold text-sm">FOOD & WINE</div>
                <div className="text-white font-sans text-sm">Condé Nast Traveler</div>
                <div className="text-white font-bold text-sm">CNN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-ghost-white to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-beaver/10 text-beaver rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <Users className="w-4 h-4 mr-2" />
              Client Stories
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-savanna-dark mb-6">
              Stories from Our <span className="text-beaver">Travelers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover why adventurers from around the world choose Savanna Journeys 
              for their African safari experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-beaver fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 ring-4 ring-beaver/10"
                  />
                  <div>
                    <div className="font-semibold text-savanna-dark text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-savanna-dark to-beaver">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Connected with Africa
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Subscribe to receive exclusive travel insights, special offers, and stories from the savanna
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-transparent outline-none text-white placeholder-white/60"
                  required
                />
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-vanilla to-mindaro text-black px-6 py-3 rounded-full font-semibold hover:from-mindaro hover:to-vanilla transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
            <p className="text-sm text-white/60 mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
            
            {/* Social Proof */}
            <div className="mt-10 pt-6 border-t border-white/20">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-vanilla fill-current" />
                  ))}
                </div>
                <span className="text-white/80 text-sm">
                  Trusted by 5,000+ safari enthusiasts worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <HomeContactSection />
    </div>
  );
};

export default Home;