import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, UserCheck, Database, Phone, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
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
              <Shield className="w-8 h-8 text-vanilla" />
            </div>
            <div>
              <h1 className="text-5xl font-playfair font-bold text-transparent bg-gradient-to-r from-vanilla to-mindaro bg-clip-text">
                Privacy Policy
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
              At Savanna Journeys, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our safari tour services.
            </p>
          </div>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-beaver/20 to-beaver/10 rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 text-beaver" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-eerie-black">Information We Collect</h2>
            </div>
            
            <div className="space-y-6 text-eerie-black font-raleway">
              <div>
                <h3 className="text-xl font-semibold text-beaver mb-3">Personal Information</h3>
                <p className="leading-relaxed mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>Book a safari tour or request information</li>
                  <li>Contact us via phone, email, or contact forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Create an account on our website</li>
                  <li>Participate in surveys or promotional activities</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-beaver mb-3">Types of Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Passport and travel document information</li>
                  <li>Payment and billing information</li>
                  <li>Travel preferences and special requirements</li>
                  <li>Emergency contact information</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-beaver/20 to-beaver/10 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-beaver" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-eerie-black">How We Use Your Information</h2>
            </div>
            
            <div className="text-eerie-black font-raleway space-y-4">
              <p className="leading-relaxed">We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>To provide, operate, and maintain our safari tour services</li>
                <li>To process bookings and manage your travel arrangements</li>
                <li>To communicate with you about your bookings and provide customer support</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To improve our services and develop new offerings</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To ensure the safety and security of our guests during tours</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-beaver/20 to-beaver/10 rounded-xl flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-beaver" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-eerie-black">Information Sharing and Disclosure</h2>
            </div>
            
            <div className="text-eerie-black font-raleway space-y-4">
              <p className="leading-relaxed">We may share your personal information in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business</li>
                <li><strong>Business Partners:</strong> With hotels, lodges, transport providers, and other tour operators</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of our business</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong>We do not sell, trade, or rent your personal information to third parties for marketing purposes.</strong>
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Data Security</h2>
            <div className="text-eerie-black font-raleway space-y-4">
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of 
                transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Your Rights</h2>
            <div className="text-eerie-black font-raleway space-y-4">
              <p className="leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct or update your personal information</li>
                <li>Delete your personal information (subject to legal requirements)</li>
                <li>Object to or restrict the processing of your information</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Contact Us</h2>
            <div className="text-eerie-black font-raleway">
              <p className="leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;