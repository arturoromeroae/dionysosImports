import React from 'react';
import { useAuth } from '@context/authContext';
import '@styles/Admin.scss';
import Header from '@components/Header';

const Admin = () => {
  const { user, loading } = useAuth();

  if(loading) return <h1>Loading</h1>

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