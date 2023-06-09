import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";

//ToDo Provide Data
const stripePromise = loadStripe(import.meta.env.VITE_PaymentPK)
const Payment = () => {
    return (
        <div className="bg-base-200 text-black font-bold">
            <h1 className="text-center text-2xl font-serif py-5">Pay Your Course Free </h1>

            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;