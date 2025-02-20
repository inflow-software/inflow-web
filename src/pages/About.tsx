
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12">About Us</h1>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-400">
              Our team brings together over 30 years of combined experience in IT services, Legal, Commercial and operations.
            </p>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Our Approach</h2>
              <p className="text-gray-400">
                We do things in a way that truly makes sense and feels comprehensive. 
                We act honestly, build trust, and get straight to the point. We stay "in shape" 
                when it comes to technology – it is our passion and we stay up to date on what's happening.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Development Process</h2>
              <p className="text-gray-400">
                At inflow, we emphasize the importance of robust testing—we write comprehensive unit tests 
                for all platforms and employ continuous integration and continuous delivery (CI/CD) practices 
                that deliver lasting benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
