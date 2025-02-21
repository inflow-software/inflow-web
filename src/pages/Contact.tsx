import Navbar from '../components/Navbar';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const preventDefault = (e: TouchEvent) => {
      e.preventDefault();
    };

    document.body.addEventListener('touchstart', preventDefault, { passive: false });
    return () => {
      document.body.removeEventListener('touchstart', preventDefault);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="glass-panel p-12 rounded-2xl h-full">
              <div className="space-y-8">
                <p className="text-lg text-gray-300 mb-8">
                  Our headquarters is located in a beautiful city of Prague. Below you can find the address for any correspondence and contacts for our Sales representative.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-yellow-400" />
                    <a href="mailto:jason.nel@inflow.software" className="hover:text-yellow-400 transition-colors">
                      jason.nel@inflow.software
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="w-6 h-6 text-yellow-400" />
                    <a href="https://www.linkedin.com/company/inflow-software-cz/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                    <address className="not-italic">
                      Uralská 689/7, 160 00, Prague
                    </address>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <h2 className="text-2xl font-semibold">Company Details</h2>
                  <div className="space-y-2 text-gray-400">
                    <p>inflow software s.r.o.</p>
                    <p>ID: 22173111</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prague Image */}
            <div className="aspect-[16/9] relative">
              <div className={`
                absolute inset-0 bg-gray-900/20 backdrop-blur-sm
                transition-opacity duration-500
                ${imageLoaded ? 'opacity-0' : 'opacity-100'}
              `} />
              <img 
                src="/lovable-uploads/bcb97545-ecbd-4007-9310-bb7720f70110.png" 
                alt="Charles Bridge in Prague" 
                className={`
                  absolute inset-0 w-full h-full object-fill rounded-2xl shadow-2xl
                  transition-all duration-700 transform
                  ${imageLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}
                `}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
