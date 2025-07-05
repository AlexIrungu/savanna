import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle, ArrowRight, Calendar } from 'lucide-react';
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
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        travel_dates: formData.travelDates,
        message: formData.message,
        to_name: 'Journeys Savanna Team'
      };

      await emailjs.send(
        'service_suw3umd',
        'template_zla55xc',
        templateParams,
        'UcKrhFiBPGrbySsJl'
      );
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        travelDates: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(''), 5000);
      
    } catch (error) {
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
    <section className="py-24 bg-gradient-to-b from-ghost-white to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-beaver/10 text-beaver rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <Send className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-savanna-dark leading-tight">
              Let's Craft Your <span className="text-beaver">Perfect Safari</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our travel experts are standing by to design your dream Kenyan adventure. 
              Share your vision and we'll handle every detail.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-beaver to-savanna-dark p-3 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-savanna-dark">Call Us</div>
                    <div className="text-gray-600">+254 742 779 434</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-beaver to-savanna-dark p-3 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-savanna-dark">Email Us</div>
                    <div className="text-gray-600">journeyssavanna@gmail.com</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-beaver to-savanna-dark p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-savanna-dark">Visit Us</div>
                    <div className="text-gray-600">Nairobi, Kenya</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-beaver to-savanna-dark p-3 rounded-full">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-savanna-dark">Office Hours</div>
                    <div className="text-gray-600">Mon-Fri: 8AM-6PM EAT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 md:p-10">
                {/* Status Messages */}
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

                <h3 className="font-serif text-2xl font-bold text-savanna-dark mb-6">
                  Send Us A Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-beaver focus:ring-2 focus:ring-beaver/20 transition-all placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-beaver focus:ring-2 focus:ring-beaver/20 transition-all placeholder-gray-400"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Dates <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-beaver focus:ring-2 focus:ring-beaver/20 transition-all placeholder-gray-400"
                      placeholder="Approximate travel dates"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Safari Vision <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-beaver focus:ring-2 focus:ring-beaver/20 transition-all placeholder-gray-400 resize-none"
                      placeholder="Tell us about your dream safari experience..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-gradient-to-r from-beaver to-savanna-dark text-white py-4 rounded-xl font-semibold hover:from-savanna-dark hover:to-beaver transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              <div className="bg-gradient-to-r from-beaver/5 to-savanna-dark/5 p-6 text-center border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  We respect your privacy. Your information will never be shared.
                </p>
              </div>
            </div>
            
            {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-vanilla to-mindaro p-6 rounded-2xl shadow-2xl border border-white/20 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-savanna-dark text-lg">24-Hour Response</div>
                  <div className="text-sm text-savanna-dark/80">Guarantee</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;