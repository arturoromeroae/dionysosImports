import React, { createContext, useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "@config/firebase.config";

export const contextAuth = createContext();

export const useAuth = () => {
    const context = useContext(contextAuth);
    if(!context) throw new Error('You must have an authentication provider')
    return context;
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {        
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => signOut(auth);

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
        
       return () => true;
    }, [])
    
    return (
        <contextAuth.Provider value={{login, user, loading, logout}}>
            {children}
        </contextAuth.Provider>
    )
}


export default AuthProvider;
