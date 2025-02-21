
import Navbar from '../components/Navbar';
import { Clock, Users, Server, Laptop, MessageSquare, ShieldCheck, LifeBuoy } from 'lucide-react';
import { useEffect } from 'react';

const ServiceDesk = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Service Desk</h1>
          
          <div className="space-y-16">
            <div className="glass-panel p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-yellow-400">Reliable IT Support for the Long Haul</h2>
              <p className="text-gray-400">
                At our company, we believe that solid, long-term support is the cornerstone of any successful IT project. 
                We offer a dedicated service desk available seven days a week during office hours, designed to ensure your 
                systems keep running smoothly.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-lg space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Our Support Structure</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">L1 Support</h3>
                      <p className="text-gray-400">
                        Our first-line team is ready to respond within two hours, providing prompt 
                        communication and handling everyday queries.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">L2 Developer-Level Support</h3>
                      <p className="text-gray-400">
                        For more technical issues, our experienced developers are on hand to 
                        deliver in-depth solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-panel p-6 rounded-lg hover:border-yellow-400/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Laptop className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold">Mobile Apps</h3>
                </div>
                <p className="text-gray-400">
                  Comprehensive support for iOS and Android applications.
                </p>
              </div>
              
              <div className="glass-panel p-6 rounded-lg hover:border-yellow-400/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold">Web Tech</h3>
                </div>
                <p className="text-gray-400">
                  Maintenance for modern web applications and frameworks.
                </p>
              </div>
              
              <div className="glass-panel p-6 rounded-lg hover:border-yellow-400/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold">Business Hours</h3>
                </div>
                <p className="text-gray-400">
                  Support available 7 days a week during business hours.
                </p>
              </div>
              
              <div className="glass-panel p-6 rounded-lg hover:border-yellow-400/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold">Team Handover</h3>
                </div>
                <p className="text-gray-400">
                  Smooth transition for projects from other development teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDesk;
