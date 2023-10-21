/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () =>{
      
        // localStorage.setItem('user', JSON.stringify(user));
        return signInWithPopup(auth, googleProvider)
    }
    
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = ( email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateProfile = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth .currentUser, {
            displayName: name, 
            photoURL: photo,
          } )
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    } 

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser)
            setLoading(false)
            setUser(currentUser)
        })
        return () =>{
            unSubscribe()
        }
    } ,[auth])

    useEffect(() =>{
        if(user){
            setLoading(false)
        }
    } ,[user])


    const authInfo = {user, loading, createUser, signInUser, handleUpdateProfile, logOut, googleLogin}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;