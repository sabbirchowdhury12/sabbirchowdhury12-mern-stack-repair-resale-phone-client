import React from 'react';
import Banner from '../Banner/Banner';
import CategoryProducts from '../CategorySection/CategoryProducts';
import About from './HomeSection/About/About';
import Countup from './HomeSection/Countup/Countup';
import Fecalities from './HomeSection/Fecalities/Fecalities';
import Testomonial from './HomeSection/Testomonial/Testomonial';


const Home = () => {
    return (
        <div>
            <Banner />
            <Fecalities />
            <CategoryProducts />
            <Testomonial />
            <About />
            <Countup />


        </div>
    );
};

export default Home;