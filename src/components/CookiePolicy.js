import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Settings, BarChart3, Shield, Phone, Mail } from 'lucide-react';

const CookiePolicy = () => {
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
              <Cookie className="w-8 h-8 text-vanilla" />
            </div>
            <div>
              <h1 className="text-5xl font-playfair font-bold text-transparent bg-gradient-to-r from-vanilla to-mindaro bg-clip-text">
                Cookie Policy
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
              This Cookie Policy explains how Savanna Journeys ("we," "us," or "our") uses cookies and similar 
              technologies when you visit our website. This policy explains what cookies are, how we use them, 
              and your choices regarding their use.
            </p>
          </div>

          {/* What Are Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">What Are Cookies?</h2>
            <div className="text-eerie-black font-raleway space-y-4">
              <p className="leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you 
                visit a website. They are widely used to make websites work more efficiently and to provide 
                information to website owners about how users interact with their sites.
              </p>
            </div>
          </section>

          {/* Types of Cookies */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-beaver/20 to-beaver/10 rounded-xl flex items-center justify-center">
                <Settings className="w-5 h-5 text-beaver" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-eerie-black">Types of Cookies We Use</h2>
            </div>
            
            <div className="space-y-8">
              {/* Essential Cookies */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-beaver">Essential Cookies</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These cookies are necessary for the website to function properly. They enable basic features 
                  such as page navigation, access to secure areas, and form submissions.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-4">
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Basic website functionality</li>
                </ul>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-beaver">Analytics Cookies</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-4">
                  <li>Page views and traffic sources</li>
                  <li>User behavior patterns</li>
                  <li>Website performance metrics</li>
                  <li>Popular content identification</li>
                </ul>
              </div>

              {/* Functional Cookies */}
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Settings className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-beaver">Functional Cookies</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These cookies enable enhanced functionality and personalization, such as remembering 
                  your preferences and improving your user experience.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-4">
                  <li>Language preferences</li>
                  <li>User interface customization</li>
                  <li>Contact form pre-filling</li>
                  <li>Chat widget functionality</li>
                </ul>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-semibold text-beaver">Marketing Cookies</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These cookies are used to track visitors across websites to display relevant 
                  advertisements and measure campaign effectiveness.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-4">
                  <li>Targeted advertising</li>
                  <li>Social media integration</li>
                  <li>Campaign tracking</li>
                  <li>Remarketing campaigns</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Third-Party Cookies</h2>
            <div className="text-eerie-black font-raleway space-y-4">
              <p className="leading-relaxed">
                We may use third-party services that set cookies on our website. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior insights</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and login functionality</li>
                <li><strong>Booking Systems:</strong> For reservation and payment processing</li>
                <li><strong>Customer Support:</strong> For chat widgets and support ticket systems</li>
              </ul>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Managing Your Cookie Preferences</h2>
            <div className="text-eerie-black font-raleway space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-beaver mb-3">Browser Settings</h3>
                <p className="leading-relaxed mb-3">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>View and delete existing cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear cookies when you close your browser</li>
                  <li>Set warnings before cookies are stored</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-beaver mb-3">Cookie Consent</h3>
                <p className="leading-relaxed">
                  When you first visit our website, you'll see a cookie banner asking for your consent. 
                  You can accept all cookies, reject non-essential cookies, or customize your preferences. 
                  You can change these settings at any time by clicking the cookie preferences link in our footer.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-beaver mb-3">Important Note</h3>
                <p className="text-gray-700 leading-relaxed">
                  Please note that disabling certain cookies may affect the functionality of our website. 
                  Essential cookies cannot be disabled as they are necessary for the site to function properly.
                </p>
              </div>
            </div>
          </section>

          {/* Updates to Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Updates to This Policy</h2>
            <div className="text-eerie-black font-raleway space-y-4">
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or applicable laws. When we make changes, we will update the "last modified" date at 
                the top of this policy and notify you through our website or other communication channels.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-3xl font-playfair font-bold text-eerie-black mb-6">Contact Us</h2>
            <div className="text-eerie-black font-raleway">
              <p className="leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicy;