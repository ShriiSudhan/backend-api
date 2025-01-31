import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import '../styles/Home.css';
import { Paper, Typography } from '@mui/material';

const Home = () => {
  return (
    <div className="home-container">
      <div className="top-frame">
        <img src="/banner-image.jpg" alt="Banner" className="banner-image" />
      </div>
      <div className="bottom-frame">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;