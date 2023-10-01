import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthenticationPage/AuthProvider';
 
const CheckOut = ({ price, myData }) => {
    console.log(myData);
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [processing, setProcessing] = useState(false);
    const [transactionId, seTTransactionId] = useState('')
    const enrolledStudent = 0;
    useEffect(() => {
        axiosSecure.post('/createPayment', { price })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            setCardError(error.message)
            console.log("error", error);
        }
        else {
            setCardError('')
            // console.log("payment method", paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'Unknown',
                        email: user?.email || 'Anonymous'
                    }
                }
            }
        )
        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            seTTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                data: new Date(),
                clsId: myData._id,
                classIds: myData.classId,
                className: myData.className, 
                seats: myData.seats, 
                enrolledStudent:myData.enroll

            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        //display confirm
                    }
                })
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
                <button className="btn btn-active btn-primary" type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Payment
                </button>
            </form>
            {cardError &&
                <p className='text-center font-serif text-lg text-red-500'>{cardError}</p>
            }
            {
                transactionId &&
                <p className='text-center pb-3 font-serif text-green-500'>Transaction complete with transactionId: {transactionId}</p>
            }

        </>
    );
};

export default CheckOut;