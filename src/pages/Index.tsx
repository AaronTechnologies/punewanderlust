
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import TravelCategories from '@/components/TravelCategories';
import SocialLinks from '@/components/SocialLinks';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Welcome to PuneWeekends</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                PuneWeekends is your ultimate guide to discovering perfect getaways within 500 kilometers of Pune. 
                We curate experiences that let you escape the city's hustle and reconnect with nature, history, and culture.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're seeking a peaceful retreat in the Western Ghats, a beach getaway along the Konkan coast, 
                or an exploration of Maharashtra's rich heritage, we have handpicked destinations to make your weekends memorable.
              </p>
              <Link 
                to="/about" 
                className="inline-block text-primary font-medium hover:text-primary/80"
              >
                Learn more about us →
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1598977804088-b4f9d8267a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Scenic view from Pune"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute top-12 -right-6 w-24 h-24 bg-primary rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-100 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedDestinations />
      
      <TravelCategories />
      
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 animate-fade-up">Ready for Your Next Adventure?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Subscribe to our newsletter to receive travel inspiration, exclusive deals, and updates on new destinations.
          </p>
          
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/20"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-primary font-medium px-6 py-3 rounded-md transition-all hover:bg-white/90"
            >
              Subscribe
            </button>
          </form>
          
          <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-white/80 mb-4">Follow us on social media</p>
            <SocialLinks className="justify-center" iconColor="white" iconSize={24} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
