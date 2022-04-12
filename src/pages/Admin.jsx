import React from 'react';
import { useAuth } from '@context/authContext';
import '@styles/Admin.scss';
import Header from '@components/Header';
import LoadingAnimation from '@components/LoadingAnimation';
//import TabsAdmin from '@components/TabsAdmin';
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from 'universal-cookie';

const Admin = () => {
  const cookies = new Cookies();
  
  const { loading, login, logout } = useAuth();

    if(!cookies.get('id')){
        props.history.push('./');
    }

  if(loading) return <LoadingAnimation />

  return (
    <>
    <Header />
    <div className='alertWelcome'>
      
      <h2 className='welcomeTitle'>Welcome  {cookies.get('nombre')}</h2>
      <br/>
      <button className="btn btn-lg btn-primary btn-block" onClick={logout}>Log out</button>
    </div>
    
    </>
  )
}
//<TabsAdmin />
//<h2 className='welcomeTitle'>Welcome {user.email}</h2>
export default Admin;