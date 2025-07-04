import React, { useState } from 'react';
import { X, User, Mail, Phone, Calendar, Users } from 'lucide-react';

// Booking Form Modal Component
const BookingModal = ({ showBookingForm, setShowBookingForm, selectedPackage }) => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 1,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission logic here
    console.log('Booking submitted:', bookingData);
    setShowBookingForm(false);
  };

  return showBookingForm ? (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-eerie-black rounded-2xl border border-beaver/20 w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-beaver/20">
          <h3 className="font-playfair text-xl font-bold text-ghost-white">Book Your Safari</h3>
          <button
            onClick={() => setShowBookingForm(false)}
            className="w-8 h-8 bg-beaver/20 rounded-lg flex items-center justify-center hover:bg-beaver/30 transition-colors"
          >
            <X className="w-5 h-5 text-ghost-white" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-4">
          {selectedPackage && (
            <div className="bg-beaver/10 rounded-lg p-4 border border-beaver/20">
              <h4 className="font-raleway font-bold text-ghost-white mb-2">Selected Package</h4>
              <p className="text-ghost-white/80 font-raleway">{selectedPackage.name}</p>
              <p className="text-mindaro font-raleway font-bold">${selectedPackage.price} per person</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-ghost-white font-raleway font-medium mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name
              </label>
              <input
                type="text"
                value={bookingData.name}
                onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                className="w-full bg-beaver/10 border border-beaver/20 rounded-lg p-3 text-ghost-white font-raleway focus:border-beaver focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-ghost-white font-raleway font-medium mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                value={bookingData.email}
                onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                className="w-full bg-beaver/10 border border-beaver/20 rounded-lg p-3 text-ghost-white font-raleway focus:border-beaver focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-ghost-white font-raleway font-medium mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                value={bookingData.phone}
                onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                className="w-full bg-beaver/10 border border-beaver/20 rounded-lg p-3 text-ghost-white font-raleway focus:border-beaver focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-ghost-white font-raleway font-medium mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  className="w-full bg-beaver/10 border border-beaver/20 rounded-lg p-3 text-ghost-white font-raleway focus:border-beaver focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-ghost-white font-raleway font-medium mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Guests
                </label>
                <select
                  value={bookingData.guests}
                  onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                  className="w-full bg-beaver/10 border border-beaver/20 rounded-lg p-3 text-ghost-white font-raleway focus:border-beaver focus:outline-none"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-ghost-white font-raleway font-medium mb-2">
                Additional Message
              </label>
              <textarea
                value={bookingData.message}
                onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                className="w-full bg-beaver/10 border border-beaver/20 rounded-lg p-3 text-ghost-white font-raleway focus:border-beaver focus:outline-none h-20 resize-none"
                placeholder="Any special requests or questions?"
              />
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setShowBookingForm(false)}
                className="flex-1 border-2 border-beaver/50 text-ghost-white py-3 rounded-lg font-raleway font-bold hover:bg-beaver/10 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-beaver to-mindaro text-eerie-black py-3 rounded-lg font-raleway font-bold hover:shadow-lg transition-all duration-300"
              >
                Submit Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default BookingModal;