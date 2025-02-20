
import Navbar from '../components/Navbar';

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Our Services</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Mobile Development</h2>
              <p className="text-gray-400">
                We specialize in native mobile application development, delivering high-performance apps for iOS and Android platforms.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Web Development</h2>
              <p className="text-gray-400">
                Our expertise in React frameworks enables us to create modern, responsive web applications that deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Backend Systems</h2>
              <p className="text-gray-400">
                We build robust backend systems using .NET and Python, ensuring scalable and secure server-side solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Cloud Solutions</h2>
              <p className="text-gray-400">
                With experience across major cloud platforms, we ensure your applications are deployed efficiently and securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
