
import Navbar from '../components/Navbar';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
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
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Company Details</h2>
                <p className="text-gray-400">ID: 22173111</p>
              </div>
            </div>
            
            <div>
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.9891877914447!2d14.389545776932416!3d50.101780071811186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b952c3a17b923%3A0x8b9b52d358e2fa2!2zVXJhbHNrw6EgNjg5LzcsIDE2MCAwMCBQcmFoYSA2LURlanZpY2UsIEN6ZWNoaWE!5e0!3m2!1sen!2sus!4v1709764429544!5m2!1sen!2sus"
                className="w-full h-[400px] rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
