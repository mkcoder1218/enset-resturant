import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { ViewState } from '../types';
import { NAV_LINKS } from '../constants';

interface LayoutProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, onChangeView, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ViewState) => {
    onChangeView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-enset-cream/95 backdrop-blur-sm border-b border-enset-green/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => handleNavClick('HOME')}
            >
              <div className="w-10 h-10 bg-enset-green rounded-tl-xl rounded-br-xl mr-3 flex items-center justify-center transform group-hover:rotate-3 transition-transform">
                <span className="text-enset-gold text-2xl font-serif font-bold">E</span>
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-enset-green tracking-tight">ENSET</h1>
                <p className="text-xs text-enset-red font-medium tracking-widest uppercase">Ethiopian Cuisine</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.value}
                  onClick={() => handleNavClick(link.value as ViewState)}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                    currentView === link.value 
                      ? 'text-enset-red border-b-2 border-enset-red' 
                      : 'text-gray-600 hover:text-enset-green'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('CONTACT')}
                className="bg-enset-green text-white px-5 py-2 rounded-md font-medium text-sm hover:bg-green-900 transition-colors shadow-lg shadow-green-900/20"
              >
                Book a Table
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-enset-green hover:text-enset-red transition-colors"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.value}
                  onClick={() => handleNavClick(link.value as ViewState)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                     currentView === link.value
                      ? 'bg-enset-cream text-enset-red'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-enset-green'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <button 
                  onClick={() => handleNavClick('CONTACT')}
                  className="w-full bg-enset-red text-white px-4 py-3 rounded-md font-bold shadow-md active:scale-95 transition-transform"
                >
                  Book a Table
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-enset-green text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Brand Info */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-enset-gold mb-4">Enset Restaurant</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Authentic Ethiopian flavors in the heart of the city. 
                Experience the tradition of gursha and the warmth of our hospitality.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-enset-gold hover:text-enset-green transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-enset-gold hover:text-enset-green transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-enset-gold hover:text-enset-green transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-enset-gold">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 text-enset-gold flex-shrink-0" size={20} />
                  <span className="text-gray-300">123 Meskel Flower Road,<br/>Addis Ababa District, City 10001</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 text-enset-gold flex-shrink-0" size={20} />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 text-enset-gold flex-shrink-0" size={20} />
                  <span className="text-gray-300">hello@ensetrestaurant.com</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-enset-gold">Opening Hours</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon - Thu</span>
                  <span>11:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Fri - Sat</span>
                  <span>11:00 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Sunday</span>
                  <span>10:00 AM - 9:30 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Enset Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;