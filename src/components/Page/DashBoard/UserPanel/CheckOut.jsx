import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            setCardError(error.message)
            console.log("error", error);
        }
        else {
            setCardError('')
            console.log("payment method", paymentMethod);
        }
    }
    return (
        <>
            <form className='w-2/3 mx-auto m-10' onSubmit={handleSubmit}>
                <CardElement
                    className='py-5 text-black'
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
                <button className="btn btn-active btn-primary" type="submit" disabled={!stripe}>
                    Payment
                </button>

            </form>
            {cardError &&
                <p className='text-center font-serif text-lg text-red-500'>{cardError}</p>
            }

        </>
    );
};

export default CheckOut;