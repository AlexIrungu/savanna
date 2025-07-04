import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { 
  Mountain, 
  Briefcase, 
  Users, 
  Leaf, 
  Map, 
  Heart, 
  ArrowLeft, 
  Send, 
  CheckCircle,
  AlertCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  MessageSquare,
  Sparkles
} from 'lucide-react';

const ServicesBookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    preferredDate: '',
    groupSize: '',
    budget: '',
    specialRequests: '',
    service: ''
  });

  // Services data
  const services = [
    {
      id: 'luxury-safari',
      icon: Mountain,
      title: "Luxury Safari Experiences",
      description: "Exclusive access to Kenya's most prestigious wildlife reserves with expert guides and personalized itineraries.",
      color: "from-orange-400 to-red-500",
      bgGlow: "bg-orange-500/10",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 'business-travel',
      icon: Briefcase,
      title: "Business Travel Logistics", 
      description: "Comprehensive planning for corporate travelers including transport, accommodation, and networking opportunities.",
      color: "from-blue-400 to-indigo-500",
      bgGlow: "bg-blue-500/10",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 'cultural-immersion',
      icon: Users,
      title: "Cultural Immersion",
      description: "Authentic experiences with local communities, artisans, and culinary experts for a deeper understanding of Kenya.",
      color: "from-purple-400 to-pink-500",
      bgGlow: "bg-purple-500/10",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 'wellness-retreats',
      icon: Heart,
      title: "Wellness Retreats",
      description: "Rejuvenating escapes combining natural beauty, mindfulness, and traditional healing practices.",
      color: "from-green-400 to-emerald-500",
      bgGlow: "bg-green-500/10",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 'conservation-experiences',
      icon: Leaf,
      title: "Conservation Experiences",
      description: "Participate in wildlife conservation initiatives and sustainable tourism projects across Kenya.",
      color: "from-teal-400 to-cyan-500",
      bgGlow: "bg-teal-500/10",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 'custom-itineraries',
      icon: Map,
      title: "Custom Itineraries",
      description: "Bespoke travel planning tailored to your specific interests, schedule, and preferences.",
      color: "from-amber-400 to-yellow-500",
      bgGlow: "bg-amber-500/10",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&crop=center"
    }
  ];

  // Get service from URL params or state
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceId = params.get('service');
    
    if (serviceId) {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setSelectedService(service);
        setFormData(prev => ({ ...prev, service: service.title }));
      }
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const templateParams = {
        to_name: 'Journeys Savanna',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        location: formData.location,
        preferred_date: formData.preferredDate,
        group_size: formData.groupSize,
        budget: formData.budget,
        service: formData.service,
        special_requests: formData.specialRequests,
        message: `Service Booking Request for: ${formData.service}\n\nClient Details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nPreferred Date: ${formData.preferredDate}\nGroup Size: ${formData.groupSize}\nBudget Range: ${formData.budget}\n\nSpecial Requests:\n${formData.specialRequests}`
      };

      // Replace with your actual EmailJS service ID, template ID, and public key
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        preferredDate: '',
        groupSize: '',
        budget: '',
        specialRequests: '',
        service: selectedService?.title || ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setFormData(prev => ({ ...prev, service: service.title }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ghost-white via-white to-vanilla/20 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-mindaro/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-40 h-40 bg-vanilla/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-beaver/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-beaver hover:text-savanna-dark transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-raleway font-medium">Back to Services</span>
          </button>

          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-mindaro/20 to-vanilla/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-savanna-dark mb-8 border border-mindaro/20 shadow-sm">
            <Sparkles className="w-4 h-4 text-mindaro animate-pulse" />
            <span className="font-raleway">Book Your Experience</span>
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-savanna-dark via-beaver to-savanna-dark bg-clip-text text-transparent mb-6 leading-tight">
            Service Booking
          </h1>
          
          <p className="font-raleway text-lg text-beaver max-w-2xl mx-auto">
            Ready to embark on your next adventure? Fill out the form below and we'll craft the perfect experience for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Selection Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="font-playfair text-2xl font-bold text-savanna-dark mb-6">Select a Service</h2>
              <div className="space-y-4">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  const isSelected = selectedService?.id === service.id;
                  
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                        isSelected 
                          ? 'border-mindaro bg-mindaro/10 shadow-lg' 
                          : 'border-gray-200 bg-white hover:border-mindaro/50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.bgGlow} ${
                          isSelected ? 'scale-110' : ''
                        } transition-transform duration-300`}>
                          <IconComponent className={`w-6 h-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                        </div>
                        <div>
                          <h3 className="font-raleway font-semibold text-savanna-dark text-sm mb-1">
                            {service.title}
                          </h3>
                          <p className="text-xs text-beaver line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Selected Service Header */}
              {selectedService && (
                <div className="relative p-8 bg-gradient-to-r from-mindaro/10 to-vanilla/10 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${selectedService.bgGlow}`}>
                      <selectedService.icon className={`w-8 h-8 bg-gradient-to-r ${selectedService.color} bg-clip-text text-transparent`} />
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-savanna-dark mb-2">
                        {selectedService.title}
                      </h3>
                      <p className="text-beaver">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="font-playfair text-xl font-bold text-savanna-dark mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-mindaro" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-savanna-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mindaro focus:border-mindaro transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-savanna-dark mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mindaro focus:border-mindaro transition-colors duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="font-playfair text-xl font-bold text-savanna-dark mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-mindaro" />
                    Contact Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-savanna-dark mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mindaro focus:border-mindaro transition-colors duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-savanna-dark mb-2">
                        Current Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mindaro focus:border-mindaro transition-colors duration-300"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                </div>

                {/* Trip Details */}
                <div>
                  <h3 className="font-playfair text-xl font-bold text-savanna-dark mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-mindaro" />
                    Trip Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-savanna-dark mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mindaro focus:border-mindaro transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-savanna-dark mb-2">
                        Group Size
                      </label>
                      <select
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mindaro focus:border-mindaro transition-colors duration-300"
                      >
                        <option value="">Select group size</option>
                        <option value="1">Solo Traveler</option>
                        <option value="2">2 People</option>
                        <option value="3-5">3-5 People</option>
                        <option value="6-10">6-10 People</option>
                        <option value="10+">10+ People</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Budget and Preferences */}
                <div>
                  <label className="block text-sm font-medium text-savanna-dark mb-2">
                    Budget Range (USD)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mindaro focus:border-mindaro transition-colors duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-savanna-dark mb-2">
                    Special Requests or Additional Information
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mindaro focus:border-mindaro transition-colors duration-300"
                    placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or specific interests..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !selectedService}
                    className="w-full bg-gradient-to-r from-mindaro to-vanilla hover:from-mindaro/90 hover:to-vanilla/90 disabled:from-gray-300 disabled:to-gray-300 text-savanna-dark font-raleway font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl disabled:shadow-none transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-savanna-dark border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Booking Request</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">
                      Thank you! Your booking request has been sent successfully. We'll get back to you within 24 hours.
                    </span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-800 font-medium">
                      Sorry, there was an error sending your request. Please try again or contact us directly.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBookingForm;