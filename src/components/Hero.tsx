
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxEffect = scrollPosition * 0.4;
      
      // Apply parallax effect to background
      heroRef.current.style.backgroundPositionY = `${parallaxEffect}px`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="text-white/90 uppercase tracking-widest mb-3">Explore Within 500 km</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Discover Perfect Weekend Getaways from Pune
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Escape the city hustle and explore the beauty within reach. Your next adventure awaits just hours away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/destinations" 
              className="bg-white text-primary font-medium px-8 py-3 rounded-md transition-all hover:bg-primary hover:text-white after:hidden"
            >
              Explore Destinations
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent text-white border border-white font-medium px-8 py-3 rounded-md transition-all hover:bg-white/10 after:hidden"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
