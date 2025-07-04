import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, MapPin, Phone, Mail, Calendar, Users, Award, Send } from 'lucide-react';
import lions from '../assets/lions.mp4'; // Assuming you have a video file in your assets folder
import HomeContactSection from './HomeContactSection'; // Import the contact section component

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  
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
      description: "Experience the Great Migration and witness nature's most spectacular show",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
      duration: "3-5 Days"
    },
    {
      name: "Diani Beach",
      description: "Pristine white sands meet turquoise waters on Kenya's premier coastline",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      duration: "2-4 Days"
    },
    {
      name: "Mount Kenya",
      description: "Africa's second-highest peak offers breathtaking alpine adventures",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      duration: "4-7 Days"
    },
    {
      name: "Amboseli",
      description: "Iconic views of Kilimanjaro backdrop spectacular elephant herds",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
      duration: "2-3 Days"
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
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <div className="font-raleway">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="relative h-screen">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="text-center text-white max-w-4xl">
                  <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="font-raleway text-xl md:text-2xl mb-8 opacity-90">
                    {slide.subtitle}
                  </p>
                  <button className="bg-beaver text-white px-8 py-4 rounded-full font-raleway font-semibold text-lg hover:bg-vanilla hover:text-savanna-dark transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    Plan Your Journey
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-beaver' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-20 right-8 z-20 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-beaver">500+</div>
              <div className="text-sm opacity-80">Happy Travelers</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-ghost-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-savanna-dark mb-6">
                Crafting Unforgettable African Adventures
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For over a decade, Savanna Journeys has been Kenya's premier luxury travel advisory, 
                specializing in bespoke experiences that showcase the raw beauty and rich culture of East Africa.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our expert team combines intimate local knowledge with world-class service standards, 
                ensuring every journey is perfectly tailored to exceed your expectations.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-beaver mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-beaver mb-2">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-beaver mb-2">50+</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=700&fit=crop"
                alt="Safari Guide"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-beaver p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-white" />
                  <div>
                    <div className="font-bold text-white">Award Winning</div>
                    <div className="text-sm text-white/70">Travel Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-savanna-dark mb-6">
              Discover Kenya's Wonders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From the legendary Maasai Mara to pristine coastal paradises, explore Kenya's most 
              extraordinary destinations with our expert-guided experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{destination.duration}</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-bold text-savanna-dark mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {destination.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Video Section */}
 <div className="font-raleway">
      {/* CTA Video Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={lions} type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1920&h=1080&fit=crop)'
            }}
          ></div>
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Heading */}
            <div className="mb-8">
              <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Experience the Magic of 
                <span className="text-yellow-400 block md:inline"> Kenya</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Watch how we transform dreams into unforgettable African adventures, 
                crafting exclusive experiences that exist nowhere else on earth.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10 max-w-4xl mx-auto">
              <div className="text-center text-white backdrop-blur-sm bg-white/10 rounded-xl p-4">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1">15+</div>
                <div className="text-xs md:text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center text-white backdrop-blur-sm bg-white/10 rounded-xl p-4">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1">98%</div>
                <div className="text-xs md:text-sm text-white/80">Return Rate</div>
              </div>
              <div className="text-center text-white backdrop-blur-sm bg-white/10 rounded-xl p-4">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1">24</div>
                <div className="text-xs md:text-sm text-white/80">Exclusive Safaris</div>
              </div>
              <div className="text-center text-white backdrop-blur-sm bg-white/10 rounded-xl p-4">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1">4</div>
                <div className="text-xs md:text-sm text-white/80">Countries</div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 inline-block border border-white/20 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center text-white">
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-yellow-400 font-semibold text-sm md:text-base">East Africa's #1 Luxury Safari Specialist</span>
                </div>
                
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 font-playfair">
                  Ready to Explore?
                </div>
                <div className="text-base md:text-lg mb-6 text-white/90 leading-relaxed">
                  Let us craft your perfect luxury safari adventure with exclusive access to Kenya's hidden gems
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-base md:text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    Start Planning Your Safari
                  </button>
                  <p className="text-white/70 text-xs md:text-sm">
                    Free consultation • Personalized itinerary • Exclusive partnerships
                  </p>
                </div>
              </div>
            </div>

            {/* Featured In Section */}
            <div className="mt-12 pt-6 border-t border-white/20">
              <p className="text-white/70 text-xs uppercase tracking-wider mb-4">As Featured In</p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-60">
                <div className="text-white font-serif text-sm md:text-base">The New York Times</div>
                <div className="text-white font-sans text-sm md:text-base">Lonely Planet</div>
                <div className="text-white font-bold text-sm md:text-base">FOOD & WINE</div>
                <div className="text-white font-sans text-sm md:text-base">Condé Nast Traveler</div>
                <div className="text-white font-bold text-sm md:text-base">FATHOM</div>
                <div className="text-white font-bold text-sm md:text-base">CNN</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-ghost-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-savanna-dark mb-6">
              Stories from Our Travelers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover why adventurers from around the world choose Savanna Journeys 
              for their African safari experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-beaver fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-savanna-dark">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-savanna-dark">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected with Africa
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Subscribe to receive exclusive travel insights, special offers, and stories from the savanna
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex bg-white rounded-full p-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-700"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="bg-beaver text-white px-6 py-2 rounded-full font-semibold hover:bg-vanilla hover:text-savanna-dark transition-colors duration-300 flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
          <p className="text-sm text-white/60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      
      <HomeContactSection /> {/* Contact section component */}

      
    </div>
  );
};

export default Home;