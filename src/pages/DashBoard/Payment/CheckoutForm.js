import React, { useEffect, useState } from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { payment, payments } from '../../../utilities/APIRoutes';


const CheckoutForm = ({ order }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState('');
    const [transactionID, setTransactionID] = useState('');
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const { price, email, name, _id } = order;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(payment, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {


        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }

        setSuccess('');
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name,
                        email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === 'succeeded') {


            const payment = {
                price,
                transactionID: paymentIntent.id,
                email,
                bookingId: _id

            };
            fetch(payments, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Your Payment Complete');
                        setTransactionID(paymentIntent.id);
                    }
                });
        }

    };






    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button disabled={!stripe || !clientSecret} className='mt-5 bg-blue-800 p-2 rounded text-white' type="submit">
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p>{success}</p>
                    <p>your transactionID id: {transactionID}</p>
                </div>
            }
        </>
    );
};
export default CheckoutForm;