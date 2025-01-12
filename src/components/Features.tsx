import React from 'react';
import { Mountain, Hotel, MapPin, Trees } from 'lucide-react';

const features = [
  {
    icon: <Mountain className="w-12 h-12 text-emerald-600" />,
    title: "Scenic Location",
    description: "Nestled in the serene hills with panoramic views of the surrounding landscape"
  },
  {
    icon: <Hotel className="w-12 h-12 text-emerald-600" />,
    title: "Luxury Rooms",
    description: "Elegantly designed rooms with modern amenities and comfortable furnishings"
  },
  {
    icon: <Trees className="w-12 h-12 text-emerald-600" />,
    title: "Nature Trails",
    description: "Explore the natural beauty through our carefully curated hiking trails"
  },
  {
    icon: <MapPin className="w-12 h-12 text-emerald-600" />,
    title: "Local Attractions",
    description: "Close proximity to cultural sites and adventure activities"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">Experience the perfect blend of luxury and nature</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;