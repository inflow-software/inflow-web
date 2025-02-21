import { useEffect } from 'react';
import { CircleArrowUp, Check, ArrowRight, Activity } from 'lucide-react';
import React from 'react';

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
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="relative z-10 h-[120px] md:h-[160px] lg:h-[200px] mb-12 flex items-center justify-center">
              <img 
                src="/lovable-uploads/c7b2ac4b-d78d-472a-9e1c-c460e73d818a.png" 
                alt="Inflow Logo" 
                className="w-48 md:w-64 lg:w-80 h-auto object-contain animate-[fadeIn_1s_ease-out] opacity-0"
                style={{ animationFillMode: 'forwards' }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
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
          
          <div className="max-w-3xl mx-auto mb-16 space-y-8">
            <div className="space-y-4 text-center">
              <p className="text-lg text-gray-300">
                Founded by three partners.
              </p>
              <p className="text-lg text-gray-300">
                After many years in corporate consultancies, we decided to take things into our own hands.
              </p>
              <p className="text-lg text-gray-300">
                We have grown tired of the inefficiency and corporate rigidness when designing and developing exciting digital products.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              {
                name: "Jiří Buček",
                role: "Managing Director",
                image: "/lovable-uploads/22cb0af3-eb12-4617-8ec1-936ca7d5bb23.png",
                description: "Leading our strategic vision and technical direction"
              },
              {
                name: "Jason Nel",
                role: "Commercial Director",
                image: "/lovable-uploads/28a5f1e5-7bfe-441f-b4d1-8f73f680760d.png",
                description: "Driving business growth and client relationships"
              },
              {
                name: "Martin Majer",
                role: "Operations Director",
                image: "/lovable-uploads/019f2cea-e639-4352-b79b-09a2c223ca01.png",
                description: "Ensuring smooth delivery of all projects"
              }
            ].map((member, index) => (
              <div key={index} className="text-center glass-panel p-8 rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-2 border-yellow-400"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-yellow-400 mb-4">{member.role}</p>
                <p className="text-gray-400">{member.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-yellow-400 text-center">
              Our team brings together over 30 years of combined experience in IT services, Legal, Commercial and operations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
