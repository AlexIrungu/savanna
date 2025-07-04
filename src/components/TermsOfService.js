import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Users, CreditCard, AlertTriangle, Phone, Mail } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ghost-white via-vanilla/10 to-mindaro/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-eerie-black to-beaver text-ghost-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-vanilla/10 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-mindaro/10 to-transparent rounded-full transform -translate-x-36 translate-y-36"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-vanilla hover:text-mindaro transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-raleway">Back to Home</span>
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-vanilla/20 to-mindaro/10 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-vanilla" />
            </div>
            <div>
              <h1 className="text-5xl font-playfair font-bold text-transparent bg-gradient-to-r from-vanilla to-mindaro bg-clip-text">
                Terms of Service
              </h1>
              <p className="text-beaver font-raleway text-lg mt-2">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-beaver/10 p-12">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-eerie-black font-raleway text-lg leading-relaxed">
              Welcome to Savanna Journeys. These Terms of Service ("Terms") govern your use of our website and safari tour services. 
              By booking with us or using our services, you agree to be bound by these Terms. Please read them carefully.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Acceptance of Terms</h2>
            <div className="text-eerie-black font-raleway space-y-4">
              <p className="leading-relaxed">
                By accessing our website, making a booking, or using our services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, 
                please do not use our services.
              </p>
            </div>
          </section>

          {/* Booking and Payment */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-beaver/20 to-beaver/10 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-beaver" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-eerie-black">Booking and Payment Terms</h2>
            </div>
            
            <div className="text-eerie-black font-raleway space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-beaver mb-3">Booking Process</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>All bookings are subject to availability and confirmation</li>
                  <li>A deposit is required to secure your booking</li>
                  <li>Full payment is due as specified in your booking confirmation</li>
                  <li>Prices are subject to change until booking is confirmed</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-beaver mb-3">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>Deposits are non-refundable unless otherwise specified</li>
                  <li>Payment can be made via bank transfer, credit card, or other approved methods</li>
                  <li>All prices are in USD unless otherwise stated</li>
                  <li>Additional charges may apply for special requests or services</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cancellation Policy */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-beaver/20 to-beaver/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-beaver" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-eerie-black">Cancellation and Refund Policy</h2>
            </div>
            
            <div className="text-eerie-black font-raleway space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-beaver mb-3">Cancellation by Client</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>60+ days before departure:</strong> 10% cancellation fee</li>
                  <li><strong>30-59 days before departure:</strong> 25% cancellation fee</li>
                  <li><strong>15-29 days before departure:</strong> 50% cancellation fee</li>
                  <li><strong>14 days or less:</strong> 100% cancellation fee (no refund)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-beaver mb-3">Cancellation by Savanna Journeys</h3>
                <p className="leading-relaxed">
                  We reserve the right to cancel tours due to insufficient bookings, safety concerns, or circumstances 
                  beyond our control. In such cases, we will provide a full refund or offer alternative arrangements.
                </p>
              </div>
            </div>
          </section>

          {/* Travel Requirements */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-beaver/20 to-beaver/10 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-beaver" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-eerie-black">Travel Requirements and Responsibilities</h2>
            </div>
            
            <div className="text-eerie-black font-raleway space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-beaver mb-3">Client Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>Ensure valid passport with at least 6 months validity</li>
                  <li>Obtain necessary visas and permits</li>
                  <li>Maintain adequate travel insurance</li>
                  <li>Follow all safety instructions and guidelines</li>
                  <li>Respect local customs, wildlife, and environment</li>
                  <li>Arrive at designated meeting points on time</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-beaver mb-3">Health and Safety</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>Consult your doctor regarding vaccinations and health precautions</li>
                  <li>Inform us of any medical conditions or dietary requirements</li>
                  <li>Follow park rules and guide instructions at all times</li>
                  <li>Wildlife viewing involves inherent risks that clients assume</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Liability and Insurance */}
          <section className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Liability and Insurance</h2>
            <div className="text-eerie-black font-raleway space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-beaver mb-3">Limitation of Liability</h3>
                <p className="leading-relaxed text-gray-700">
                  Savanna Journeys acts as an agent for various service providers and is not liable for acts, errors, 
                  omissions, or negligence of such providers. Our liability is limited to the cost of services provided. 
                  We strongly recommend comprehensive travel insurance.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-beaver mb-3">Force Majeure</h3>
                <p className="leading-relaxed">
                  We are not liable for delays, cancellations, or changes due to circumstances beyond our control, 
                  including but not limited to weather, political instability, natural disasters, or government actions.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Intellectual Property</h2>
            <div className="text-eerie-black font-raleway space-y-4">
              <p className="leading-relaxed">
                All content on our website, including text, graphics, logos, images, and software, is the property of 
                Savanna Journeys or our licensors and is protected by copyright and other intellectual property laws. 
                You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </div>
          </section>

          {/* Photography and Media */}
          <section className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Photography and Media Release</h2>
            <div className="text-eerie-black font-raleway space-y-4">
              <p className="leading-relaxed">
                By participating in our tours, you consent to the use of photographs, videos, or other media 
                taken during the tour for promotional purposes. If you prefer not to be photographed or filmed, 
                please inform your guide at the beginning of the tour.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Changes to Terms</h2>
            <div className="text-eerie-black font-raleway space-y-4">
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be posted on our website 
                with the updated date. Your continued use of our services after changes constitutes acceptance 
                of the new Terms.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Governing Law</h2>
            <div className="text-eerie-black font-raleway space-y-4">
              <p className="leading-relaxed">
                These Terms are governed by the laws of Kenya. Any disputes arising from these Terms or your 
                use of our services will be subject to the jurisdiction of Kenyan courts.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Contact Us</h2>
            <div className="text-eerie-black font-raleway">
              <p className="leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-beaver" />
                  <span>+254 742 779 434</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-beaver" />
                  <span>journeyssavanna@gmail.com</span>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Top */}
          <div className="text-center pt-8 border-t border-beaver/20">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-beaver to-eerie-black text-ghost-white px-8 py-3 rounded-2xl hover:shadow-lg transition-all duration-300 font-raleway font-semibold group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;