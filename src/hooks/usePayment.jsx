import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../components/AuthenticationPage/AuthProvider";

const usePayment = () => {
    const {user}=useContext(AuthContext);
    const { data: payments = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://art-server.vercel.app/payments/${user?.email}`)
            return res.json()
        }
    })
    return [payments, loading, refetch]
};

export default usePayment;