import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { sendBookingToTelegram, BookingData } from '../services/telegramService';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    guests: '2 People',
    dateTime: '',
    message: '',
  });
  const { t, language } = useLanguage();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Send booking to Telegram
      const success = await sendBookingToTelegram(formData);
      
      if (success) {
        setFormStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          guests: '2 People',
          dateTime: '',
          message: '',
        });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      setFormStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <div className="bg-white min-h-screen py-12 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-enset-green mb-4">{t.contact.title}</h1>
          <p className="text-gray-600">{language === 'en' ? "We look forward to serving you." : "እርስዎን ለማገልገል በጉጉት እንጠብቃለን።"}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-12">
            
            {/* Google Map */}
            <div className="bg-gray-200 w-full h-64 rounded-xl overflow-hidden shadow-lg relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2837!2d38.7659082!3d8.9900999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85dfde05fded%3A0xc69be49282f00ace!2sXQR8%2B29R%2C%20Gabon%20St%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1733051936000!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all pointer-events-none">
                <a 
                  href="https://www.google.com/maps/dir//XQR8%2B29R,+Gabon+St,+Addis+Ababa/@8.9086478,38.8310028,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b85dfde05fded:0xc69be49282f00ace!2m2!1d38.7659082!2d8.9900999?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-enset-green px-4 py-2 rounded-md shadow-lg font-bold text-sm hover:scale-105 transition-transform flex items-center pointer-events-auto opacity-0 group-hover:opacity-100"
                >
                  <MapPin size={16} className="mr-2" /> {language === 'en' ? "Open in Google Maps" : "በ Google Maps ይክፈቱ"}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-enset-cream p-3 rounded-full mr-4 text-enset-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t.contact.address}</h3>
                  <p className="text-gray-600 text-sm">XQR8+29R, Gabon St<br/>Addis Ababa<br/>Ethiopia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-enset-cream p-3 rounded-full mr-4 text-enset-green">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t.contact.phone}</h3>
                  <p className="text-gray-600 text-sm">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-enset-cream p-3 rounded-full mr-4 text-enset-green">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t.contact.email}</h3>
                  <p className="text-gray-600 text-sm">hello@ensetrestaurant.com<br/>events@ensetrestaurant.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-enset-cream p-3 rounded-full mr-4 text-enset-green">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t.contact.hours}</h3>
                  <p className="text-gray-600 text-sm">Mon-Thu: 11am - 10pm<br/>Fri-Sat: 11am - 11pm<br/>Sun: 10am - 9:30pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-enset-cream p-8 md:p-12 rounded-2xl shadow-sm border border-enset-green/10">
            <h2 className="text-2xl font-serif font-bold text-enset-green mb-6">{language === 'en' ? "Make a Reservation or Enquiry" : "ቦታ ያስይዙ ወይም ይጠይቁ"}</h2>
            
            {formStatus === 'success' ? (
              <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center animate-in fade-in">
                <h3 className="font-bold text-xl mb-2">{language === 'en' ? "Booking Received! 🎉" : "ቦታ ተይዟል! 🎉"}</h3>
                <p>{language === 'en' ? "Thank you for your reservation. We've received your booking and will confirm shortly via email or phone." : "ስለቦታ ማስያዝዎ እናመሰግናለን። ጥያቄዎ ደርሶናል፣ በቅርቡ በኢሜይል ወይም በስልክ እናረጋግጣለን።"}</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-4 text-sm font-bold underline"
                >
                  {language === 'en' ? "Make another reservation" : "ሌላ ቦታ ያስይዙ"}
                </button>
              </div>
            ) : formStatus === 'error' ? (
              <div className="bg-red-100 text-red-800 p-6 rounded-lg text-center animate-in fade-in">
                <h3 className="font-bold text-xl mb-2">{language === 'en' ? "Oops! Something went wrong" : "ይቅርታ! ችግር ተፈጥሯል"}</h3>
                <p>{language === 'en' ? "We couldn't process your booking. Please try again or call us directly." : "ቦታ ማስያዝዎን ማስተናገድ አልቻልንም። እባክዎ እንደገና ይሞክሩ ወይም በቀጥታ ይደውሉልን።"}</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-4 text-sm font-bold underline"
                >
                  {language === 'en' ? "Try again" : "እንደገና ይሞክሩ"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.name}</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-enset-green focus:border-transparent outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.email}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-enset-green focus:border-transparent outline-none transition-all" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.phone}</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-enset-green focus:border-transparent outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{language === 'en' ? "Guests" : "እንግዶች"}</label>
                    <select 
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-enset-green focus:border-transparent outline-none transition-all"
                    >
                      <option>{language === 'en' ? "2 People" : "2 ሰዎች"}</option>
                      <option>{language === 'en' ? "3 People" : "3 ሰዎች"}</option>
                      <option>{language === 'en' ? "4 People" : "4 ሰዎች"}</option>
                      <option>{language === 'en' ? "5+ People" : "5+ ሰዎች"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{language === 'en' ? "Date & Time" : "ቀን እና ሰዓት"}</label>
                  <input 
                    type="datetime-local" 
                    name="dateTime"
                    value={formData.dateTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-enset-green focus:border-transparent outline-none transition-all" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{language === 'en' ? "Special Requests (Optional)" : "ልዩ ጥያቄዎች (አማራጭ)"}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4} 
                    placeholder={language === 'en' ? "Dietary restrictions, special occasions, seating preferences..." : "የአመጋገብ ገደቦች፣ ልዩ ዝግጅቶች፣ የመቀመጫ ምርጫዎች..."}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-enset-green focus:border-transparent outline-none transition-all"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-enset-green text-white font-bold py-3 rounded-md hover:bg-green-900 transition-all flex justify-center items-center shadow-md active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
                    language === 'en' ? 'Sending...' : 'በመላክ ላይ...'
                  ) : (
                    <>{t.contact.send} <Send size={18} className="ml-2" /></>
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