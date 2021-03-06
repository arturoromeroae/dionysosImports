import React from 'react';
import { useAuth } from '@context/authContext';
import { Navigate } from 'react-router-dom';
import Admin from '@pages/Admin';
import LoadingAnimation from './LoadingAnimation';

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    
    if(!isLoggedIn) return <Navigate to="/login" replace={true} />

    return (
        <>
            <Admin />
        </>
    )
}

export default ProtectedRoute;