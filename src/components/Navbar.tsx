import React, { useState } from 'react';
import { Menu, X, Pizza } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Pizza className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold">Pizza Paradise</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-red-600">Menu</a>
            <a href="#" className="text-gray-700 hover:text-red-600">About</a>
            <a href="#" className="text-gray-700 hover:text-red-600">Contact</a>
            <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600">Menu</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600">Contact</a>
              <button className="w-full mt-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;