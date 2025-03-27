
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-500 py-6',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-serif font-bold tracking-tight text-primary after:hidden"
        >
          PuneWeekends
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'nav-link text-sm font-medium',
                location.pathname === link.path ? 'active' : ''
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span 
              className={cn(
                "h-0.5 bg-primary transition-all duration-300",
                isMobileMenuOpen ? "w-6 rotate-45 translate.y-1.5" : "w-6"
              )} 
            />
            <span 
              className={cn(
                "h-0.5 bg-primary transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : "w-4"
              )} 
            />
            <span 
              className={cn(
                "h-0.5 bg-primary transition-all duration-300",
                isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-1.5" : "w-5"
              )} 
            />
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 pt-24 px-6 transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-lg font-medium nav-link',
                location.pathname === link.path ? 'active' : ''
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
