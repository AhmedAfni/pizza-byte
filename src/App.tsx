import React from 'react';
import { Pizza, Phone, Clock, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import MenuCard from './components/MenuCard';

const pizzas = [
  {
    name: "Margherita Supreme",
    description: "Fresh basil, mozzarella, tomatoes on our signature crust",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Pepperoni Paradise",
    description: "Double pepperoni, extra cheese, Italian herbs",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Veggie Delight",
    description: "Bell peppers, mushrooms, onions, olives, fresh tomatoes",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=600&h=400"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2000&q=80" 
            alt="Pizza Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Authentic Italian Pizza</h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">Experience the taste of Naples, right in your neighborhood</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Order Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Hot and fresh, delivered in 30 minutes</p>
          </div>
          <div className="text-center">
            <Pizza className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">Locally sourced, premium quality</p>
          </div>
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold mb-2">Wide Coverage</h3>
            <p className="text-gray-600">Serving the entire city</p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Signature Pizzas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pizzas.map((pizza, index) => (
              <MenuCard key={index} {...pizza} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  123 Pizza Street, Food City, FC 12345
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-red-600" />
                  (555) 123-4567
                </p>
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-red-600" />
                  Mon-Sun: 11:00 AM - 11:00 PM
                </p>
              </div>
              <div className="mt-8 flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-red-600">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&h=600" 
                alt="Restaurant Interior" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Pizza Paradise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;