
import { useEffect } from 'react';
import { CircleArrowUp, Check, ArrowRight, Activity } from 'lucide-react';
import Navbar from '../components/Navbar';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((element) => {
      element.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-12">
            <img 
              src="/lovable-uploads/74cc2065-6695-4ce7-835a-b2643c862647.png" 
              alt="Inflow Logo" 
              className="w-48 md:w-64 lg:w-80 h-auto mx-auto mb-8 object-contain"
            />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Fast, Smart, and Built to Last
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              At inflow, we specialise in agile development and long-term support for digital products, helping businesses bring their visions to life with smart, fast, and adaptable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-black/60 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "End-to-End Development",
                description: "We work closely with clients through every phase—from initial tech discovery and design to the full development of IT systems using mobile and web technologies.",
                icon: <CircleArrowUp className="w-8 h-8 text-yellow-400" />
              },
              {
                title: "Long Term Support",
                description: "Our service desk is available seven days a week to provide continuous monitoring, maintenance, and small-scale enhancements.",
                icon: <CircleArrowUp className="w-8 h-8 text-yellow-400" />
              },
              {
                title: "Dedicated Senior Team",
                description: "Our team consists exclusively of senior professionals who collaborate on multiple projects over the long term.",
                icon: <CircleArrowUp className="w-8 h-8 text-yellow-400" />
              },
              {
                title: "Tech Driven Mindset",
                description: "We evaluate emerging tech for faster quality delivery, driven by innovative libraries, AI, and open source tools.",
                icon: <CircleArrowUp className="w-8 h-8 text-yellow-400" />
              }
            ].map((item, index) => (
              <div key={index} className="fade-in-section p-6 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Our Values</h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            We act honestly, build trust, and get straight to the point. We stay "in shape" when it comes to technology – it is our passion and we stay up to date on what's happening. We're not nerds you can't communicate with; we speak your language.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="fade-in-section glass-panel p-8 rounded-lg hover:bg-black/70 transition-colors">
              <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-400">Building trust through honest communication and clear actions</p>
            </div>

            <div className="fade-in-section glass-panel p-8 rounded-lg hover:bg-black/70 transition-colors">
              <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Straight to the point</h3>
              <p className="text-gray-400">Direct communication without unnecessary complexity</p>
            </div>

            <div className="fade-in-section glass-panel p-8 rounded-lg hover:bg-black/70 transition-colors">
              <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">We thrive in the flow state</h3>
              <p className="text-gray-400">Peak performance through focused and efficient development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-black/60 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Team</h2>
          
          <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
            <p className="text-lg md:text-xl text-gray-300">
              Founded by three partners. After many years in corporate consultancies, we decided to take things into our own hands.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              We have grown tired of the inefficiency and corporate rigidness when designing and developing exciting digital products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Jiří Buček",
                role: "Managing Director",
                image: "/lovable-uploads/019f2cea-e639-4352-b79b-09a2c223ca01.png"
              },
              {
                name: "Jason Nel",
                role: "Commercial Director",
                image: "/lovable-uploads/28a5f1e5-7bfe-441f-b4d1-8f73f680760d.png"
              },
              {
                name: "Martin Majer",
                role: "Operations Director",
                image: "/lovable-uploads/22cb0af3-eb12-4617-8ec1-936ca7d5bb23.png"
              }
            ].map((member, index) => (
              <div key={index} className="fade-in-section text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
