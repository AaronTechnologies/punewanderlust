import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-primary after:hidden">
              PuneWeekends
            </Link>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Your guide to the best weekend getaways from Pune. Discover hidden gems within 500 kilometers of the city.
            </p>
            <SocialLinks className="mt-6" />
          </div>
          
          <div className="col-span-1">
            <h4 className="text-sm uppercase tracking-wider font-medium text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary text-sm">Home</Link></li>
              <li><Link to="/destinations" className="text-gray-600 hover:text-primary text-sm">Destinations</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary text-sm">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-sm uppercase tracking-wider font-medium text-gray-900 mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/destinations?category=hill-stations" className="text-gray-600 hover:text-primary text-sm">Hill Stations</Link></li>
              <li><Link to="/destinations?category=beaches" className="text-gray-600 hover:text-primary text-sm">Beaches</Link></li>
              <li><Link to="/destinations?category=historical-sites" className="text-gray-600 hover:text-primary text-sm">Historical Sites</Link></li>
              <li><Link to="/destinations?category=wildlife" className="text-gray-600 hover:text-primary text-sm">Wildlife Sanctuaries</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-sm uppercase tracking-wider font-medium text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-600 text-sm">
                <span className="block font-medium text-gray-900">Phone:</span>
                +91 9830273758 / +91 9007138440
              </li>
              <li className="text-gray-600 text-sm">
                <span className="block font-medium text-gray-900">Email:</span>
                <a href="mailto:kolkataweekends@gmail.com" className="hover:text-primary">kolkataweekends@gmail.com</a>
              </li>
              <li className="text-gray-600 text-sm">
                <span className="block font-medium text-gray-900">Address:</span>
                59/1/2C Gariahat Road South<br />
                Kolkata - 700 031<br />
                West Bengal, India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} PuneWeekends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
