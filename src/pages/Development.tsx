
import Navbar from '../components/Navbar';
import { Smartphone, Globe, Database, Cloud } from 'lucide-react';
import { useEffect } from 'react';

const Development = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Development</h1>
          
          <div className="space-y-16">
            <div className="glass-panel p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-yellow-400">Development Process</h2>
              <p className="text-gray-400">
                At inflow, we emphasize the importance of robust testing—we write comprehensive unit tests 
                for all platforms and employ continuous integration and continuous delivery (CI/CD) practices 
                that deliver lasting benefits. We favor Agile methodologies, clear documentation, and minimal, 
                focused meetings to streamline communication, enabling us to deliver high-quality solutions faster 
                and more efficiently.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass-panel p-8 rounded-lg hover:border-yellow-400/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-semibold">Mobile Development</h2>
                </div>
                <p className="text-gray-400">
                  We specialize in native mobile application development, delivering high-performance apps for iOS and Android platforms.
                </p>
              </div>
              
              <div className="glass-panel p-8 rounded-lg hover:border-yellow-400/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-semibold">Web Development</h2>
                </div>
                <p className="text-gray-400">
                  Our expertise in React frameworks enables us to create modern, responsive web applications that deliver exceptional user experiences.
                </p>
              </div>
              
              <div className="glass-panel p-8 rounded-lg hover:border-yellow-400/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-semibold">Backend Systems</h2>
                </div>
                <p className="text-gray-400">
                  We build robust backend systems using .NET and Python, ensuring scalable and secure server-side solutions.
                </p>
              </div>
              
              <div className="glass-panel p-8 rounded-lg hover:border-yellow-400/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Cloud className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-semibold">Cloud Solutions</h2>
                </div>
                <p className="text-gray-400">
                  With experience across major cloud platforms, we ensure your applications are deployed efficiently and securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
