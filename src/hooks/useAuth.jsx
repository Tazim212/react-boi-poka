import { use } from "react"
import { AuthContext } from "../Layout/AuthContext/AuthContext"

const useAuth = () =>{
    const auths = use(AuthContext)
    return auths;
}
export default useAuth;