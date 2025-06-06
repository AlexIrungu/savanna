import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Star, ArrowRight, Camera, Heart } from 'lucide-react';

const Destinations = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('destinations-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const destinations = [
    {
      name: "Maasai Mara",
      description: "Witness the great migration and abundant wildlife in Kenya's most famous reserve",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
      duration: "3-5 Days",
      bestTime: "July - October",
      highlights: ["Great Migration", "Big Five", "Balloon Safaris"],
      rating: 4.9,
      price: "From $450/day",
      category: "Wildlife Safari"
    },
    {
      name: "Nairobi",
      description: "Kenya's vibrant capital and business hub with modern amenities and cultural attractions",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      duration: "1-3 Days",
      bestTime: "Year Round",
      highlights: ["Business District", "Museums", "Giraffe Centre"],
      rating: 4.5,
      price: "From $200/day",
      category: "City Experience"
    },
    {
      name: "Diani Beach",
      description: "Pristine white sands and crystal clear waters on Kenya's stunning coastline",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      duration: "3-7 Days",
      bestTime: "December - March",
      highlights: ["White Sand Beaches", "Water Sports", "Coral Reefs"],
      rating: 4.8,
      price: "From $300/day",
      category: "Beach Paradise"
    },
    {
      name: "Mount Kenya",
      description: "Africa's second-highest peak with breathtaking landscapes and diverse ecosystems",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      duration: "4-7 Days",
      bestTime: "January - March",
      highlights: ["Mountain Climbing", "Alpine Lakes", "Unique Flora"],
      rating: 4.7,
      price: "From $350/day",
      category: "Adventure"
    },
    {
      name: "Lamu Island",
      description: "UNESCO World Heritage site with rich Swahili culture and timeless charm",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      duration: "2-4 Days",
      bestTime: "October - April",
      highlights: ["Historic Architecture", "Dhow Sailing", "Cultural Heritage"],
      rating: 4.6,
      price: "From $280/day",
      category: "Cultural Heritage"
    },
    {
      name: "Amboseli",
      description: "Iconic views of Mt. Kilimanjaro backdrop with spectacular elephant herds",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
      duration: "2-3 Days",
      bestTime: "June - October",
      highlights: ["Mt. Kilimanjaro Views", "Elephant Herds", "Maasai Culture"],
      rating: 4.8,
      price: "From $400/day",
      category: "Wildlife Safari"
    }
  ];

  const toggleFavorite = (index) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(index)) {
      newFavorites.delete(index);
    } else {
      newFavorites.add(index);
    }
    setFavorites(newFavorites);
  };

  const categories = [...new Set(destinations.map(dest => dest.category))];

  return (
    <section id="destinations-section" className="py-20 bg-gradient-to-br from-savanna-dark via-eerie-black to-savanna-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-mindaro/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-vanilla/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-beaver/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-mindaro/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Camera className="w-5 h-5 text-mindaro" />
            <span className="text-mindaro font-medium">Explore Kenya's Finest</span>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-mindaro mb-6 leading-tight">
            Featured
            <span className="block text-transparent bg-gradient-to-r from-vanilla to-mindaro bg-clip-text">
              Destinations
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-mindaro to-vanilla mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover Kenya's most breathtaking destinations, each offering unique experiences 
            and unforgettable memories tailored to your travel dreams.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-mindaro/20 rounded-full text-sm text-gray-300 hover:bg-mindaro/20 hover:text-mindaro transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-mindaro/10 via-transparent to-vanilla/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Rating Badge */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <Star className="w-4 h-4 text-mindaro fill-current" />
                <span className="text-white text-sm font-medium">{destination.rating}</span>
              </div>

              {/* Favorite Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(index);
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-mindaro/20"
              >
                <Heart className={`w-5 h-5 transition-colors duration-300 ${favorites.has(index) ? 'text-red-500 fill-current' : 'text-white'}`} />
              </button>

              {/* Category Tag */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-mindaro/90 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <span className="text-savanna-dark text-xs font-medium">{destination.category}</span>
              </div>

              {/* Main Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-playfair text-2xl font-bold text-white">
                      {destination.name}
                    </h3>
                    <MapPin className="w-6 h-6 text-mindaro opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <p className="font-raleway text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Details Row */}
                  <div className="flex items-center justify-between mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <div className="flex items-center space-x-4 text-xs text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{destination.bestTime}</span>
                      </div>
                    </div>
                    <div className="text-mindaro font-semibold text-sm">
                      {destination.price}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    {destination.highlights.slice(0, 2).map((highlight, hIndex) => (
                      <span key={hIndex} className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-mindaro to-vanilla text-savanna-dark py-3 rounded-full font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400 transform translate-y-4 group-hover:translate-y-0 hover:shadow-xl flex items-center justify-center space-x-2">
                    <span>Explore Destination</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-mindaro/0 group-hover:border-mindaro/30 rounded-3xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-gray-300 mb-6 text-lg">
            Ready to explore these incredible destinations?
          </p>
          <button className="bg-gradient-to-r from-mindaro to-vanilla text-savanna-dark px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
            <span>Plan Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;