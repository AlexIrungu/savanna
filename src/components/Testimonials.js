import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Mail, Phone, Instagram, Facebook, Twitter, Linkedin, Menu, X, Mountain, Briefcase, Users, Leaf, MapIcon, Spa } from 'lucide-react';
// Testimonials Component
const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      content: "Our safari experience was flawless from start to finish. The attention to detail and insider knowledge made all the difference. We saw the Big Five in just two days!",
      author: "Sarah Johnson",
      role: "Executive, United Kingdom",
      rating: 5
    },
    {
      content: "As a business traveler with a tight schedule, the logistics support was invaluable. My meetings in Nairobi and Mombasa went perfectly, with time left to enjoy some local experiences.",
      author: "Michael Chen", 
      role: "Tech Entrepreneur, Singapore",
      rating: 5
    },
    {
      content: "The cultural immersion aspects of our trip were the highlight. Connecting with Maasai communities and learning traditional crafts gave us insights we never would have had otherwise.",
      author: "Emma & David Rodriguez",
      role: "Photographers, Spain", 
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-savanna-dark via-beaver to-savanna-brown">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-mindaro mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-mindaro mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-mindaro fill-current" />
                    ))}
                  </div>
                  
                  <p className="font-raleway text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-mindaro to-vanilla rounded-full mb-4"></div>
                    <h4 className="font-raleway text-lg font-bold text-mindaro">
                      {testimonial.author}
                    </h4>
                    <p className="font-raleway text-white/80">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-mindaro" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-mindaro' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-mindaro" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials