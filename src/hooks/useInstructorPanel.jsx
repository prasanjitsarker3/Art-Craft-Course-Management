import { useContext } from "react";
import { AuthContext } from "../components/AuthenticationPage/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const useInstructorPanel = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log("Is Instructor", res.data.instructor);
            return res.data.instructor;
        }
    })
    // console.log(isInstructor);
    return [isInstructor, isInstructorLoading]
    // const { data: isInstructor } = useQuery({
    //     queryKey: ['isInstructor', user?.email],
    //     queryFn: async () => {
    //         const res = await axios.get(`http://localhost:5000/users/instructor/${user?.email}`)
    //         console.log(res.data);
    //         return res.data;
    //     }

    // })

    // return isInstructor?.isInstructor;
};

export default useInstructorPanel;