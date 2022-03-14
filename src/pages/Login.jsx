import React from 'react';
import '@styles/LoginPage.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
import ContainerWithBg from '@containers/ContainerWithBg';
import ContainerBlur from '@containers/ContainerBlur';

const Login = () => {
  return (
    <>
      <Header />
      <ContainerWithBg>
        <ContainerBlur />
        <div className='containerLogin'>
          <h2 className='loginTitle'>Login</h2>
          <form className='loginForm'>
            <div>
              <div className='inputForm'>
                <label>Email*</label>
                <input type='email' maxLength={120} placeholder='E.g. example@email.com' required />
              </div>
              <div className='inputForm'>
                <label>Password*</label>
                <input type='password' maxLength={8} required />
              </div>
              <div>
                <button className='loginButton' type='submit'>
                  Submit
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
              <p className='disclaimerLogin'>If you do not have an account, contact the administrator</p>
            </div>
          </form>
        </div>
      </ContainerWithBg>
    </>
  )
}

export default Login;