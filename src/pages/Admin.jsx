import React from 'react';
import { useAuth } from '@context/authContext';
import '@styles/Admin.scss';
import Header from '@components/Header';
import LoadingAnimation from '@components/LoadingAnimation';

const Admin = () => {
  const { user, loading } = useAuth();

  if(loading) return <LoadingAnimation />

  return (
    <>
    <Header />
    <div className='alertWelcome'>
      <h2 className='welcomeTitle'>Welcome {user.email}</h2>
    </div>
    </>
  )
}

export default Admin;