import React, { useState } from 'react';
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

const DestinationDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  const destination = state?.destination;

  // All destinations data
  const allDestinations = {
    "Maasai Mara": {
      id: 1,
      name: "Maasai Mara",
      description: "Witness the great migration and abundant wildlife in Kenya's most famous reserve",
      detailedDescription: "The Maasai Mara National Reserve is one of Africa's most celebrated wildlife destinations. Spanning over 1,510 square kilometers, this remarkable ecosystem serves as the northern extension of Tanzania's Serengeti National Park. The reserve is renowned for hosting the Great Migration, where over 1.5 million wildebeest, zebras, and gazelles traverse the plains.",
      image: "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hYXNhaSUyMG1hcmF8ZW58MHx8MHx8fDA%3D",
      gallery: [
        "https://images.unsplash.com/photo-1543107484-b13a21b26e8c?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFhc2FpJTIwbWFyYXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1620693776767-e929c5724b49?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hYXNhaSUyMG1hcmF8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1721990251282-973d6004beb2?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1hYXNhaSUyMG1hcmF8ZW58MHx8MHx8fDA%3D"
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
        }
      ],
      accommodation: [
        {
          type: "Luxury Safari Lodge",
          name: "Mara Serena Safari Lodge",
          price: "$650/night",
          rating: 4.8,
          amenities: ["Pool", "Spa", "Restaurant", "WiFi"]
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
      included: ["Park fees", "Game drives", "Professional guide", "Transportation"],
      notIncluded: ["International flights", "Visa fees", "Personal expenses"],
      packages: [
        {
          id: 1,
          name: "Classic Safari Package",
          duration: "3 Days, 2 Nights",
          price: 1350,
          includes: ["Accommodation", "All meals", "Game drives", "Park fees"],
          description: "Perfect introduction to Maasai Mara"
        }
      ],
      FAQ: [
        {
          question: "What is the best time for Great Migration?",
          answer: "Typically from July to October, with river crossings between July and September."
        }
      ],
      featured: true
    },
    "Nairobi": {
      id: 2,
      name: "Nairobi",
      description: "Kenya's vibrant capital and business hub with modern amenities and cultural attractions",
      detailedDescription: "Nairobi is Kenya's bustling capital city that perfectly blends urban sophistication with raw African beauty. Known as the 'Green City in the Sun', Nairobi offers a unique mix of modern skyscrapers, historical landmarks, and wildlife experiences just minutes from the city center. From the iconic Nairobi National Park to the vibrant markets and museums, the city provides diverse experiences for every traveler.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1521667815225-4d95a3f3a31a?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5pZ2h0fGVufDB8fDB8fHww"
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
      coordinates: { lat: -1.2864, lng: 36.8172 },
      activities: [
        {
          name: "City Tour",
          description: "Comprehensive tour of Nairobi's highlights",
          duration: "4-6 hours",
          price: "$75"
        },
        {
          name: "Nairobi National Park Safari",
          description: "Game drive in the world's only urban national park",
          duration: "Half day",
          price: "$120"
        }
      ],
      accommodation: [
        {
          type: "5-Star Hotel",
          name: "The Sarova Stanley",
          price: "$350/night",
          rating: 4.7,
          amenities: ["Pool", "Spa", "Multiple Restaurants", "Business Center"]
        }
      ],
      weatherInfo: {
        temperature: "15-25°C",
        rainfall: "Moderate throughout year",
        season: "Pleasant year-round climate",
        clothing: "Light layers, comfortable walking shoes"
      },
      difficulty: "Easy",
      groupSize: "1-12 people",
      included: ["City tour", "Museum entries", "Local guide"],
      notIncluded: ["Meals", "Personal shopping", "Optional activities"],
      packages: [
        {
          id: 1,
          name: "Essential Nairobi Experience",
          duration: "2 Days, 1 Night",
          price: 450,
          includes: ["Accommodation", "City tour", "Airport transfers"],
          description: "Perfect introduction to Nairobi"
        }
      ],
      FAQ: [
        {
          question: "Is Nairobi safe for tourists?",
          answer: "Yes, especially in tourist areas and with proper precautions like any major city."
        }
      ]
    },
    "Diani Beach": {
      id: 3,
      name: "Diani Beach",
      description: "Pristine white sands and crystal clear waters on Kenya's stunning coastline",
      detailedDescription: "Diani Beach is Kenya's premier beach destination, boasting 17 kilometers of powdery white sand and turquoise waters. Located on the Indian Ocean coast south of Mombasa, Diani offers world-class resorts, water sports, and a relaxed tropical atmosphere. The coral reef just offshore provides excellent snorkeling and diving opportunities with abundant marine life.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1691161510065-298039a5b51b?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbmklMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675039871449-62f86fb78a70?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRpYW5pJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D"
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
      coordinates: { lat: -4.3150, lng: 39.5822 },
      activities: [
        {
          name: "Snorkeling Adventure",
          description: "Explore the vibrant coral reefs",
          duration: "3 hours",
          price: "$65"
        },
        {
          name: "Dhow Sunset Cruise",
          description: "Traditional sailing boat with drinks and snacks",
          duration: "2 hours",
          price: "$50"
        }
      ],
      accommodation: [
        {
          type: "Beach Resort",
          name: "Diani Sea Resort",
          price: "$400/night",
          rating: 4.6,
          amenities: ["Beachfront", "Multiple Pools", "Spa", "Water Sports"]
        }
      ],
      weatherInfo: {
        temperature: "25-32°C",
        rainfall: "Low during dry season",
        season: "Hot and humid with cooling sea breezes",
        clothing: "Light beachwear, sun protection"
      },
      difficulty: "Easy",
      groupSize: "2-10 people",
      included: ["Beach access", "Basic water equipment", "Resort amenities"],
      notIncluded: ["Premium water sports", "Spa treatments", "Excursions"],
      packages: [
        {
          id: 1,
          name: "Beach Getaway Package",
          duration: "5 Days, 4 Nights",
          price: 1500,
          includes: ["Luxury accommodation", "Daily breakfast", "One snorkeling trip"],
          description: "Perfect beach vacation",
          popular: true
        }
      ],
      FAQ: [
        {
          question: "Are there water sports available?",
          answer: "Yes, including kite surfing, jet skiing, and scuba diving."
        }
      ],
      featured: true
    },
    "Mount Kenya": {
      id: 4,
      name: "Mount Kenya",
      description: "Africa's second-highest peak with breathtaking landscapes and diverse ecosystems",
      detailedDescription: "Mount Kenya is an ancient extinct volcano and Africa's second highest mountain at 5,199 meters. The mountain offers spectacular scenery with its jagged glacier-clad peaks, alpine forests, and unique high-altitude vegetation. Trekking routes vary from relatively easy walks to technical climbs, all offering stunning views and the chance to see unique wildlife like elephants, buffalo, and rare high-altitude species.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      gallery: [
        "https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXQlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1646159755791-54e741749028?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXQlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D"
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
      coordinates: { lat: -0.1527, lng: 37.3083 },
      activities: [
        {
          name: "Point Lenana Trek",
          description: "Summit the third highest peak at 4,985m",
          duration: "5 days",
          price: "$1200"
        },
        {
          name: "Mountain Wildlife Safari",
          description: "Game viewing on the lower slopes",
          duration: "1 day",
          price: "$150"
        }
      ],
      accommodation: [
        {
          type: "Mountain Lodge",
          name: "Serena Mountain Lodge",
          price: "$280/night",
          rating: 4.3,
          amenities: ["Game viewing", "Restaurant", "Comfortable rooms"]
        }
      ],
      weatherInfo: {
        temperature: "Varies with altitude (0-20°C)",
        rainfall: "Variable",
        season: "Dry months best for climbing",
        clothing: "Warm layers, waterproof gear, good boots"
      },
      difficulty: "Moderate to Challenging",
      groupSize: "2-6 people",
      included: ["Park fees", "Guide", "Basic equipment"],
      notIncluded: ["Specialized climbing gear", "Personal porters"],
      packages: [
        {
          id: 1,
          name: "Standard Climbing Package",
          duration: "6 Days, 5 Nights",
          price: 2100,
          includes: ["Full guide service", "Mountain huts", "All meals"],
          description: "Complete climbing experience"
        }
      ],
      FAQ: [
        {
          question: "Do I need climbing experience?",
          answer: "For Point Lenana, no technical experience needed but good fitness required."
        }
      ]
    },
    "Lamu Island": {
      id: 5,
      name: "Lamu Island",
      description: "UNESCO World Heritage site with rich Swahili culture and timeless charm",
      detailedDescription: "Lamu Old Town is Kenya's oldest continually inhabited settlement and a UNESCO World Heritage Site. This magical island preserves Swahili culture with its narrow streets, ornate doors, and traditional dhows. With no cars on the island, transportation is by donkey or boat, maintaining a peaceful, timeless atmosphere. The blend of African, Arab, and Indian influences creates a unique cultural experience.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1711802536772-0ef59886bc1b?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtdSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1619550481986-5751a79d0d1b?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxhbXUlMjBpc2xhbmR8ZW58MHx8MHx8fDA%3D"
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
      coordinates: { lat: -2.2696, lng: 40.9006 },
      activities: [
        {
          name: "Old Town Walking Tour",
          description: "Explore the historic Swahili architecture",
          duration: "2-3 hours",
          price: "$40"
        },
        {
          name: "Dhow Sunset Cruise",
          description: "Traditional sailing experience",
          duration: "2 hours",
          price: "$60"
        }
      ],
      accommodation: [
        {
          type: "Boutique Hotel",
          name: "Lamu House",
          price: "$320/night",
          rating: 4.5,
          amenities: ["Roof terrace", "Seafood restaurant", "Beach access"]
        }
      ],
      weatherInfo: {
        temperature: "25-32°C",
        rainfall: "Low during dry season",
        season: "Hot with coastal breezes",
        clothing: "Light, modest clothing respecting local culture"
      },
      difficulty: "Easy",
      groupSize: "2-8 people",
      included: ["Cultural guide", "Historical sites"],
      notIncluded: ["Boat transfers", "Special activities"],
      packages: [
        {
          id: 1,
          name: "Cultural Immersion Package",
          duration: "3 Days, 2 Nights",
          price: 850,
          includes: ["Accommodation", "Guided tours", "Dhow trip"],
          description: "Deep dive into Swahili culture"
        }
      ],
      FAQ: [
        {
          question: "Is there nightlife on Lamu?",
          answer: "Nightlife is quiet and respectful of local Muslim culture."
        }
      ]
    },
    "Amboseli": {
      id: 6,
      name: "Amboseli",
      description: "Iconic views of Mt. Kilimanjaro backdrop with spectacular elephant herds",
      detailedDescription: "Amboseli National Park is famous for its large elephant herds and stunning views of Mount Kilimanjaro across the border in Tanzania. The park's varied ecosystems include dried-up lake beds, swamps, and savannah, supporting diverse wildlife. Amboseli is one of the best places in Africa to observe elephants at close range, with some of the largest tusks recorded.",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1592670130429-fa412d400f50?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFtYm9zZWxpfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1643735088226-1ce562fca0ee?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFtYm9zZWxpfGVufDB8fDB8fHww"
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
      coordinates: { lat: -2.6531, lng: 37.2606 },
      activities: [
        {
          name: "Game Drives",
          description: "Morning and evening wildlife viewing",
          duration: "3-4 hours each",
          price: "$90"
        },
        {
          name: "Maasai Village Visit",
          description: "Authentic cultural experience",
          duration: "2 hours",
          price: "$50"
        }
      ],
      accommodation: [
        {
          type: "Safari Lodge",
          name: "Amboseli Serena Lodge",
          price: "$450/night",
          rating: 4.6,
          amenities: ["Pool", "View of Kilimanjaro", "Game viewing deck"]
        }
      ],
      weatherInfo: {
        temperature: "20-30°C",
        rainfall: "Low during dry season",
        season: "Dry season best for clear Kilimanjaro views",
        clothing: "Neutral colors, sun protection"
      },
      difficulty: "Easy",
      groupSize: "2-8 people",
      included: ["Park fees", "Game drives"],
      notIncluded: ["Cultural visits", "Special activities"],
      packages: [
        {
          id: 1,
          name: "Elephant Safari Package",
          duration: "3 Days, 2 Nights",
          price: 1200,
          includes: ["Lodging", "All meals", "Daily game drives"],
          description: "Focus on elephant observation",
          popular: true
        }
      ],
      FAQ: [
        {
          question: "How often is Kilimanjaro visible?",
          answer: "Most clear mornings, especially June-October."
        }
      ],
      featured: true
    }
  };

  // Get the specific destination data
  const destinationData = allDestinations[destination?.name] || destination || allDestinations["Maasai Mara"];

  // Rest of your component code remains the same...
  // [Previous component code continues...]

  return (
    <div className="min-h-screen bg-gradient-to-br from-eerie-black via-savanna-dark to-eerie-black">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-eerie-black/95 backdrop-blur-sm border-b border-beaver/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
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
            src={destinationData.gallery?.[currentImageIndex] || destinationData.image}
            alt={destinationData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Image Navigation */}
        {destinationData.gallery?.length > 1 && (
          <>
            <button 
              onClick={() => {
                if (!destinationData.gallery || destinationData.gallery.length === 0) return;
                setCurrentImageIndex(prev => 
                  prev === 0 ? destinationData.gallery.length - 1 : prev - 1
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-ghost-white" />
            </button>
            <button 
              onClick={() => {
                if (!destinationData.gallery || destinationData.gallery.length === 0) return;
                setCurrentImageIndex(prev => 
                  prev === destinationData.gallery.length - 1 ? 0 : prev + 1
                );
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-ghost-white" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {destinationData.gallery?.length > 1 && (
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
        )}

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
            {destinationData.duration && (
              <div className="text-center">
                <Calendar className="w-6 h-6 text-beaver mx-auto mb-2" />
                <div className="text-ghost-white font-raleway font-bold">{destinationData.duration}</div>
                <div className="text-ghost-white/70 text-sm font-raleway">Duration</div>
              </div>
            )}
            {destinationData.bestTime && (
              <div className="text-center">
                <Sun className="w-6 h-6 text-mindaro mx-auto mb-2" />
                <div className="text-ghost-white font-raleway font-bold">{destinationData.bestTime}</div>
                <div className="text-ghost-white/70 text-sm font-raleway">Best Time</div>
              </div>
            )}
            {destinationData.groupSize && (
              <div className="text-center">
                <Users className="w-6 h-6 text-beaver mx-auto mb-2" />
                <div className="text-ghost-white font-raleway font-bold">{destinationData.groupSize}</div>
                <div className="text-ghost-white/70 text-sm font-raleway">Group Size</div>
              </div>
            )}
            {destinationData.difficulty && (
              <div className="text-center">
                <Compass className="w-6 h-6 text-mindaro mx-auto mb-2" />
                <div className="text-ghost-white font-raleway font-bold">{destinationData.difficulty}</div>
                <div className="text-ghost-white/70 text-sm font-raleway">Difficulty</div>
              </div>
            )}
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
              {[
                { id: 'overview', label: 'Overview', icon: Info },
                { id: 'activities', label: destinationData.category === 'City Experience' ? 'Attractions' : 'Activities', icon: Activity },
                { id: 'accommodation', label: 'Stay', icon: Home },
                { id: 'packages', label: destinationData.category === 'City Experience' ? 'Tour Options' : 'Packages', icon: Award }
              ].map((tab) => (
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
                      {destinationData.highlights?.map((highlight, index) => (
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
                        {destinationData.included?.map((item, index) => (
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
                        {destinationData.notIncluded?.map((item, index) => (
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
                  <h3 className="font-playfair text-2xl font-bold text-ghost-white mb-6">
                    {destinationData.category === 'City Experience' ? 'Attractions & Activities' : 'Available Activities'}
                  </h3>
                  {destinationData.activities?.length > 0 ? (
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
                  ) : (
                    <p className="text-ghost-white/80 font-raleway">
                      No specific activities listed for this destination. Contact us for customized experiences.
                    </p>
                  )}
                </div>
              )}

              {activeTab === 'accommodation' && (
                <div className="space-y-6">
                  <h3 className="font-playfair text-2xl font-bold text-ghost-white mb-6">Where to Stay</h3>
                  {destinationData.accommodation?.length > 0 ? (
                    <div className="grid gap-6">
                      {destinationData.accommodation.map((place, index) => (
                        <div key={index} className="bg-beaver/10 rounded-xl p-6 border border-beaver/20">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <div className="text-beaver font-raleway font-medium text-sm mb-1">{place.type}</div>
                              <h4 className="font-playfair text-xl font-bold text-ghost-white mb-2">{place.name}</h4>
                              {place.rating && (
                                <div className="flex items-center space-x-2 mb-3">
                                  <Star className="w-4 h-4 text-mindaro fill-current" />
                                  <span className="text-ghost-white font-raleway">{place.rating}</span>
                                </div>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-raleway font-bold text-mindaro">{place.price}</div>
                            </div>
                          </div>
                          {place.amenities?.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {place.amenities.map((amenity, aIndex) => (
                                <span key={aIndex} className="bg-beaver/20 text-ghost-white px-2 py-1 rounded text-sm font-raleway">
                                  {amenity}
                                </span>
                              ))}
                            </div>
                          )}
                          <button className="bg-gradient-to-r from-beaver to-mindaro text-eerie-black px-4 py-2 rounded-lg font-raleway font-bold hover:shadow-lg transition-all duration-300">
                            Check Availability
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-ghost-white/80 font-raleway">
                      Accommodation options not specified. We can recommend excellent places based on your preferences.
                    </p>
                  )}
                </div>
              )}

              {activeTab === 'packages' && (
                <div className="space-y-6">
                  <h3 className="font-playfair text-2xl font-bold text-ghost-white mb-6">
                    {destinationData.category === 'City Experience' ? 'Tour Packages' : 'Safari Packages'}
                  </h3>
                  {destinationData.packages?.length > 0 ? (
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
                  ) : (
                    <p className="text-ghost-white/80 font-raleway">
                      Contact us for customized package options for this destination.
                    </p>
                  )}
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
                  {destinationData.duration && (
                    <div className="text-center p-3 bg-beaver/10 rounded-lg">
                      <Calendar className="w-5 h-5 text-beaver mx-auto mb-1" />
                      <div className="text-ghost-white text-sm font-raleway">{destinationData.duration}</div>
                    </div>
                  )}
                  {destinationData.groupSize && (
                    <div className="text-center p-3 bg-beaver/10 rounded-lg">
                      <Users className="w-5 h-5 text-mindaro mx-auto mb-1" />
                      <div className="text-ghost-white text-sm font-raleway">{destinationData.groupSize}</div>
                    </div>
                  )}
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
                <span>
                  {destinationData.category === 'Beach Paradise' ? 'Beach Weather' : 
                   destinationData.category === 'City Experience' ? 'City Climate' : 'Weather & Climate'}
                </span>
              </h3>
              {destinationData.weatherInfo ? (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-ghost-white/80 font-raleway">Temperature</span>
                    <span className="text-ghost-white font-raleway font-medium">
                      {destinationData.weatherInfo.temperature}
                    </span>
                  </div>
                  {destinationData.weatherInfo.season && (
                    <div className="flex justify-between">
                      <span className="text-ghost-white/80 font-raleway">Season</span>
                      <span className="text-ghost-white font-raleway font-medium">
                        {destinationData.weatherInfo.season}
                      </span>
                    </div>
                  )}
                  {destinationData.weatherInfo.clothing && (
                    <div className="flex justify-between">
                      <span className="text-ghost-white/80 font-raleway">Clothing</span>
                      <span className="text-ghost-white font-raleway font-medium">
                        {destinationData.weatherInfo.clothing}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-ghost-white/80 font-raleway">
                  {destinationData.bestTime ? `Best time to visit: ${destinationData.bestTime}` : 'Weather information not available'}
                </p>
              )}
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
        {destinationData.FAQ?.length > 0 && (
          <div className="mt-16">
            <h3 className="font-playfair text-3xl font-bold text-ghost-white mb-8 text-center">Frequently Asked Questions</h3>
            <div className="bg-beaver/5 rounded-2xl p-8 border border-beaver/20">
              {destinationData.FAQ.map((faq, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="font-raleway font-bold text-lg text-ghost-white mb-2">{faq.question}</h4>
                  <p className="text-ghost-white/80 font-raleway">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Booking Modal */}
        {showBookingForm && (
          <BookingModal 
            destination={destinationData} 
            selectedPackage={selectedPackage} 
            onClose={() => setShowBookingForm(false)} 
          />
        )}
      </div>
    </div>
  );
};

export default DestinationDetails;