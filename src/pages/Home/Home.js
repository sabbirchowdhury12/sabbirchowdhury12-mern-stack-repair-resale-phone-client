import React from 'react';
import Banner from '../Banner/Banner';
import CategoryProducts from '../CategorySection/CategoryProducts';
import Testomonial from './HomeSection/Testomonial/Testomonial';


const Home = () => {
    return (
        <div>
            <Banner />
            <CategoryProducts />
            <Testomonial />
        </div>
    );
};

export default Home;