
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const WaveBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
      {/* Mobile waves */}
      <svg 
        viewBox="0 0 2000 600" 
        className="md:hidden w-[200%] h-auto transform -translate-x-1/4"
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
