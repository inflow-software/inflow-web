
import Navbar from '../components/Navbar';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Contact Us</h1>
          
          <div className="max-w-2xl mx-auto glass-panel p-12 rounded-lg">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-yellow-400" />
                  <a href="mailto:jason.nel@inflow.software" className="hover:text-yellow-400 transition-colors">
                    jason.nel@inflow.software
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <address className="not-italic">
                    Uralská 689/7, 160 00, Praha 6
                  </address>
                </div>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-white/10">
                <h2 className="text-2xl font-semibold">Company Details</h2>
                <p className="text-gray-400">ID: 22173111</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
