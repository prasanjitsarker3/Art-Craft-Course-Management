import { useContext } from "react";
import { AuthContext } from "../components/AuthenticationPage/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useCart = () => {
    const { user, loading } = useContext(AuthContext); 
    // const token = localStorage.getItem("Access-Token")
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: carts = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
    return [carts, refetch]
};

export default useCart;