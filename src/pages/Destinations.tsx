import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';

interface Destination {
  id: string;
  name: string;
  location: string;
  distance: string;
  description: string;
  image: string;
  category: string;
}

const Destinations = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState<string>(categoryFilter || 'all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (categoryFilter) {
      setActiveCategory(categoryFilter);
    }
  }, [categoryFilter]);
  
  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'hill-stations', name: 'Hill Stations' },
    { id: 'beaches', name: 'Beaches' },
    { id: 'historical-sites', name: 'Historical Sites' },
    { id: 'wildlife', name: 'Wildlife Sanctuaries' },
  ];
  
  const destinations: Destination[] = [
    {
      id: '1',
      name: 'Lonavala',
      location: 'Western Ghats',
      distance: '65 km from Pune',
      description: 'A picturesque hill station known for its natural beauty, waterfalls, and lush green valleys.',
      image: 'https://images.unsplash.com/photo-1548552619-c6e13362070a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      category: 'hill-stations'
    },
    {
      id: '2',
      name: 'Mahabaleshwar',
      location: 'Western Ghats',
      distance: '120 km from Pune',
      description: 'Famous for strawberries and panoramic views, this hill station offers lush green forests and breathtaking valleys.',
      image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      category: 'hill-stations'
    },
    {
      id: '3',
      name: 'Alibaug',
      location: 'Konkan Coast',
      distance: '95 km from Pune',
      description: 'A coastal town with beautiful beaches, historic forts, and tranquil ambiance.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      category: 'beaches'
    },
    {
      id: '4',
      name: 'Ajanta & Ellora Caves',
      location: 'Aurangabad',
      distance: '240 km from Pune',
      description: 'UNESCO World Heritage Sites with ancient Buddhist cave temples and sculptures.',
      image: 'https://images.unsplash.com/photo-1563204622-4c0fba3c3c34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      category: 'historical-sites'
    },
    {
      id: '5',
      name: 'Khandala',
      location: 'Western Ghats',
      distance: '75 km from Pune',
      description: 'A twin hill station to Lonavala, offering stunning views of valleys and waterfalls.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80',
      category: 'hill-stations'
    },
    {
      id: '6',
      name: 'Raigad Fort',
      location: 'Mahad',
      distance: '130 km from Pune',
      description: 'Historic fort that was the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj.',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      category: 'historical-sites'
    },
    {
      id: '7',
      name: 'Diveagar Beach',
      location: 'Raigad District',
      distance: '170 km from Pune',
      description: 'A pristine beach known for its clean shoreline, swaying palm trees, and peaceful atmosphere.',
      image: 'https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'beaches'
    },
    {
      id: '8',
      name: 'Bhimashankar Wildlife Sanctuary',
      location: 'Western Ghats',
      distance: '100 km from Pune',
      description: 'Dense forest area home to the Indian Giant Squirrel and various other wildlife species.',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      category: 'wildlife'
    }
  ];
  
  const filteredDestinations = activeCategory === 'all' 
    ? destinations 
    : destinations.filter(destination => destination.category === activeCategory);
  
  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Explore Destinations</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover perfect weekend getaways within 500 kilometers of Pune
            </p>
          </div>
          
          <div className="mb-12 flex justify-center items-center overflow-x-auto whitespace-nowrap py-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.id === 'all' ? '/destinations' : `/destinations?category=${category.id}`}
                className={`mx-2 px-5 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                } after:hidden`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Link>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredDestinations.map((destination, index) => (
              <Link
                key={destination.id}
                to={`/destinations/${destination.id}`}
                className="group animate-fade-up after:hidden"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="destination-card h-full">
                  <div className="h-[300px] overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="destination-card-content">
                    <span className="inline-block px-3 py-1 bg-white/80 text-primary text-xs font-medium rounded mb-3">
                      {destination.distance}
                    </span>
                    <h3 className="text-xl font-medium text-white mb-1">{destination.name}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{destination.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredDestinations.length === 0 && (
            <div className="text-center py-12 animate-fade-up">
              <p className="text-gray-500 text-lg">No destinations found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Destinations;
