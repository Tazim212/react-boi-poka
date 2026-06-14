import { Children, useEffect, useState } from "react"
import { AuthContext } from "../../Layout/AuthContext/AuthContext"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../../public/firebase_config";

const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) =>{
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
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
    unsubscribe()
}
}, [])

const updateUser = (name) =>{
    setLoading(true)
    return updateProfile(auth.currentUser, {displayName: name})
}

const SignOut = () =>{
    setLoading(true)
    return signOut(auth)
}

    const authInfo = {
        user,
        createUser,
        updateUser,
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