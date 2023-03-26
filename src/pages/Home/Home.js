import React from 'react';
import Banner from '../Banner/Banner';
import CategoryProducts from '../CategorySection/CategoryProducts';
import About from './HomeSection/About/About';
import Countup from './HomeSection/Countup/Countup';
import Fecalities from './HomeSection/Fecalities/Fecalities';
import SellerSection from './HomeSection/SellerSection/SellerSection';
import Testomonial from './HomeSection/Testomonial/Testomonial';


const Home = () => {
    return (
        <div>
            <Banner />
            <Fecalities />
            <CategoryProducts />
            <Testomonial />
            <About />
            {/* <SellerSection /> */}
            <Countup />
        </div>
    );
};

export default Home;