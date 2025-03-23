import React from 'react';

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ name, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <span className="text-red-600 font-bold">{price}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;