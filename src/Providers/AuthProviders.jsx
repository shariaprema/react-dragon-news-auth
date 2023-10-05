import { createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    // step-1: Create User/ register

    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

      //step-4: Login / SignIn user---> Login page
      const SignIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

       //step-3: LogOut / SignOut ---> navbar 
       const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
     }


    //---------------------------------------------------------
    // step-2: User Observer:
    useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth, currentUser => {
        console.log('user in the auth state change',currentUser)
        setUser(currentUser)
        setLoading(false)
    });

    return()=>{
        unSubscribe();
    }
    
    },[])

    //--------------------------------------------------------

 
 


    const authInfo = {
        user,
        createUser,
        logOut,
        SignIn,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;