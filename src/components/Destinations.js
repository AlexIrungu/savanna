import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Star, ArrowRight, Camera, Heart, Search, Award, Compass, Sun, Eye, Info, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Destinations = ({ onDestinationSelect }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedDestination, setSelectedDestination] = useState(null);

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
      id: 1,
      name: "Maasai Mara",
      description: "Witness the great migration and abundant wildlife in Kenya's most famous reserve",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&h=400&fit=crop"
      ],
      duration: "3-5 Days",
      bestTime: "July - October",
      highlights: ["Great Migration", "Big Five", "Balloon Safaris", "Cultural Experiences"],
      rating: 4.9,
      reviews: 1247,
      price: "From $450/day",
      priceNumeric: 450,
      category: "Wildlife Safari",
      location: "Narok County, Kenya",
      activities: ["Game Drives", "Hot Air Balloon", "Photography", "Cultural Tours"],
      accommodation: ["Luxury Lodges", "Tented Camps", "Budget Options"],
      weatherInfo: "Dry season ideal for wildlife viewing",
      difficulty: "Easy",
      groupSize: "2-8 people",
      included: ["Park fees", "Game drives", "Professional guide", "Transportation"],
      featured: true
    },
    {
      id: 2,
      name: "Nairobi",
      description: "Kenya's vibrant capital and business hub with modern amenities and cultural attractions",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=600&h=400&fit=crop"
      ],
      duration: "1-3 Days",
      bestTime: "Year Round",
      highlights: ["Business District", "Museums", "Giraffe Centre", "Karen Blixen Museum"],
      rating: 4.5,
      reviews: 892,
      price: "From $200/day",
      priceNumeric: 200,
      category: "City Experience",
      location: "Nairobi, Kenya",
      activities: ["City Tours", "Museums", "Shopping", "Dining"],
      accommodation: ["5-Star Hotels", "Business Hotels", "Boutique Hotels"],
      weatherInfo: "Mild climate year-round",
      difficulty: "Easy",
      groupSize: "1-12 people",
      included: ["City tour", "Museum entries", "Local guide", "Transportation"]
    },
    {
      id: 3,
      name: "Diani Beach",
      description: "Pristine white sands and crystal clear waters on Kenya's stunning coastline",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
      ],
      duration: "3-7 Days",
      bestTime: "December - March",
      highlights: ["White Sand Beaches", "Water Sports", "Coral Reefs", "Sunset Dhow Cruises"],
      rating: 4.8,
      reviews: 1156,
      price: "From $300/day",
      priceNumeric: 300,
      category: "Beach Paradise",
      location: "Kwale County, Kenya",
      activities: ["Snorkeling", "Diving", "Kite Surfing", "Deep Sea Fishing"],
      accommodation: ["Beach Resorts", "Villas", "Boutique Hotels"],
      weatherInfo: "Tropical climate, warm waters",
      difficulty: "Easy",
      groupSize: "2-10 people",
      included: ["Beach access", "Water activities", "Boat transfers", "Equipment rental"],
      featured: true
    },
    {
      id: 4,
      name: "Mount Kenya",
      description: "Africa's second-highest peak with breathtaking landscapes and diverse ecosystems",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
      ],
      duration: "4-7 Days",
      bestTime: "January - March",
      highlights: ["Mountain Climbing", "Alpine Lakes", "Unique Flora", "Glacial Valleys"],
      rating: 4.7,
      reviews: 634,
      price: "From $350/day",
      priceNumeric: 350,
      category: "Adventure",
      location: "Central Kenya",
      activities: ["Trekking", "Rock Climbing", "Bird Watching", "Photography"],
      accommodation: ["Mountain Huts", "Camping", "Base Lodges"],
      weatherInfo: "Cool temperatures, possible rain",
      difficulty: "Moderate to Challenging",
      groupSize: "2-6 people",
      included: ["Climbing permits", "Guide", "Porter service", "Safety equipment"]
    },
    {
      id: 5,
      name: "Lamu Island",
      description: "UNESCO World Heritage site with rich Swahili culture and timeless charm",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
      ],
      duration: "2-4 Days",
      bestTime: "October - April",
      highlights: ["Historic Architecture", "Dhow Sailing", "Cultural Heritage", "Artisan Markets"],
      rating: 4.6,
      reviews: 567,
      price: "From $280/day",
      priceNumeric: 280,
      category: "Cultural Heritage",
      location: "Lamu County, Kenya",
      activities: ["Cultural Tours", "Dhow Sailing", "Snorkeling", "Historical Walks"],
      accommodation: ["Heritage Hotels", "Guesthouses", "Beachfront Lodges"],
      weatherInfo: "Warm coastal climate",
      difficulty: "Easy",
      groupSize: "2-8 people",
      included: ["Cultural guide", "Dhow trips", "Historical sites", "Local experiences"]
    },
    {
      id: 6,
      name: "Amboseli",
      description: "Iconic views of Mt. Kilimanjaro backdrop with spectacular elephant herds",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop"
      ],
      duration: "2-3 Days",
      bestTime: "June - October",
      highlights: ["Mt. Kilimanjaro Views", "Elephant Herds", "Maasai Culture", "Bird Watching"],
      rating: 4.8,
      reviews: 923,
      price: "From $400/day",
      priceNumeric: 400,
      category: "Wildlife Safari",
      location: "Kajiado County, Kenya",
      activities: ["Game Drives", "Photography", "Cultural Visits", "Nature Walks"],
      accommodation: ["Safari Lodges", "Luxury Camps", "Budget Camps"],
      weatherInfo: "Dry season best for Kilimanjaro views",
      difficulty: "Easy",
      groupSize: "2-8 people",
      included: ["Park fees", "Game drives", "Cultural visits", "Professional guide"],
      featured: true
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

  const categories = ['All', ...new Set(destinations.map(dest => dest.category))];

  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = activeCategory === 'All' || dest.category === activeCategory;
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedDestinations = filteredDestinations.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.rating - a.rating;
  });

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
    if (onDestinationSelect) {
      onDestinationSelect(destination);
    }
  };

  const handleExploreClick = (destination, e) => {
    e.stopPropagation();
    alert(`Exploring ${destination.name}! This would typically navigate to a detailed page or open a booking modal.`);
  };

  const handleViewDetails = (destination, e) => {
    e.stopPropagation();
    setSelectedDestination(destination);
  };

  return (
    <section id="destinations-section" className="py-20 bg-gradient-to-br from-eerie-black via-savanna-dark to-eerie-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-beaver/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-mindaro/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-ghost-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center space-x-3 bg-beaver/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-beaver/30">
            <Camera className="w-5 h-5 text-beaver" />
            <span className="text-ghost-white font-raleway font-medium tracking-wide">Kenya's Premier Destinations</span>
          </div>
          
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-ghost-white mb-6 leading-tight">
            Discover
            <span className="block text-transparent bg-gradient-to-r from-beaver via-mindaro to-beaver bg-clip-text">
              Paradise
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-beaver to-mindaro mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg text-ghost-white/80 max-w-2xl mx-auto font-raleway leading-relaxed">
            Embark on extraordinary journeys through Kenya's most spectacular destinations
          </p>
        </div>

        {/* Search and Filters */}
        <div className={`mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-beaver" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-ghost-white/95 border border-beaver/20 rounded-xl text-eerie-black placeholder-beaver/70 font-raleway focus:outline-none focus:ring-2 focus:ring-beaver/50 focus:border-beaver transition-all duration-300"
              />
            </div>
            
            <div className="flex bg-beaver/20 backdrop-blur-sm rounded-xl p-1 border border-beaver/30">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg font-raleway font-medium transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-beaver text-ghost-white shadow-lg' 
                    : 'text-ghost-white/80 hover:bg-beaver/20'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg font-raleway font-medium transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-beaver text-ghost-white shadow-lg' 
                    : 'text-ghost-white/80 hover:bg-beaver/20'
                }`}
              >
                List
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-lg font-raleway font-medium text-sm transition-all duration-300 border-2 ${
                  activeCategory === category
                    ? 'bg-beaver/30 border-beaver text-ghost-white'
                    : 'bg-beaver/10 border-beaver/20 text-ghost-white/80 hover:bg-beaver/20 hover:border-beaver/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Destinations Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-beaver/20 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 100}ms`,
                  aspectRatio: '4/5'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleDestinationClick(destination)}
              >
                {/* Featured Badge */}
                {destination.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-beaver to-mindaro text-eerie-black px-3 py-1 rounded-lg text-xs font-raleway font-bold z-20 flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Image */}
                <div className="absolute inset-0">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-beaver/20 via-transparent to-mindaro/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category */}
                <div className={`absolute ${destination.featured ? 'top-12' : 'top-4'} left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1 border border-beaver/30`}>
                  <span className="text-beaver font-raleway font-medium text-xs">{destination.category}</span>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(index);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-beaver/30 hover:scale-110 border border-beaver/30"
                >
                  <Heart className={`w-4 h-4 transition-all duration-300 ${favorites.has(index) ? 'text-red-500 fill-current' : 'text-ghost-white hover:text-red-400'}`} />
                </button>

                {/* Rating */}
                <div className="absolute top-16 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1 border border-beaver/30">
                  <Star className="w-3 h-3 text-mindaro fill-current" />
                  <span className="text-ghost-white font-raleway font-medium text-xs">{destination.rating}</span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="absolute top-[-8rem] right-0 bg-gradient-to-r from-beaver to-mindaro text-eerie-black px-3 py-2 rounded-l-lg font-raleway font-bold text-sm">
                    {destination.price}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-playfair text-2xl font-bold text-ghost-white group-hover:text-mindaro transition-colors duration-300">
                          {destination.name}
                        </h3>
                        <p className="text-ghost-white/70 text-sm font-raleway">{destination.location}</p>
                      </div>
                      <MapPin className="w-5 h-5 text-beaver mt-1" />
                    </div>
                    
                    <p className="text-ghost-white/90 font-raleway text-sm leading-relaxed line-clamp-2">
                      {destination.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-lg px-2 py-1">
                        <Calendar className="w-3 h-3 text-beaver" />
                        <span className="font-raleway text-ghost-white text-xs">{destination.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-lg px-2 py-1">
                        <Sun className="w-3 h-3 text-mindaro" />
                        <span className="font-raleway text-ghost-white text-xs">{destination.bestTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 2).map((highlight, hIndex) => (
                        <span key={hIndex} className="bg-beaver/20 rounded-md px-2 py-1 text-xs text-ghost-white font-raleway">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <Link 
  to="/details" 
  state={{ destination }}
  className="w-full bg-gradient-to-r from-beaver to-mindaro text-eerie-black py-3 rounded-lg font-raleway font-bold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
>
  <span>Explore Destination</span>
  <ArrowRight className="w-4 h-4" />
</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-6">
            {sortedDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`group bg-beaver/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-beaver/20 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-[1.01] ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
                onClick={() => handleDestinationClick(destination)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/3 h-48 md:h-64">
                    <img 
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {destination.featured && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-beaver to-mindaro text-eerie-black px-2 py-1 rounded-lg text-xs font-raleway font-bold flex items-center space-x-1">
                        <Award className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                      <Star className="w-3 h-3 text-mindaro fill-current" />
                      <span className="text-ghost-white font-raleway font-medium text-xs">{destination.rating}</span>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block bg-beaver/20 text-beaver px-3 py-1 rounded-lg text-sm font-raleway font-medium mb-2">
                          {destination.category}
                        </span>
                        <h3 className="font-playfair text-2xl font-bold text-ghost-white mb-1 group-hover:text-mindaro transition-colors">
                          {destination.name}
                        </h3>
                        <p className="text-ghost-white/70 text-sm font-raleway mb-2">{destination.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-raleway font-bold text-beaver mb-1">{destination.price}</div>
                        <div className="text-ghost-white/70 text-sm font-raleway">{destination.duration}</div>
                      </div>
                    </div>

                    <p className="text-ghost-white/90 font-raleway mb-4 leading-relaxed">
                      {destination.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <div className="text-center p-2 bg-beaver/10 rounded-lg">
                        <Calendar className="w-4 h-4 text-beaver mx-auto mb-1" />
                        <div className="text-ghost-white text-xs font-raleway">{destination.bestTime}</div>
                      </div>
                      <div className="text-center p-2 bg-beaver/10 rounded-lg">
                        <Users className="w-4 h-4 text-mindaro mx-auto mb-1" />
                        <div className="text-ghost-white text-xs font-raleway">{destination.groupSize}</div>
                      </div>
                      <div className="text-center p-2 bg-beaver/10 rounded-lg">
                        <Compass className="w-4 h-4 text-beaver mx-auto mb-1" />
                        <div className="text-ghost-white text-xs font-raleway">{destination.difficulty}</div>
                      </div>
                      <div className="text-center p-2 bg-beaver/10 rounded-lg">
                        <Star className="w-4 h-4 text-mindaro mx-auto mb-1" />
                        <div className="text-ghost-white text-xs font-raleway">{destination.reviews} Reviews</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.highlights.map((highlight, hIndex) => (
                        <span key={hIndex} className="bg-beaver/20 text-ghost-white px-2 py-1 rounded-md text-sm font-raleway">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <Link 
  to="/details" 
  state={{ destination }}
  className="bg-gradient-to-r from-beaver to-mindaro text-eerie-black px-6 py-2 rounded-lg font-raleway font-bold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
>
  <Eye className="w-4 h-4" />
  <span>View Details</span>
</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {sortedDestinations.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-beaver/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-beaver" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-ghost-white mb-2">No Destinations Found</h3>
            <p className="text-ghost-white/80 font-raleway max-w-md mx-auto mb-6">
              We couldn't find any destinations matching your search criteria. Try adjusting your filters.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
              className="bg-gradient-to-r from-beaver to-mindaro text-eerie-black px-6 py-3 rounded-lg font-raleway font-bold hover:shadow-lg transition-all duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Selected Destination Modal/Info */}
      {selectedDestination && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-eerie-black border border-beaver/30 rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-playfair font-bold text-ghost-white">{selectedDestination.name}</h3>
              <button 
                onClick={() => setSelectedDestination(null)}
                className="w-8 h-8 bg-beaver/20 rounded-lg flex items-center justify-center hover:bg-beaver/30 transition-colors"
              >
                <X className="w-4 h-4 text-ghost-white" />
              </button>
            </div>
            
            <div className="mb-4">
              <img 
                src={selectedDestination.image} 
                alt={selectedDestination.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-3">
              <p className="text-ghost-white/90 font-raleway">{selectedDestination.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-beaver" />
                  <span className="text-ghost-white text-sm font-raleway">{selectedDestination.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-mindaro" />
                  <span className="text-ghost-white text-sm font-raleway">{selectedDestination.rating} ({selectedDestination.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <button 
                  onClick={() => setSelectedDestination(null)}
                  className="bg-gradient-to-r from-beaver to-mindaro text-eerie-black px-6 py-2 rounded-lg font-raleway font-bold hover:shadow-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Destinations;