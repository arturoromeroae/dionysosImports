import React, { useEffect, useState } from 'react';
import '@styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import About from '@pages/About';
import Customer from '@pages/Customer';
import Products from '@pages/Products';
import Contact from '@pages/Contact';
import Login from '@pages/Login';
import AuthProvider from '@context/authContext';
import ProtectedRoute from '@components/ProtectedRoute';
import Distributors from '@pages/Distributors';

const App = () => {
  
  const API_PRODUCTS = process.env.API_PRODUCTS;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch(API_PRODUCTS)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          const productsInfo = result.data;
          const items = item => item
          const products = productsInfo.map(items)
          setItems(products);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about-us' element={<About />} />
          <Route exact path='/customers' element={<Customer />} />
          <Route exact path='/products' element={<Products info={items} />} />
          <Route exact path='/distributors' element={<Distributors />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/admin-panel' element={<ProtectedRoute />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App