import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Paithal Hill</h3>
            <p className="text-gray-400">Experience luxury in nature's lap</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Twitter />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#rooms" className="text-gray-400 hover:text-white transition-colors">Rooms</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Paithal Hill, [Location]</li>
              <li>Phone: +1 234 567 890</li>
              <li>Email: info@paithalhill.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
              />
              <button
                type="submit"
                className="bg-emerald-600 px-4 py-2 rounded-r-md hover:bg-emerald-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Paithal Hill Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;