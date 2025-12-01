import React from 'react';
import { Dish } from '../types';
import { Flame, Leaf } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={dish.imageUrl} 
          alt={dish.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          {dish.spicyLevel && dish.spicyLevel > 0 ? (
            <div className="bg-enset-red/90 text-white text-xs px-2 py-1 rounded-full flex items-center shadow-sm backdrop-blur-sm">
              <Flame size={12} className="mr-1" />
              {Array(dish.spicyLevel).fill('🌶️').join('')}
            </div>
          ) : null}
          {dish.isVegan && (
            <div className="bg-green-600/90 text-white text-xs px-2 py-1 rounded-full flex items-center shadow-sm backdrop-blur-sm">
              <Leaf size={12} className="mr-1" />
              Vegan
            </div>
          )}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-enset-green transition-colors">{dish.name}</h3>
          <span className="text-enset-green font-bold text-lg">${dish.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">{dish.description}</p>
        <button className="mt-4 w-full py-2 border border-enset-green text-enset-green rounded-lg hover:bg-enset-green hover:text-white transition-colors text-sm font-semibold">
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default DishCard;