import { Children, useEffect, useState } from "react"
import { AuthContext } from "../../Layout/AuthContext/AuthContext"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../public/firebase_config";

const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) =>{
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

const googleSigned = () =>{
    setLoading(true)
    return signInWithPopup(auth, provider)
}

useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
        setLoading(false)
})
return () =>{
    unsubscribe
}
}, [])

const SignOut = () =>{
    setLoading(true)
    return signOut(auth)
}

    const authInfo = {
        user,
        googleSigned,
        SignOut
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}
export default AuthProvider