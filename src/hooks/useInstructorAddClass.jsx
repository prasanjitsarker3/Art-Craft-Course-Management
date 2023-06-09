import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../components/AuthenticationPage/AuthProvider";


const useInstructorAddClass = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const { data: addedClass = [] } = useQuery({
        queryKey: ['addedClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/class/${user?.email}`)
            console.log(res.data.data);
            return res.data;
        }
    })
    return [addedClass]

};

export default useInstructorAddClass;