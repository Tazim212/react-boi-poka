import { Navigate, useLocation } from "react-router"
import useAuth from "../../hooks/useAuth"

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    // console.log(location)
    if (loading) {
        return <div className='text-center my-20'><span className="loading loading-spinner loading-xl"></span></div>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
};
export default PrivateRoute;