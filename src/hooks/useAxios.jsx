import axios from "axios"
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosInstance = axios.create({
    // baseURL: "https://book-server-ofbz.onrender.com"
    baseURL: "http://localhost:5000"
})

const useAxios = () => {
    const { user } = useAuth()
    // console.log(user)
    useEffect(() =>{
         const requestInterceptor = axiosInstance.interceptors.request.use((config => {

            const token = localStorage.getItem("token"); 
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }

            return config;
        }));

         return () => {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            // instance.interceptors.response.eject();
        }


    }, [user])

    return axiosInstance
}
export default useAxios