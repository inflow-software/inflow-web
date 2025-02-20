
import { useEffect } from 'react';
import { ArrowRight, CircleArrowUp, Mail, MapPin } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Fast, Smart, and Built to Last
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              At inflow, we specialise in agile development and long-term support for digital products, helping businesses bring their visions to life with smart, fast, and adaptable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-black text-white">
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
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Our Values Are Simple</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Transparency", description: "We act honestly and build trust" },
              { title: "Straight to the point", description: "Clear communication without unnecessary jargon" },
              { title: "Flow state", description: "We thrive in efficient, focused development" }
            ].map((value, index) => (
              <div key={index} className="fade-in-section">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Jiří Buček",
                role: "Managing Director",
                image: "/lovable-uploads/4b41e73e-9171-4f3a-8638-3a053c87a91e.png"
              },
              {
                name: "Jason Nel",
                role: "Commercial Director",
                image: "/lovable-uploads/af2171f7-8d88-4331-9400-d1bb9fb2b5e4.png"
              },
              {
                name: "Martin Majer",
                role: "Operations Director",
                image: "/lovable-uploads/4e20632f-dc79-4c5c-8612-73755b2a9d13.png"
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

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-yellow-400" />
                <a href="mailto:jason.nel@inflow.software" className="hover:text-yellow-600 transition-colors">
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
            <div className="fade-in-section">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.9891877914447!2d14.389545776932416!3d50.101780071811186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b952c3a17b923%3A0x8b9b52d358e2fa2!2zVXJhbHNrw6EgNjg5LzcsIDE2MCAwMCBQcmFoYSA2LURlanZpY2UsIEN6ZWNoaWE!5e0!3m2!1sen!2sus!4v1709764429544!5m2!1sen!2sus"
                className="w-full h-[400px] rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
