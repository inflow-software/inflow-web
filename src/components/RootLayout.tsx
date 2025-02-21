
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const WaveBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
      <svg 
        viewBox="0 0 2000 600" 
        className="w-[200%] h-auto transform -translate-x-1/4"
        preserveAspectRatio="none"
      >
        {/* First wave - darkest, more pronounced oval */}
        <path
          d="M0,250C200,280,400,290,600,270C800,250,1000,220,1200,210C1400,200,1600,210,1800,230C2000,250,2200,280,2400,270L2400,0L0,0Z"
          fill="#222222"
          className="animate-wave"
        />
        
        {/* Second wave - golden yellow, medium oval */}
        <path
          d="M0,220C200,240,400,250,600,240C800,230,1000,200,1200,190C1400,180,1600,190,1800,210C2000,230,2200,240,2400,230L2400,0L0,0Z"
          fill="#FFC061"
          className="animate-[wave_15s_ease-in-out_infinite_reverse]"
          style={{ opacity: 0.7 }}
        />
        
        {/* Third wave - light golden, smallest oval */}
        <path
          d="M0,190C200,210,400,220,600,210C800,200,1000,180,1200,170C1400,160,1600,170,1800,185C2000,200,2200,210,2400,200L2400,0L0,0Z"
          fill="#FFE5BE"
          className="animate-[wave_18s_ease-in-out_infinite]"
          style={{ opacity: 0.5 }}
        />
      </svg>
    </div>
  );
};

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <WaveBackground />
      </div>
      <Navbar />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
