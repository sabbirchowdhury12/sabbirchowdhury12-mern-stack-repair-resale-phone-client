import React from 'react';
import Banner from '../Banner/Banner';
import CategoryProducts from '../CategorySection/CategoryProducts';
import Fecalities from './HomeSection/Fecalities/Fecalities';
import Testomonial from './HomeSection/Testomonial/Testomonial';


const Home = () => {
    return (
        <div>
            <Banner />
            <Fecalities />
            <CategoryProducts />
            <Testomonial />

        </div>
    );
};

export default Home;