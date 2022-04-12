import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'regenerator-runtime/runtime'
import { useAuth } from '@context/authContext';
//import '@styles/LoginPage.scss';
import Header from '@components/Header';
import ContainerWithBg from '@containers/ContainerWithBg';
import ContainerBlur from '@containers/ContainerBlur';

import Cookies from "universal-cookie";
import axios from "axios";
import swal from 'sweetalert';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/login.css";

const Login = () => {
  const baseUrl = "http://test.solarc.pe/api/Customer/GetCustomerLogin";
  const cookies = new Cookies();
  const headers = { 
    'Content-Type': 'application/json'
  };

  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  var errorMsg = '';

  //const { login } = useAuth();
  const { login, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    //e.preventDefault();
    setError("");
    try {
      
      //await login(user.email, user.password);
      await axios
      .post(baseUrl,{idLocal : 2, userId:user.username, userPass:user.password}, { headers })      
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((response) => {
        if (response.data) {
          var respuesta = response.data[0];
          cookies.set("id", respuesta.idCustomer, { path: "/" });   
          cookies.set("nombre", respuesta.custName, { path: "/" });
          cookies.set("numero", respuesta.custNum, { path: "/" });
          login();
          swal("Bienvenido", respuesta.custName , "success", {
            buttons: false,
            timer: 2000,
          });
          navigate("/admin-panel");
        } else {
          swal("Error", "El usuario o la contraseña no son correctos" , "error", {
            buttons: false,
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });      
    } catch (error) {
      swal("Error", error.message , "error", {
        buttons: false,
        timer: 2000,
      });
      /*
      if (error.message == 'Firebase: Error (auth/wrong-password).') {
        setError('Password Incorrect');
      }else if(error.message == 'Firebase: Error (auth/user-not-found).'){
        setError('User not found');
      }else{
        setError('Error, contact the administrator');
      }
      */
    }
  };

  return (
    <>
      <Header />
      <ContainerWithBg>
        <ContainerBlur />
        <div className="form-signin">
      <label>User</label>
      <input
        type="text"
        name="username"
        className="form-control"
        required
        onChange={handleChange}
        maxLength={12}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        className="form-control"
        required
        onChange={handleChange}
        maxLength={12}
      />

      <button className="btn btn-lg btn-primary btn-block" onClick={()=>handleSubmit()}>
        Sign in
      </button>
    </div>
      </ContainerWithBg>
    </>
  )
}

export default Login;