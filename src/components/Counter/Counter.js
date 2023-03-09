import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const Counter = ({ number, title }) => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true
        )} onExit={() => setCounterOn(false
        )}>
            <div className="number text-center text-light border-r-blue-700 border-b-blue-700 mb-10 md:mb-0 md:pb-0 border-b md:border-b-0 pb-10 md:border-r-2">
                {
                    counterOn &&

                    <CountUp duration={5} delay={0} start={100} className="counter text-4xl text-black opacity-75" end={number} />
                }
                <p className='text-xl'>{title}</p>
            </div>
        </ScrollTrigger>
    );
};

export default Counter;