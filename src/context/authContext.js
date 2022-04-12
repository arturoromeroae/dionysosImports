import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'universal-cookie';

export const contextAuth = createContext();

export const useAuth = () => {
    const context = useContext(contextAuth);
    if(!context) throw new Error('You must have an authentication provider')
    return context;
}

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const cookies = new Cookies();

    function login() {
        setLoading(false);
        setIsLoggedIn(true);
    }
    function logout() {
        cookies.remove('id', {path: '/'});
        cookies.remove('nombre', {path: '/'});
        cookies.remove('numero', {path: '/'});
        setLoading(false);
        setIsLoggedIn(false);
    }

    return (
        <contextAuth.Provider value={{isLoggedIn, loading, login, logout}}>
            {isLoggedIn.toString()}
            {children}
        </contextAuth.Provider>
    )
}

export default AuthProvider;
