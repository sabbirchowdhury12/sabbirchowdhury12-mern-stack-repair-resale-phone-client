import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/share/Footer/Footer';
import Navbar from '../pages/share/Navbar/Navbar';

const Main = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;