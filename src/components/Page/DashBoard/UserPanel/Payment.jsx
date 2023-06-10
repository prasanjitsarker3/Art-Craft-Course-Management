import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";

//ToDo Provide Data
const stripePromise = loadStripe(import.meta.env.VITE_PaymentPK)

const Payment = () => {
    const myData = useLoaderData();
    const paymentPrice = myData.price;
    const price = parseInt(paymentPrice)
    return (
        <div className="bg-base-200 text-black font-bold">
            <h1 className="text-center text-2xl font-serif py-5">Pay Your Course Free </h1>
            <p className="text-center text-lg ">{myData.className}</p>
            <Elements stripe={stripePromise}>
                <CheckOut price={price} myData={myData}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;