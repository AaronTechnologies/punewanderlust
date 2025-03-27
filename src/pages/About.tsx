
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import SocialLinks from '@/components/SocialLinks';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 animate-fade-up">About PuneWeekends</h1>
            
            <div className="prose prose-lg max-w-none animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p>
                PuneWeekends is your ultimate guide to discovering perfect weekend getaways within 500 kilometers of Pune. 
                We aim to help busy city dwellers escape the urban hustle and connect with the natural beauty, rich history, 
                and diverse cultures surrounding Pune.
              </p>
              
              <p>
                Founded by a group of passionate travelers and explorers who call Pune home, we've spent years uncovering hidden gems, 
                scenic routes, and memorable experiences that can be enjoyed during a weekend trip from the city.
              </p>
              
              <h2 className="text-2xl font-serif font-bold mt-10 mb-4">Our Mission</h2>
              
              <p>
                We believe that travel experiences shouldn't require extensive planning or long journeys. 
                Some of the most rejuvenating getaways lie just hours away from Pune, in the lap of the Western Ghats, 
                along the Konkan coast, or amidst the historical wonders of Maharashtra.
              </p>
              
              <p>
                Our mission is to:
              </p>
              
              <ul>
                <li>Curate and showcase the best weekend destinations near Pune</li>
                <li>Provide authentic, reliable, and up-to-date travel information</li>
                <li>Promote sustainable and responsible tourism practices</li>
                <li>Support local communities and businesses in tourist destinations</li>
                <li>Inspire Pune residents to explore the wonders in their own backyard</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold mt-10 mb-4">What We Offer</h2>
              
              <p>
                On PuneWeekends, you'll find:
              </p>
              
              <ul>
                <li>Detailed guides to destinations within 500 km of Pune</li>
                <li>Curated travel itineraries for 1-3 day trips</li>
                <li>Information on accommodation, dining, and activities</li>
                <li>Seasonal travel recommendations</li>
                <li>Transportation tips and driving routes</li>
                <li>Local festivals and events you shouldn't miss</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold mt-10 mb-4">Join Our Community</h2>
              
              <p>
                PuneWeekends is more than just a travel resource—it's a community of like-minded explorers. 
                We invite you to share your own travel experiences, tips, and photos from your weekend adventures.
              </p>
              
              <p>
                Follow us on social media to stay updated on new destinations, travel tips, and community events:
              </p>
            </div>
            
            <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <SocialLinks iconSize={24} />
            </div>
            
            <div className="mt-16 p-8 bg-gray-50 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-serif font-bold mb-4">Contact Us</h2>
              <p className="mb-4">
                Have questions, suggestions, or want to collaborate with us? We'd love to hear from you!
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:customercare@aaronmspl.com" className="text-primary hover:underline">
                    customercare@aaronmspl.com
                  </a>
                </li>
                <li>
                  <span className="font-medium">Phone:</span>{' '}
                  +919007638888
                </li>
                <li>
                  <span className="font-medium">Address:</span>{' '}
                  59/1/2C Gariahat Road South, Kolkata - 700 031, West Bengal, India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
