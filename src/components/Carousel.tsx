import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: "https://paithalhill.com/assets/images/dji-439-1600x900.jpg",
    title: "Welcome to Paithal Hills",
    subtitle: "Experience Wilderness"
  },
  {
    url: "https://paithalhill.com/assets/images/dji-428-2000x1125.jpg",
    title: "Spacious Accommodations",
    subtitle: "Comfort Meets Elegance"
  },
  {
    url: "https://paithalhill.com/assets/images/dji-420-2000x1125.jpg",
    title: "Breathtaking Views",
    subtitle: "Wake Up to Serenity"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 transition-all ease-in-out"
      >
        <div className="absolute inset-0 bg-black/30">
          <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{slides[currentIndex].title}</h1>
            <p className="text-xl md:text-2xl">{slides[currentIndex].subtitle}</p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`
                h-2 w-2 rounded-full transition-all cursor-pointer
                ${currentIndex === index ? 'bg-white w-4' : 'bg-white/50'}
              `}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;