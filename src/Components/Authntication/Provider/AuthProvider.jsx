import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState([])

    const createUser=(email,password)=>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return ()=>unsubscribe()
    },[])



    const authInfo={loading,user,createUser,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;