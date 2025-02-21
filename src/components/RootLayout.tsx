
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
