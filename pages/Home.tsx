import React from 'react';
import { MENU_ITEMS } from '../constants';
import DishCard from '../components/DishCard';
import { ViewState } from '../types';
import { ArrowRight, Star, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HomeProps {
  onChangeView: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ onChangeView }) => {
  const featuredDishes = MENU_ITEMS.slice(0, 3);
  const { t, language } = useLanguage();

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/unnamed.webp" 
            alt="Ethiopian Feast" 
            crossOrigin="anonymous"
            className="w-full h-full object-cover"
            
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-enset-gold font-bold tracking-wider uppercase mb-4 block animate-in slide-in-from-left-10 duration-700 delay-100">{t.home.welcome}</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-in slide-in-from-left-10 duration-700 delay-200">
              {language === 'en' ? (
                <>Taste the Soul <br/> of <span className="text-enset-gold">Ethiopia</span></>
              ) : (
                <><span className="text-enset-gold">የኢትዮጵያን</span> <br/> ጣዕም ይለማመዱ</>
              )}
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed animate-in slide-in-from-left-10 duration-700 delay-300">
              {language === 'en' 
                ? "Experience authentic flavors, traditional communal dining, and the warmth of East African hospitality. Join us for a journey of spice and culture."
                : "ትክክለኛ ጣዕሞችን፣ ባህላዊ የጋራ መመገብን እና የምስራቅ አፍሪካን እንግዳ ተቀባይነት ይለማመዱ። ለቅመም እና ለባህል ጉዞ ይቀላቀሉን።"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left-10 duration-700 delay-400">
              <button 
                onClick={() => onChangeView('MENU')}
                className="bg-enset-gold text-enset-green px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg flex items-center justify-center"
              >
                {t.home.exploreMenu} <ArrowRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={() => onChangeView('CONTACT')}
                className="border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-enset-green transition-colors flex items-center justify-center"
              >
                {t.home.bookTable}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-enset-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-enset-gold"></div>
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwL-UcUo8ELOw4dM0ytaf5SB6QTLGNPYmvRyh9bF4cb_KHE3eDQxpLWXVDHHRZibAtn5D5vwWZShIij4INNZGYKDQGt0CIIyQpTosFYXSnJM9bhpDLM3s__omV_rytoPUFw_gue-w=s1360-w1360-h1020-rw" 
                alt="Restaurant Interior" 
                className="rounded-lg shadow-2xl relative z-10 w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-enset-red"></div>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 text-enset-green mb-4">
                <UtensilsCrossed size={20} />
                <span className="font-bold uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Tradition on Every Plate</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Named after the "false banana" plant that is a staple of Ethiopian agriculture, Enset Restaurant is dedicated to preserving the rich culinary heritage of the Horn of Africa.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We grind our own spices for the perfect Berbere blend and ferment our Injera batter for three days to achieve that authentic tangy flavor and sponge-like texture perfect for scooping up our savory stews.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <span className="block text-3xl font-bold text-enset-red">15+</span>
                  <span className="text-sm text-gray-500">Years of Service</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-enset-red">50+</span>
                  <span className="text-sm text-gray-500">Traditional Recipes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-enset-red font-bold uppercase tracking-wider text-sm">Chef's Selection</span>
            <h2 className="text-4xl font-serif font-bold text-enset-green mt-2">{language === 'en' ? 'Featured Dishes' : 'ልዩ ምግቦች'}</h2>
            <div className="w-24 h-1 bg-enset-gold mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map(dish => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onChangeView('MENU')}
              className="inline-flex items-center text-enset-green font-bold text-lg hover:text-enset-red transition-colors"
            >
              {t.home.exploreMenu} <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial / Pattern strip */}
      <section className="py-16 bg-enset-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6 text-enset-gold">
            <Star fill="currentColor" size={24} />
            <Star fill="currentColor" size={24} />
            <Star fill="currentColor" size={24} />
            <Star fill="currentColor" size={24} />
            <Star fill="currentColor" size={24} />
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed mb-6">
            "The most authentic Doro Wat I've had outside of Addis Ababa. The atmosphere is magical and the coffee ceremony is a must-try experience."
          </blockquote>
          <cite className="text-enset-gold font-bold not-italic">- Sarah Jenkins, Food Critic</cite>
        </div>
      </section>
    </div>
  );
};

export default Home;