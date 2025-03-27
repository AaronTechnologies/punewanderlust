
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
}

const TravelCategories: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'hill-stations',
      name: 'Hill Stations',
      description: 'Escape to cooler climes and enjoy spectacular views',
      image: 'https://images.unsplash.com/photo-1598086799526-536572e1ada6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      count: 12
    },
    {
      id: 'beaches',
      name: 'Beaches',
      description: 'Relax by the Arabian Sea on pristine shorelines',
      image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
      count: 8
    },
    {
      id: 'historical-sites',
      name: 'Historical Sites',
      description: 'Explore forts, palaces and ancient treasures',
      image: 'https://images.unsplash.com/photo-1590766165169-9a8ca5a2762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      count: 15
    },
    {
      id: 'wildlife',
      name: 'Wildlife Sanctuaries',
      description: 'Get close to nature and spot exotic animals',
      image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      count: 6
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Explore By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect destination based on your travel preferences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/destinations?category=${category.id}`}
              className="relative overflow-hidden rounded-lg group transition-all duration-500 hover:shadow-xl after:hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-[250px] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-medium mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm mb-3">{category.description}</p>
                <span className="text-xs text-white/70">{category.count} destinations</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;
