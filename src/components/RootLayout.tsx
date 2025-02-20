
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="waves">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
