import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen py-12 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-enset-green mb-4">Visit Us</h1>
          <p className="text-gray-600">We look forward to serving you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-12">
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 w-full h-64 rounded-xl overflow-hidden shadow-inner relative group">
              <img 
                src="https://picsum.photos/seed/map/800/400" 
                alt="Map Location" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-enset-green px-4 py-2 rounded-md shadow-lg font-bold text-sm hover:scale-105 transition-transform flex items-center">
                  <MapPin size={16} className="mr-2" /> Open in Maps
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-enset-cream p-3 rounded-full mr-4 text-enset-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p className="text-gray-600 text-sm">123 Meskel Flower Road<br/>Addis Ababa District<br/>City 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-enset-cream p-3 rounded-full mr-4 text-enset-green">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600 text-sm">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-enset-cream p-3 rounded-full mr-4 text-enset-green">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">hello@ensetrestaurant.com<br/>events@ensetrestaurant.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-enset-cream p-3 rounded-full mr-4 text-enset-green">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Hours</h3>
                  <p className="text-gray-600 text-sm">Mon-Thu: 11am - 10pm<br/>Fri-Sat: 11am - 11pm<br/>Sun: 10am - 9:30pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-enset-cream p-8 md:p-12 rounded-2xl shadow-sm border border-enset-green/10">
            <h2 className="text-2xl font-serif font-bold text-enset-green mb-6">Make a Reservation or Enquiry</h2>
            
            {formStatus === 'success' ? (
              <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center animate-in fade-in">
                <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                <p>Thank you for contacting us. We will get back to you shortly to confirm your table.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-4 text-sm font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-enset-green focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-enset-green focus:border-transparent outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-enset-green focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-enset-green focus:border-transparent outline-none transition-all">
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
                  <input type="datetime-local" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-enset-green focus:border-transparent outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-enset-green focus:border-transparent outline-none transition-all"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-enset-green text-white font-bold py-3 rounded-md hover:bg-green-900 transition-all flex justify-center items-center shadow-md active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>Send Message <Send size={18} className="ml-2" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;