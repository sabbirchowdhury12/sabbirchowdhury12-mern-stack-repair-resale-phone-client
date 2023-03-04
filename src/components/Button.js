import React from 'react';

const Button = ({ children }) => {
    return (
        <div className='text-center rounded-sm text-white font-bold text-lg button-hover'>
            <button className='rounded bg-blue-900 py-4 px-4'>{children}</button>
        </div>
    );
};

export default Button;