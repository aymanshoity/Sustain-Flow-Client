import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loading,setLoading]=useState(false)
    const [user,setUser]=useState([])

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userSignIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
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



    const authInfo={loading,user,createUser,logOut,userSignIn,googleSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;