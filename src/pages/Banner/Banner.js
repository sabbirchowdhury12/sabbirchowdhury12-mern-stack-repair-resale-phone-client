import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./BannerSection/style.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import SingleSwiper from "./BannerSection/SingleSwiper";


const slides = [
    {
        heading: "Advanced technologies handed to us",
        img: "https://images.unsplash.com/photo-1591054333829-3a3ce5d57fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
        heading: "Finding solutions for your problems",
        img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
    },
    {
        heading: "Best Quality Phone",
        img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    }
];

function Banner() {
    return (
        <div className=''>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    slides.map((slide, idx) => {
                        return <SwiperSlide className="" key={idx}>
                            <SingleSwiper slide={slide}></SingleSwiper>
                        </SwiperSlide>;
                    })
                }

            </Swiper>
        </div>
    );
}


export default Banner;