import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51M8kbEBhLbcvUmB2YPpeBAc7CoiM46HMYR55naprTrbxZvZIaFw9C5Jczj2qoNS2uS3RivxYDj3r6aedQJyZYFOM00Ajn0mtrX');


const Payment = () => {

    const order = useLoaderData();
    console.log(order);

    return (
        <div className='w-1/2 mx-auto mt-20'>
            <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
            </Elements>
        </div>
    );
};

export default Payment;