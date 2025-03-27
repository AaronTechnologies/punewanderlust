import React from 'react';
import { Link } from 'react-router-dom';

interface Destination {
  id: string;
  name: string;
  distance: string;
  description: string;
  image: string;
  category: string;
}

const FeaturedDestinations: React.FC = () => {
  const destinations: Destination[] = [
    {
      id: '1',
      name: 'Lonavala',
      distance: '65 km',
      description: 'A picturesque hill station known for its natural beauty, waterfalls, and lush green valleys.',
      image: 'https://images.unsplash.com/photo-1548552619-c6e13362070a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      category: 'hill-stations'
    },
    {
      id: '2',
      name: 'Mahabaleshwar',
      distance: '120 km',
      description: 'Famous for strawberries and panoramic views, this hill station offers lush green forests and breathtaking valleys.',
      image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      category: 'hill-stations'
    },
    {
      id: '3',
      name: 'Alibaug',
      distance: '95 km',
      description: 'A coastal town with beautiful beaches, historic forts, and tranquil ambiance.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      category: 'beaches'
    },
    {
      id: '4',
      name: 'Ajanta & Ellora Caves',
      distance: '240 km',
      description: 'UNESCO World Heritage Sites with ancient Buddhist cave temples and sculptures.',
      image: 'https://images.unsplash.com/photo-1563204622-4c0fba3c3c34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      category: 'historical-sites'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked destinations within 500 kilometers of Pune, perfect for your next weekend getaway.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Link 
              key={destination.id}
              to={`/destinations/${destination.id}`}
              className="destination-card group after:hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-[400px] overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="destination-card-content">
                <span className="inline-block px-3 py-1 bg-white/80 text-primary text-xs font-medium rounded mb-3">
                  {destination.distance} from Pune
                </span>
                <h3 className="text-xl font-medium text-white mb-1">{destination.name}</h3>
                <p className="text-white/80 text-sm line-clamp-2">{destination.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/destinations" 
            className="inline-block border border-primary text-primary font-medium px-8 py-3 rounded-md transition-all hover:bg-primary hover:text-white after:hidden"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
