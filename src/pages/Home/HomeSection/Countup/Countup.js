import React from 'react';
import Counter from '../../../../components/Counter/Counter';


const data = [
    {
        number: 2210,
        title: "Phone Sale"
    },
    {
        number: 968,
        title: "Repair Phone"
    },
    {
        number: 1566,
        title: "Post"
    },
    {
        number: 59692,
        title: "Happy Customer"
    },
];

const Countup = () => {
    return (
        <div className='bg-light mt-20'>
            <div className="numbers container mx-auto font-bold py-16  grid grid-cols-1 md:grid-cols-4 ">
                {
                    data.map((d, ind) => <Counter key={ind} number={d.number} title={d.title} />)
                }
            </div>
        </div>
    );
};

export default Countup;