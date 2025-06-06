import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, MapPin, Phone, Mail, Calendar, Users, Award, Send } from 'lucide-react';

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
      image: "https://images.unsplash.com/photo-1549366021-9f761d040fb1?w=1920&h=1080&fit=crop"
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
    }, 5000);
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
                  <button className="bg-mindaro text-savanna-dark px-8 py-4 rounded-full font-raleway font-semibold text-lg hover:bg-vanilla transition-all duration-300 transform hover:scale-105 shadow-2xl">
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
                  index === currentSlide ? 'bg-mindaro' : 'bg-white/50'
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
              <div className="text-3xl font-bold text-mindaro">500+</div>
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
                  <div className="text-3xl font-bold text-mindaro mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mindaro mb-2">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mindaro mb-2">50+</div>
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
              <div className="absolute -bottom-6 -left-6 bg-mindaro p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-savanna-dark" />
                  <div>
                    <div className="font-bold text-savanna-dark">Award Winning</div>
                    <div className="text-sm text-savanna-dark/70">Travel Company</div>
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
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the Magic of Kenya
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Watch how we transform dreams into unforgettable African adventures, 
            one journey at a time.
          </p>
          <button className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full px-8 py-4 text-white">
            <Play className="w-6 h-6" />
            <span className="font-semibold">Watch Our Story</span>
          </button>
          <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-8 inline-block">
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-mindaro mb-2">Ready to Explore?</div>
              <div className="text-lg mb-6">Let us craft your perfect Kenyan adventure</div>
              <button className="bg-mindaro text-savanna-dark px-8 py-4 rounded-full font-semibold hover:bg-vanilla transition-all duration-300 transform hover:scale-105">
                Start Planning Today
              </button>
            </div>
          </div>
        </div>
      </section>

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
                    <Star key={i} className="w-5 h-5 text-mindaro fill-current" />
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
                className="bg-mindaro text-savanna-dark px-6 py-2 rounded-full font-semibold hover:bg-vanilla transition-colors duration-300 flex items-center space-x-2"
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

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-savanna-dark mb-6">
                Let's Plan Your Adventure
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ready to embark on your Kenyan journey? Our travel experts are here to craft 
                the perfect experience tailored just for you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-mindaro p-3 rounded-full">
                    <Phone className="w-6 h-6 text-savanna-dark" />
                  </div>
                  <div>
                    <div className="font-semibold text-savanna-dark">Call Us</div>
                    <div className="text-gray-600">+254 700 123 456</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-mindaro p-3 rounded-full">
                    <Mail className="w-6 h-6 text-savanna-dark" />
                  </div>
                  <div>
                    <div className="font-semibold text-savanna-dark">Email Us</div>
                    <div className="text-gray-600">hello@savannajourneys.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-mindaro p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-savanna-dark" />
                  </div>
                  <div>
                    <div className="font-semibold text-savanna-dark">Visit Us</div>
                    <div className="text-gray-600">Nairobi, Kenya</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-ghost-white rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-savanna-dark mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mindaro focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-savanna-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mindaro focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-savanna-dark mb-2">
                    Travel Dates
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mindaro focus:outline-none transition-colors"
                    placeholder="When would you like to travel?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-savanna-dark mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mindaro focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your dream Kenya experience..."
                  ></textarea>
                </div>
                
                <button
                  onClick={() => alert('Thank you for your message! We will contact you soon.')}
                  className="w-full bg-mindaro text-savanna-dark py-3 rounded-lg font-semibold hover:bg-vanilla transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;