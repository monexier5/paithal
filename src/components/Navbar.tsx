import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Mountain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <Mountain className={`h-8 w-8 ${isScrolled ? 'text-emerald-800' : 'text-white'}`} />
            <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-emerald-800' : 'text-white'}`}>
              Paithal Hill
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`hover:text-emerald-700 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Home</a>
            <a href="#about" className={`hover:text-emerald-700 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>About Us</a>
            <a href="#rooms" className={`hover:text-emerald-700 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Rooms</a>
            <a href="#gallery" className={`hover:text-emerald-700 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Gallery</a>
            <a href="#activities" className={`hover:text-emerald-700 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Activities</a>
            <a href="#contact" className={`hover:text-emerald-700 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Contact Us</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-700`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-emerald-700">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-emerald-700">About Us</a>
            <a href="#rooms" className="block px-3 py-2 text-gray-700 hover:text-emerald-700">Rooms</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-emerald-700">Gallery</a>
            <a href="#activities" className="block px-3 py-2 text-gray-700 hover:text-emerald-700">Activities</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-700">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;