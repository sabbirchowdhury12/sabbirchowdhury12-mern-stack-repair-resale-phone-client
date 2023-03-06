import React from 'react';

const SingleSwiper = ({ slide }) => {
    return (
        <div className=' carousel-item relative w-full h-full'>
            <div
                className='hero h-[90vh]'
                style={{ backgroundImage: `url(${slide.img})`, }}
            >
                <div className='hero-overlay bg-opacity-40'></div>
                <div className='hero-content text-center text-neutral-content'>
                    <div className='max-w-xl text-white'>
                        <h3 className='text-lg mb-5 uppercase'>{slide.heading}</h3>
                        <h1 className='mb-5 text-6xl font-extrabold uppercase'>
                            {slide.heading}
                        </h1>
                        <p className='mb-5 text-base'>{slide.heading}</p>
                        <button destination='/about'></button>
                    </div>
                </div>
            </div>
            {/* <div>


                <div
                    className='hero h-[45vh] w-[50vw]'
                    style={{ backgroundImage: `url(${slide.img})`, }}
                >
                </div>
                <div
                    className='hero h-[45vh] w-[50vw]'
                    style={{ backgroundImage: `url(${slide.img})`, }}
                >
                </div>
            </div> */}
        </div>
    );
};

export default SingleSwiper;