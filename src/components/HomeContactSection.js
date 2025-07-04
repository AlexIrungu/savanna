import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const HomeContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    travelDates: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init('UcKrhFiBPGrbySsJl'); // Your public key
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Form data:', formData);
    
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        travel_dates: formData.travelDates,
        message: formData.message,
        to_name: 'Journeys Savanna Team' // Optional: recipient name
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        'service_suw3umd',     // Your service ID
        'template_zla55xc',    // Your template ID (we'll create a new one)
        templateParams,
        'UcKrhFiBPGrbySsJl'    // Your public key
      );

      console.log('EmailJS Success:', result);
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        travelDates: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(''), 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
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
                <div className="bg-beaver p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-savanna-dark">Call Us</div>
                  <div className="text-gray-600">+254 742 779 434</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-beaver p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-savanna-dark">Email Us</div>
                  <div className="text-gray-600">journeyssavanna@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-beaver p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-savanna-dark">Visit Us</div>
                  <div className="text-gray-600">Nairobi, Kenya</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-ghost-white rounded-2xl p-8">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <p className="text-green-700 font-medium">
                    Thank you! Your message has been sent successfully. We'll contact you soon.
                  </p>
                </div>
              </div>
            )}
            
            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                  <p className="text-red-700 font-medium">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-savanna-dark mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-beaver focus:outline-none focus:ring-2 focus:ring-beaver/20 transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-savanna-dark mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-beaver focus:outline-none focus:ring-2 focus:ring-beaver/20 transition-all"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-savanna-dark mb-2">
                  Travel Dates <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="travelDates"
                  value={formData.travelDates}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-beaver focus:outline-none focus:ring-2 focus:ring-beaver/20 transition-all"
                  placeholder="When would you like to travel?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-savanna-dark mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-beaver focus:outline-none focus:ring-2 focus:ring-beaver/20 transition-all resize-none"
                  placeholder="Tell us about your dream Kenya experience..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-beaver text-white py-3 rounded-lg font-semibold hover:bg-vanilla hover:text-savanna-dark transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;