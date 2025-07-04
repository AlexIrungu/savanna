import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Heart, 
  Camera, 
  Share2,
  Clock,
  Sun,
  Compass,
  Award,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  ChevronLeft,
  ChevronRight,
  Info,
  Activity,
  Home,
  Thermometer,
  DollarSign,
  MessageCircle,
  Shield,
  Navigation,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingModal from './BookingModal';
import FAQSection from './FaqSection';

const DestinationDetails = ({ destination, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();
//   const { state } = useLocation();
//   const destination = state?.destination;
  
const [bookingData, setBookingData] = useState({
  name: '',
  email: '',
  phone: '',
  guests: 2,
  date: '',
  package: null,
  message: ''
});
  
  // Use this for your back button
  const handleBack = () => {
    navigate(-1); // Goes back to previous page
  };

  // Sample destination data - in real app this would come from props or API
  const destinationData = destination || {
    id: 1,
    name: "Maasai Mara",
    description: "Witness the great migration and abundant wildlife in Kenya's most famous reserve. The Maasai Mara National Reserve offers unparalleled wildlife viewing opportunities with its vast savannas, diverse ecosystems, and rich cultural heritage.",
    detailedDescription: "The Maasai Mara National Reserve, located in Narok County, Kenya, is one of Africa's most celebrated wildlife destinations. Spanning over 1,510 square kilometers, this remarkable ecosystem is part of the greater Mara-Serengeti ecosystem and serves as the northern extension of Tanzania's Serengeti National Park. The reserve is renowned for hosting the Great Migration, one of nature's most spectacular events, where over 1.5 million wildebeest, zebras, and gazelles traverse the plains in search of fresh pastures.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    duration: "3-5 Days",
    bestTime: "July - October",
    highlights: ["Great Migration", "Big Five", "Balloon Safaris", "Cultural Experiences", "Photography Tours"],
    rating: 4.9,
    reviews: 1247,
    price: "From $450/day",
    priceNumeric: 450,
    category: "Wildlife Safari",
    location: "Narok County, Kenya",
    coordinates: { lat: -1.4061, lng: 35.0078 },
    activities: [
      {
        name: "Game Drives",
        description: "Professional guided game drives in 4x4 vehicles",
        duration: "3-4 hours",
        price: "$80"
      },
      {
        name: "Hot Air Balloon Safari",
        description: "Aerial view of the savanna at sunrise",
        duration: "3 hours",
        price: "$450"
      },
      {
        name: "Cultural Village Visit",
        description: "Experience authentic Maasai culture",
        duration: "2-3 hours",
        price: "$60"
      },
      {
        name: "Photography Tours",
        description: "Specialized wildlife photography sessions",
        duration: "Full day",
        price: "$200"
      }
    ],
    accommodation: [
      {
        type: "Luxury Safari Lodge",
        name: "Mara Serena Safari Lodge",
        price: "$650/night",
        rating: 4.8,
        amenities: ["Pool", "Spa", "Restaurant", "WiFi"]
      },
      {
        type: "Tented Camp",
        name: "Governors' Camp",
        price: "$480/night",
        rating: 4.7,
        amenities: ["Restaurant", "Bar", "Game Viewing", "WiFi"]
      },
      {
        type: "Budget Camp",
        name: "Mara River Camp",
        price: "$120/night",
        rating: 4.2,
        amenities: ["Restaurant", "Campfire", "Shared Facilities"]
      }
    ],
    weatherInfo: {
      temperature: "18-28°C",
      rainfall: "Low during dry season",
      season: "Dry season ideal for wildlife viewing",
      clothing: "Light layers, safari colors recommended"
    },
    difficulty: "Easy",
    groupSize: "2-8 people",
    included: ["Park fees", "Game drives", "Professional guide", "Transportation", "Meals"],
    notIncluded: ["International flights", "Visa fees", "Personal expenses", "Tips"],
    featured: true,
    packages: [
      {
        id: 1,
        name: "Classic Safari Package",
        duration: "3 Days, 2 Nights",
        price: 1350,
        includes: ["Accommodation", "All meals", "Game drives", "Park fees", "Guide"],
        description: "Perfect introduction to Maasai Mara with essential experiences"
      },
      {
        id: 2,
        name: "Premium Safari Experience",
        duration: "5 Days, 4 Nights",
        price: 2800,
        includes: ["Luxury accommodation", "All meals", "Game drives", "Balloon safari", "Cultural visit", "Guide"],
        description: "Comprehensive luxury safari with all premium experiences",
        popular: true
      },
      {
        id: 3,
        name: "Photography Safari",
        duration: "4 Days, 3 Nights",
        price: 2200,
        includes: ["Photography guide", "Specialized vehicle", "All meals", "Equipment", "Park fees"],
        description: "Specialized safari for photography enthusiasts"
      }
    ],
    FAQ: [
      {
        question: "What is the best time to visit for the Great Migration?",
        answer: "The Great Migration typically occurs from July to October, with the dramatic river crossings happening between July and September."
      },
      {
        question: "What should I pack for a safari?",
        answer: "Pack neutral-colored clothing, sun protection, binoculars, camera equipment, and comfortable walking shoes. Avoid bright colors and camouflage patterns."
      },
      {
        question: "Is it safe to visit Maasai Mara?",
        answer: "Yes, Maasai Mara is very safe for tourists. All game drives are conducted with experienced guides, and lodges maintain high safety standards."
      }
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === destinationData.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? destinationData.gallery.length - 1 : prev - 1
    );
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'activities', label: 'Activities', icon: Activity },
    { id: 'accommodation', label: 'Stay', icon: Home },
    { id: 'packages', label: 'Packages', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-eerie-black via-savanna-dark to-eerie-black">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-eerie-black/95 backdrop-blur-sm border-b border-beaver/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
             <button 
              onClick={handleBack}
              className="flex items-center space-x-2 text-ghost-white hover:text-mindaro transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-raleway font-medium">Back to Destinations</span>
            </button>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="w-10 h-10 bg-beaver/20 rounded-lg flex items-center justify-center hover:bg-beaver/30 transition-colors"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-ghost-white'}`} />
              </button>
              <button className="w-10 h-10 bg-beaver/20 rounded-lg flex items-center justify-center hover:bg-beaver/30 transition-colors">
                <Share2 className="w-5 h-5 text-ghost-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={destinationData.gallery[currentImageIndex]}
            alt={destinationData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Image Navigation */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-ghost-white" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-ghost-white" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {destinationData.gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-mindaro' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  {destinationData.featured && (
                    <div className="bg-gradient-to-r from-beaver to-mindaro text-eerie-black px-3 py-1 rounded-lg text-sm font-raleway font-bold flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>Featured</span>
                    </div>
                  )}
                  <div className="bg-beaver/20 backdrop-blur-sm text-beaver px-3 py-1 rounded-lg text-sm font-raleway font-medium border border-beaver/30">
                    {destinationData.category}
                  </div>
                </div>
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-ghost-white mb-2">
                  {destinationData.name}
                </h1>
                <div className="flex items-center space-x-2 text-ghost-white/80">
                  <MapPin className="w-5 h-5 text-beaver" />
                  <span className="font-raleway">{destinationData.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-raleway font-bold text-mindaro mb-1">
                  {destinationData.price}
                </div>
                <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                  <Star className="w-4 h-4 text-mindaro fill-current" />
                  <span className="text-ghost-white font-raleway font-medium">
                    {destinationData.rating} ({destinationData.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-beaver/10 border-b border-beaver/20">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Calendar className="w-6 h-6 text-beaver mx-auto mb-2" />
              <div className="text-ghost-white font-raleway font-bold">{destinationData.duration}</div>
              <div className="text-ghost-white/70 text-sm font-raleway">Duration</div>
            </div>
            <div className="text-center">
              <Sun className="w-6 h-6 text-mindaro mx-auto mb-2" />
              <div className="text-ghost-white font-raleway font-bold">{destinationData.bestTime}</div>
              <div className="text-ghost-white/70 text-sm font-raleway">Best Time</div>
            </div>
            <div className="text-center">
              <Users className="w-6 h-6 text-beaver mx-auto mb-2" />
              <div className="text-ghost-white font-raleway font-bold">{destinationData.groupSize}</div>
              <div className="text-ghost-white/70 text-sm font-raleway">Group Size</div>
            </div>
            <div className="text-center">
              <Compass className="w-6 h-6 text-mindaro mx-auto mb-2" />
              <div className="text-ghost-white font-raleway font-bold">{destinationData.difficulty}</div>
              <div className="text-ghost-white/70 text-sm font-raleway">Difficulty</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Navigation Tabs */}
            <div className="flex space-x-1 bg-beaver/10 rounded-xl p-1 border border-beaver/20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-raleway font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-beaver text-ghost-white shadow-lg'
                      : 'text-ghost-white/80 hover:bg-beaver/20'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="bg-beaver/5 rounded-2xl p-8 border border-beaver/20">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-ghost-white mb-4">About This Destination</h3>
                    <p className="text-ghost-white/90 font-raleway leading-relaxed mb-4">
                      {destinationData.description}
                    </p>
                    <p className="text-ghost-white/80 font-raleway leading-relaxed">
                      {destinationData.detailedDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-ghost-white mb-4">Highlights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {destinationData.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-3 bg-beaver/10 rounded-lg p-3">
                          <CheckCircle className="w-5 h-5 text-mindaro" />
                          <span className="text-ghost-white font-raleway">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-playfair text-xl font-bold text-ghost-white mb-4">What's Included</h4>
                      <ul className="space-y-2">
                        {destinationData.included.map((item, index) => (
                          <li key={index} className="flex items-center space-x-2 text-ghost-white/80 font-raleway">
                            <CheckCircle className="w-4 h-4 text-mindaro" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-playfair text-xl font-bold text-ghost-white mb-4">Not Included</h4>
                      <ul className="space-y-2">
                        {destinationData.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-center space-x-2 text-ghost-white/60 font-raleway">
                            <div className="w-4 h-4 border-2 border-ghost-white/40 rounded-full"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'activities' && (
                <div className="space-y-6">
                  <h3 className="font-playfair text-2xl font-bold text-ghost-white mb-6">Available Activities</h3>
                  <div className="grid gap-6">
                    {destinationData.activities.map((activity, index) => (
                      <div key={index} className="bg-beaver/10 rounded-xl p-6 border border-beaver/20">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-playfair text-xl font-bold text-ghost-white mb-2">{activity.name}</h4>
                            <p className="text-ghost-white/80 font-raleway">{activity.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-raleway font-bold text-mindaro">{activity.price}</div>
                            <div className="text-ghost-white/70 text-sm font-raleway">{activity.duration}</div>
                          </div>
                        </div>
                        <button className="bg-gradient-to-r from-beaver to-mindaro text-eerie-black px-4 py-2 rounded-lg font-raleway font-bold hover:shadow-lg transition-all duration-300">
                          Book Activity
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'accommodation' && (
                <div className="space-y-6">
                  <h3 className="font-playfair text-2xl font-bold text-ghost-white mb-6">Where to Stay</h3>
                  <div className="grid gap-6">
                    {destinationData.accommodation.map((place, index) => (
                      <div key={index} className="bg-beaver/10 rounded-xl p-6 border border-beaver/20">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="text-beaver font-raleway font-medium text-sm mb-1">{place.type}</div>
                            <h4 className="font-playfair text-xl font-bold text-ghost-white mb-2">{place.name}</h4>
                            <div className="flex items-center space-x-2 mb-3">
                              <Star className="w-4 h-4 text-mindaro fill-current" />
                              <span className="text-ghost-white font-raleway">{place.rating}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-raleway font-bold text-mindaro">{place.price}</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {place.amenities.map((amenity, aIndex) => (
                            <span key={aIndex} className="bg-beaver/20 text-ghost-white px-2 py-1 rounded text-sm font-raleway">
                              {amenity}
                            </span>
                          ))}
                        </div>
                        <button className="bg-gradient-to-r from-beaver to-mindaro text-eerie-black px-4 py-2 rounded-lg font-raleway font-bold hover:shadow-lg transition-all duration-300">
                          Check Availability
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'packages' && (
                <div className="space-y-6">
                  <h3 className="font-playfair text-2xl font-bold text-ghost-white mb-6">Safari Packages</h3>
                  <div className="grid gap-6">
                    {destinationData.packages.map((pkg, index) => (
                      <div key={pkg.id} className={`rounded-xl p-6 border-2 transition-all duration-300 ${
                        pkg.popular 
                          ? 'bg-gradient-to-br from-beaver/20 to-mindaro/10 border-beaver' 
                          : 'bg-beaver/10 border-beaver/20'
                      }`}>
                        {pkg.popular && (
                          <div className="bg-gradient-to-r from-beaver to-mindaro text-eerie-black px-3 py-1 rounded-lg text-sm font-raleway font-bold mb-4 w-fit">
                            Most Popular
                          </div>
                        )}
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-playfair text-xl font-bold text-ghost-white mb-2">{pkg.name}</h4>
                            <p className="text-ghost-white/80 font-raleway mb-3">{pkg.description}</p>
                            <div className="text-ghost-white/70 font-raleway text-sm">{pkg.duration}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-raleway font-bold text-mindaro">${pkg.price}</div>
                            <div className="text-ghost-white/70 text-sm font-raleway">per person</div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h5 className="font-raleway font-bold text-ghost-white mb-2">Includes:</h5>
                          <div className="flex flex-wrap gap-2">
                            {pkg.includes.map((item, iIndex) => (
                              <span key={iIndex} className="bg-beaver/20 text-ghost-white px-2 py-1 rounded text-sm font-raleway">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button 
                          onClick={() => setSelectedPackage(pkg)}
                          className="w-full bg-gradient-to-r from-beaver to-mindaro text-eerie-black py-3 rounded-lg font-raleway font-bold hover:shadow-lg transition-all duration-300"
                        >
                          Select Package
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-beaver/10 rounded-2xl p-6 border border-beaver/20 sticky top-24">
              <h3 className="font-playfair text-xl font-bold text-ghost-white mb-4">Book This Experience</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-beaver/10 rounded-lg">
                  <span className="text-ghost-white font-raleway">Starting from</span>
                  <span className="text-xl font-raleway font-bold text-mindaro">{destinationData.price}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-beaver/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-beaver mx-auto mb-1" />
                    <div className="text-ghost-white text-sm font-raleway">{destinationData.duration}</div>
                  </div>
                  <div className="text-center p-3 bg-beaver/10 rounded-lg">
                    <Users className="w-5 h-5 text-mindaro mx-auto mb-1" />
                    <div className="text-ghost-white text-sm font-raleway">{destinationData.groupSize}</div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowBookingForm(true)}
                className="w-full bg-gradient-to-r from-beaver to-mindaro text-eerie-black py-3 rounded-lg font-raleway font-bold hover:shadow-lg transition-all duration-300 mb-3"
              >
                Book Now
              </button>
              
              <button className="w-full border-2 border-beaver text-ghost-white py-3 rounded-lg font-raleway font-bold hover:bg-beaver/10 transition-all duration-300">
                Request Quote
              </button>
            </div>

            {/* Weather Info */}
            <div className="bg-beaver/10 rounded-2xl p-6 border border-beaver/20">
              <h3 className="font-playfair text-xl font-bold text-ghost-white mb-4 flex items-center space-x-2">
                <Thermometer className="w-5 h-5 text-beaver" />
                <span>Weather & Climate</span>
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-ghost-white/80 font-raleway">Temperature</span>
                  <span className="text-ghost-white font-raleway font-medium">{destinationData.weatherInfo.temperature}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ghost-white/80 font-raleway">Season</span>
                  <span className="text-ghost-white font-raleway font-medium">{destinationData.weatherInfo.season}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ghost-white/80 font-raleway">Clothing</span>
                  <span className="text-ghost-white font-raleway font-medium">{destinationData.weatherInfo.clothing}</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-beaver/10 rounded-2xl p-6 border border-beaver/20">
              <h3 className="font-playfair text-xl font-bold text-ghost-white mb-4">Need Help?</h3>
              <div className="space-y-3">
                <a href="tel:+254700000000" className="flex items-center space-x-3 text-ghost-white hover:text-mindaro transition-colors">
                  <Phone className="w-5 h-5 text-beaver" />
                  <span className="font-raleway">+254 700 000 000</span>
                </a>
                <a href="mailto:info@savannajourneys.com" className="flex items-center space-x-3 text-ghost-white hover:text-mindaro transition-colors">
                  <Mail className="w-5 h-5 text-beaver" />
                  <span className="font-raleway">info@savannajourneys.com</span>
                </a>
                <button className="flex items-center space-x-3 text-ghost-white hover:text-mindaro transition-colors">
                  <MessageCircle className="w-5 h-5 text-beaver" />
                  <span className="font-raleway">Live Chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
       
        <FAQSection />

        {/* Booking Modal */}
        {showBookingForm && (
          <BookingModal 
            destination={destinationData} 
            selectedPackage={selectedPackage} 
            bookingData={bookingData}
            setBookingData={setBookingData}
            onClose={() => setShowBookingForm(false)} 
          />
        )}
      </div>
    </div>
  );
};
export default DestinationDetails;