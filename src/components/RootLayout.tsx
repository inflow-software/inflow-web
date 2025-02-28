
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const WaveBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
      {/* Mobile waves - 30% taller and more curved */}
      <svg 
        viewBox="0 0 2000 780" 
        className="md:hidden w-[200%] h-auto transform -translate-x-1/4"
        preserveAspectRatio="none"
      >
        {/* First wave - darkest, more pronounced oval */}
        <path
          d="M0,325C200,385,400,405,600,365C800,325,1000,285,1200,270C1400,255,1600,275,1800,305C2000,335,2200,365,2400,350L2400,0L0,0Z"
          fill="#222222"
          className="animate-wave"
        />
        
        {/* Second wave - golden yellow, medium oval */}
        <path
          d="M0,286C200,335,400,350,600,325C800,300,1000,260,1200,247C1400,234,1600,247,1800,273C2000,299,2200,312,2400,299L2400,0L0,0Z"
          fill="#FFC061"
          className="animate-[wave_15s_ease-in-out_infinite_reverse]"
          style={{ opacity: 0.7 }}
        />
        
        {/* Third wave - light golden, smallest oval */}
        <path
          d="M0,247C200,273,400,286,600,273C800,260,1000,234,1200,221C1400,208,1600,221,1800,240C2000,260,2200,273,2400,260L2400,0L0,0Z"
          fill="#FFE5BE"
          className="animate-[wave_18s_ease-in-out_infinite]"
          style={{ opacity: 0.5 }}
        />
      </svg>

      {/* Desktop waves */}
      <svg 
        viewBox="0 0 2000 400" 
        className="hidden md:block w-[200%] h-auto transform -translate-x-1/4"
        preserveAspectRatio="none"
      >
        {/* First wave - darkest, more pronounced oval */}
        <path
          d="M0,150C200,180,400,190,600,170C800,150,1000,120,1200,110C1400,100,1600,110,1800,130C2000,150,2200,180,2400,170L2400,0L0,0Z"
          fill="#222222"
          className="animate-wave"
        />
        
        {/* Second wave - golden yellow, medium oval */}
        <path
          d="M0,120C200,140,400,150,600,140C800,130,1000,100,1200,90C1400,80,1600,90,1800,110C2000,130,2200,140,2400,130L2400,0L0,0Z"
          fill="#FFC061"
          className="animate-[wave_15s_ease-in-out_infinite_reverse]"
          style={{ opacity: 0.7 }}
        />
        
        {/* Third wave - light golden, smallest oval */}
        <path
          d="M0,90C200,110,400,120,600,110C800,100,1000,80,1200,70C1400,60,1600,70,1800,85C2000,100,2200,110,2400,100L2400,0L0,0Z"
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
