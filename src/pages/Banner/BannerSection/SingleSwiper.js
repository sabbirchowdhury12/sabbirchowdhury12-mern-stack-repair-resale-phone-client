import React from 'react';

const SingleSwiper = ({ slide }) => {
    return (
        <div className=' carousel-item relative w-full h-full'>
            <div
                className='hero h-[80vh]'
                style={{ backgroundImage: `url(${slide.img})`, }}
            >
                <div className='hero-overlay bg-opacity-40'></div>
                <div className='hero-content text-center text-neutral-content'>
                    <div className='max-w-xl text-white'>
                        <h3 className='text-lg mb-5 uppercase'>Welcome</h3>
                        <h1 className='mb-5 text-3xl font-extrabold uppercase'>
                            {slide.heading}
                        </h1>

                        <button className='bg-secondary font-bold p-2 rounded' destination='/about'>Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSwiper;