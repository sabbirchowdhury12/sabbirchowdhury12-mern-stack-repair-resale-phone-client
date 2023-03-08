import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiShoppingBag3Line } from 'react-icons/ri';

const data = [
    {
        headingText: 'NO Fix, NO FREE',
        desc: "Repair on Demand",
        icon: <RiShoppingBag3Line size={35} className='text-secondary' />
    },
    {
        headingText: '35 DAYS WARRANTY',
        desc: "Guaranteed Service",
        icon: <RiShoppingBag3Line size={35} className='text-secondary' />
    },
    {
        headingText: 'EXPERT STAFF',
        desc: "Available Anytime ",
        icon: <BsFillPeopleFill size={35} className='text-secondary' />
    },
    {
        headingText: 'WE ARE FAST',
        desc: "Qualified Workers",
        icon: <BsFillPeopleFill size={35} className='text-secondary' />
    }
];

const Fecalities = () => {
    return (
        <div className='bg-light'>
            <div className='py-10  mx-auto container grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-10'>
                {
                    data.map(d => {
                        return <div className='text-light flex items-center justify-between border-b pb-4 md:border-r px-4'>
                            <div>
                                <p className='uppercase font-bold text-lg'>{d.headingText}</p>
                                <p>{d.desc}</p>
                            </div>
                            <p>{d.icon}</p>
                        </div>;
                    })
                }
            </div>
        </div>
    );
};

export default Fecalities;