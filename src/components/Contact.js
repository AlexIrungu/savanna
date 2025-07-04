import React, { useState } from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter, Linkedin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    preferredHotels: '',
    numberOfAdults: '',
    numberOfChildren: '',
    datesOfStay: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS integration - replace with your service details
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        location: formData.location,
        preferred_hotels: formData.preferredHotels,
        number_of_adults: formData.numberOfAdults,
        number_of_children: formData.numberOfChildren,
        dates_of_stay: formData.datesOfStay,
        message: formData.message
      };

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' with your EmailJS credentials
      await emailjs.send('service_suw3umd', 'template_iooe3pr', templateParams, 'UcKrhFiBPGrbySsJl');
      
      // Simulate API call for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        location: '',
        preferredHotels: '',
        numberOfAdults: '',
        numberOfChildren: '',
        datesOfStay: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-ghost-white via-vanilla/20 to-savanna-cream/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-eerie-black mb-4">
            Plan Your Trip
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-beaver to-vanilla mx-auto rounded-full mb-6"></div>
          <p className="font-raleway text-beaver text-lg max-w-2xl mx-auto">
            Fill in the form below to get started with your upcoming trip, or just email us directly
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-beaver/10 shadow-xl">
              <h3 className="font-playfair text-2xl font-bold text-eerie-black mb-6">
                Why Book With Us
              </h3>
              
              <div className="space-y-6 mb-8">
                <p className="font-raleway text-beaver leading-relaxed">
                  As born-and-raised Kenyans, we offer insider access to Kenya's best-kept secrets that international tour operators can't match. Our certified local guides know hidden waterfalls in Aberdares, perfect sunset spots in Amboseli, and authentic Maasai villages. You're not just getting a tour guide – you're gaining a local friend who ensures your Kenya safari adventure exceeds expectations while supporting sustainable tourism.
                </p>
                
                <p className="font-raleway text-beaver leading-relaxed">
                  From visa assistance to luxury safari lodges and budget camping, we handle every detail of your Kenya travel experience. Our 24/7 support, competitive pricing, and flexible itineraries let you focus on memories while we manage logistics. Whether planning a family safari, honeymoon, or solo adventure, our personalized service guarantees a stress-free journey through Maasai Mara, Tsavo, and the Kenyan coast.
                </p>
              </div>

              {/* <div className="space-y-4 mb-8">
                <h4 className="font-raleway font-bold text-eerie-black text-lg">Includes:</h4>
                <ul className="space-y-3">
                  {[
                    'Preferred rates or contracted rates with VVIP benefits',
                    'Priority on Room upgrades',
                    'Daily breakfast for two',
                    'Priority for Early check-in and late checkout',
                    'Destination recommendations',
                    'Itinerary routing and planning'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-beaver mt-0.5 flex-shrink-0" />
                      <span className="font-raleway text-beaver text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-vanilla to-beaver/20 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-eerie-black" />
                  </div>
                  <div>
                    <div className="font-raleway font-semibold text-eerie-black">Email</div>
                    <div className="font-raleway text-beaver">journeyssavanna@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-vanilla to-beaver/20 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-eerie-black" />
                  </div>
                  <div>
                    <div className="font-raleway font-semibold text-eerie-black">Phone</div>
                    <div className="font-raleway text-beaver">+254 742 779 434</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-vanilla to-beaver/20 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-eerie-black" />
                  </div>
                  <div>
                    <div className="font-raleway font-semibold text-eerie-black">Office</div>
                    <div className="font-raleway text-beaver">Nairobi, Kenya</div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-vanilla hover:to-beaver/20 transition-all duration-300 border border-beaver/20 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Icon className="w-5 h-5 text-eerie-black" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-beaver/10 shadow-xl">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <p className="font-raleway text-green-700">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
                  <p className="font-raleway text-red-700">Error sending message. Please try again or contact us directly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-raleway font-semibold text-eerie-black mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-beaver/20 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-beaver focus:ring-2 focus:ring-beaver/20 transition-all font-raleway"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-raleway font-semibold text-eerie-black mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-beaver/20 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-beaver focus:ring-2 focus:ring-beaver/20 transition-all font-raleway"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-raleway font-semibold text-eerie-black mb-2">
                    Location/Destination <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-beaver/20 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-beaver focus:ring-2 focus:ring-beaver/20 transition-all font-raleway"
                    placeholder="Where would you like to travel?"
                  />
                </div>
                
                <div>
                  <label className="block font-raleway font-semibold text-eerie-black mb-2">
                    Preferred Hotels/Resorts (if known)
                  </label>
                  <input
                    type="text"
                    name="preferredHotels"
                    value={formData.preferredHotels}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-beaver/20 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-beaver focus:ring-2 focus:ring-beaver/20 transition-all font-raleway"
                    placeholder="Any specific hotels or resorts in mind?"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-raleway font-semibold text-eerie-black mb-2">
                      Number of Adults <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="numberOfAdults"
                      value={formData.numberOfAdults}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 rounded-2xl border border-beaver/20 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-beaver focus:ring-2 focus:ring-beaver/20 transition-all font-raleway"
                      placeholder="1"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-raleway font-semibold text-eerie-black mb-2">
                      Number of Children (if any) and how old
                    </label>
                    <input
                      type="text"
                      name="numberOfChildren"
                      value={formData.numberOfChildren}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-beaver/20 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-beaver focus:ring-2 focus:ring-beaver/20 transition-all font-raleway"
                      placeholder="e.g., 2 children (ages 8, 12)"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-raleway font-semibold text-eerie-black mb-2">
                    Dates of Stay <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="datesOfStay"
                    value={formData.datesOfStay}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-beaver/20 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-beaver focus:ring-2 focus:ring-beaver/20 transition-all font-raleway"
                    placeholder="e.g., March 15-22, 2024 or Flexible dates in April"
                  />
                </div>
                
                <div>
                  <label className="block font-raleway font-semibold text-eerie-black mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border border-beaver/20 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-beaver focus:ring-2 focus:ring-beaver/20 transition-all resize-none font-raleway"
                    placeholder="Tell us about your travel preferences, special occasions, dietary requirements, or any other details that would help us plan your perfect trip..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-beaver to-beaver/80 text-white px-8 py-4 rounded-2xl font-raleway font-semibold text-lg hover:from-beaver/90 hover:to-beaver/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit</span>
                    </>
                  )}
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;