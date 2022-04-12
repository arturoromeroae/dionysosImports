import React from 'react';
import { useAuth } from '@context/authContext';
import { Navigate } from 'react-router-dom';
import Admin from '@pages/Admin';
import LoadingAnimation from './LoadingAnimation';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth()
    
    if(loading) return <LoadingAnimation />
    
    if(!user) return <Navigate to="/login" replace={true} />

    return (
        <>
            <Admin />
        </>
    )
}

export default ProtectedRoute;