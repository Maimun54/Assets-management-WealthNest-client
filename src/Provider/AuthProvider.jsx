import { createContext, useEffect, useState,} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext =createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
     const [user,setUser]=useState(null)
     const [loader,setLoader]=useState(true)
     const googleProvider =new GoogleAuthProvider
    
    const createUser =(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
       
    }
    const signIn = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn =()=>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }
    const loginOut =()=>{
        setLoader(true)
        return signOut(auth)
    }
    const   updateUserProfile = (name,photo)=>{
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }
   useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        // console.log('Current User',currentUser)
       
        setLoader(false)
    })
    return ()=>{
        return unsubscribe()
    }
   },[])
    const authInfo={
        user,
        loader,
        createUser,
        signIn,
        loginOut,
        updateUserProfile,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;