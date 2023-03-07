import React from 'react';
import { AiFillHome, AiFillClockCircle, AiOutlineMail } from 'react-icons/ai';
import { GiVibratingSmartphone } from 'react-icons/gi';

const data = [
    {
        icon: <AiFillHome />,
        headingText: '101, Dhaka Street',
        text: 'Dhaka, Bangladesh'
    },
    {
        icon: <AiFillClockCircle />,
        headingText: '101, Dhaka Street',
        text: 'Dhaka, Bangladesh'
    },
    {
        icon: <AiOutlineMail />,
        headingText: '101, Dhaka Street',
        text: 'Dhaka, Bangladesh'
    },
];

const TopNavbar = () => {
    return (
        <div className=' pt-10  sm:block hidden'>
            <div className='container mx-auto flex flex-col  lg:flex-row justify-between items-center gap-5'>
                <div className='flex items-center justify-center gap-2'>
                    <GiVibratingSmartphone size={40} className='text-secondary' />
                    <div >
                        <p className='text-2xl font-bold'> <span className='text-secondary'>Resale</span> Phone</p>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                    </div>
                </div>

                <div className='flex   items-center flex-col md:flex-row gap-10'>
                    {
                        data.map((d, ind) => {
                            return <div key={ind} className='flex  items-center gap-3'>
                                <span className='text-lg p-4  rounded-full shadow-lg text-secondary'>{d.icon}</span>
                                <div>
                                    <p className='font-bold'>{d.headingText}</p>
                                    <p className='italic'>{d.text}</p>
                                </div>
                            </div>;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;