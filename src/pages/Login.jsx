import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'regenerator-runtime/runtime'
import { useAuth } from '@context/authContext';
import '@styles/LoginPage.scss';
import Header from '@components/Header';
import ContainerWithBg from '@containers/ContainerWithBg';
import ContainerBlur from '@containers/ContainerBlur';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/admin-panel");
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <>
      <Header />
      <ContainerWithBg>
        <ContainerBlur />
        <div className='containerLogin'>
          <h2 className='loginTitle'>Login</h2>
          {error && <p>{error}</p>}
          <form className='loginForm' onSubmit={handleSubmit}>
            <div>
              <div className='inputForm'>
                <label>Email*</label>
                <input id='email' name='email' type='email' maxLength={120} placeholder='E.g. example@email.com' required onChange={handleChange} />
              </div>
              <div className='inputForm'>
                <label>Password*</label>
                <input id='password' name='password' type='password' maxLength={12} required onChange={handleChange} />
              </div>
              <div>
                <button className='loginButton' type='submit'>
                  Submit
                  <i className="fa-solid fa-chevron-right"></i>
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