import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import DishCard from '../components/DishCard';
import { DishCategory } from '../types';

const CATEGORIES: DishCategory[] = ['Meat', 'Vegetarian', 'Breakfast', 'Drinks'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<DishCategory | 'All'>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-12 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-enset-green mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the vibrant tastes of Ethiopia. All our dishes are served with Injera, 
            our traditional sourdough flatbread made from Teff flour.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              activeCategory === 'All' 
                ? 'bg-enset-red text-white shadow-lg scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Items
          </button>
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === category 
                  ? 'bg-enset-red text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-enset-green mb-2">Dietary Information</h3>
          <p className="text-gray-600 text-sm">
            Our Injera is naturally gluten-free (ask for pure Teff). 
            We use separate cookware for vegetarian dishes to ensure they are 100% vegan friendly (Fasting food).
            Please inform your server of any allergies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;