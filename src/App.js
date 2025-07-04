import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Destinations from './components/Destinations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import ServicesBookingForm from './components/ServicesBookingForm';
import DestinationDetails from './components/DestinationDetails';
import NotFound from './components/NotFound';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

// SEO Component for page-specific meta tags
const SEOHelmet = ({ title, description, keywords, canonical }) => (
  <Helmet>
    <title>{title} | Journeys Savanna - Kenya Safari Tours</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={`https://alexirungu.github.io/savanna${canonical}`} />
  </Helmet>
);

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <ScrollToTop /> {/* Add ScrollToTop component here */}
        <Navbar />
        <main role="main">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <SEOHelmet 
                    title="Home"
                    description="Discover Kenya's magnificent wildlife with Journeys Savanna. Expert safari tours, destination travel, and unforgettable African adventures in Maasai Mara, Amboseli, and more."
                    keywords="Kenya safari, African safari tours, wildlife tours Kenya, Maasai Mara safari, Amboseli National Park, safari packages"
                    canonical="/"
                  />
                  <Home />
                </>
              } 
            />
            <Route 
              path="/home" 
              element={
                <>
                  <SEOHelmet 
                    title="Home"
                    description="Discover Kenya's magnificent wildlife with Journeys Savanna. Expert safari tours, destination travel, and unforgettable African adventures."
                    keywords="Kenya safari, African safari tours, wildlife tours Kenya"
                    canonical="/home"
                  />
                  <Home />
                </>
              } 
            />
            <Route 
              path="/about" 
              element={
                <>
                  <SEOHelmet 
                    title="About Us"
                    description="Learn about Journeys Savanna - your trusted Kenya safari tour operator. Expert guides, sustainable tourism, and personalized African adventure experiences."
                    keywords="about Journeys Savanna, Kenya tour operator, safari company Kenya, sustainable tourism"
                    canonical="/about"
                  />
                  <About />
                </>
              } 
            />
            <Route 
              path="/services" 
              element={
                <>
                  <SEOHelmet 
                    title="Safari Services"
                    description="Explore our comprehensive safari services including wildlife tours, cultural experiences, photography safaris, and custom travel packages across Kenya."
                    keywords="safari services Kenya, wildlife tours, photography safaris, cultural tours, custom safari packages"
                    canonical="/services"
                  />
                  <Services />
                </>
              } 
            />
            <Route 
              path="/services/booking" 
              element={
                <>
                  <SEOHelmet 
                    title="Book Safari Services"
                    description="Book your Kenya safari experience with Journeys Savanna. Choose from luxury safaris, cultural tours, wellness retreats, and custom itineraries."
                    keywords="book Kenya safari, safari booking, luxury safari booking, cultural tours booking, wellness retreats Kenya"
                    canonical="/services/booking"
                  />
                  <ServicesBookingForm />
                </>
              } 
            />
            <Route 
              path="/destinations" 
              element={
                <>
                  <SEOHelmet 
                    title="Safari Destinations"
                    description="Discover Kenya's top safari destinations including Maasai Mara, Amboseli, Tsavo, Lake Nakuru, and Samburu National Parks with Journeys Savanna."
                    keywords="Kenya safari destinations, Maasai Mara, Amboseli National Park, Tsavo National Park, Lake Nakuru, Samburu"
                    canonical="/destinations"
                  />
                  <Destinations />
                </>
              } 
            />
            
            <Route 
              path="/details" 
              element={
                <>
                  <SEOHelmet 
                    title="Safari Details"
                    description="Get detailed information about our safari packages, itineraries, pricing, and booking with Journeys Savanna Kenya."
                    keywords="safari details Kenya, safari packages, safari pricing, safari booking"
                    canonical="/details"
                  />
                  <DestinationDetails />
                </>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <>
                  <SEOHelmet 
                    title="Contact Us"
                    description="Contact Journeys Savanna for Kenya safari bookings. Call +254 742 779 434 or email journeyssavanna@gmail.com. Located in Nairobi, Kenya."
                    keywords="contact Journeys Savanna, Kenya safari booking, safari tour operator contact, Nairobi safari company"
                    canonical="/contact"
                  />
                  <Contact />
                </>
              } 
            />
            
            {/* Policy Pages */}
            <Route 
              path="/privacy" 
              element={
                <>
                  <SEOHelmet 
                    title="Privacy Policy"
                    description="Read Journeys Savanna's Privacy Policy to understand how we collect, use, and protect your personal information when booking Kenya safari tours."
                    keywords="privacy policy, data protection, personal information, Kenya safari privacy"
                    canonical="/privacy"
                  />
                  <PrivacyPolicy />
                </>
              } 
            />
            <Route 
              path="/terms" 
              element={
                <>
                  <SEOHelmet 
                    title="Terms of Service"
                    description="Review Journeys Savanna's Terms of Service for safari bookings, cancellation policies, and travel conditions for Kenya safari tours."
                    keywords="terms of service, booking conditions, cancellation policy, safari terms Kenya"
                    canonical="/terms"
                  />
                  <TermsOfService />
                </>
              } 
            />
            <Route 
              path="/cookies" 
              element={
                <>
                  <SEOHelmet 
                    title="Cookie Policy"
                    description="Learn about Journeys Savanna's Cookie Policy and how we use cookies to improve your experience on our Kenya safari website."
                    keywords="cookie policy, website cookies, privacy settings, Kenya safari cookies"
                    canonical="/cookies"
                  />
                  <CookiePolicy />
                </>
              } 
            />
            
            <Route 
              path="*" 
              element={
                <>
                  <SEOHelmet 
                    title="Page Not Found"
                    description="The page you're looking for doesn't exist. Explore our Kenya safari tours and destinations with Journeys Savanna."
                    keywords="404 error, page not found, Kenya safari"
                    canonical="/404"
                  />
                  <NotFound />
                </>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;