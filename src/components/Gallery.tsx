import React from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
    alt: "Resort Exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800",
    alt: "Luxury Suite"
  },
  {
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800",
    alt: "Mountain View"
  },
  {
    url: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=800",
    alt: "Restaurant"
  },
  {
    url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800",
    alt: "Spa"
  },
  {
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800",
    alt: "Pool"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600">Discover the beauty of Paithal Hill Resort</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden group rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;