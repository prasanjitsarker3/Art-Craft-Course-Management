import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthenticationPage/AuthProvider";
import { useEffect } from "react";
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
});
const useAxiosSecure = () => {
    const { userLogOut } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('Access-Token');
            if (token) {
                config.headers.Authorization = `bearer ${token}`;



                
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await userLogOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [userLogOut, navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;