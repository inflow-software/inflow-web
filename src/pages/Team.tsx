
import Navbar from '../components/Navbar';

const Team = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Our Team</h1>
          
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-yellow-400 text-center">
              Our team brings together over 30 years of combined experience in IT services, Legal, Commercial and operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
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
        </div>
      </div>
    </div>
  );
};

export default Team;
