
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#222222] to-transparent">
          <div 
            className="absolute inset-0 animate-wave" 
            style={{
              backgroundImage: `
                linear-gradient(90deg, 
                transparent 0%, 
                #FFC061 25%, 
                #9C7A36 50%, 
                #FFE5BE 75%, 
                transparent 100%)
              `,
              backgroundSize: '400% 100%',
              opacity: 0.15
            }}
          />
        </div>
      </div>
      <Navbar />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
