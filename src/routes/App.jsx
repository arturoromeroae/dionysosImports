import React, { useContext } from 'react';
import '@styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import About from '@pages/About';
import Admin from '@pages/Admin';
import Customer from '@pages/Customer';
import Products from '@pages/Products';
import Login from '@pages/Login';
import AuthProvider from '@context/authContext';
import ProtectedRoute from '@components/ProtectedRoute';
import { ProductsContext } from '@config/DataContext';

const App = () => {
  const {
    searchedDataWine,
    searchedDataLiquor,
    searchedDataBeer,
    searchedDataFood, 
    dataLength,
    loadingWine,
    loadingLiquor,
    loadingBeer,
    loadingFood,
    setSearchDataValue
  } = useContext(ProductsContext)

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about-us' element={<About />} />
          <Route exact path='/customer' element={<Customer />} />
          <Route exact path='/products' element={
            <Products 
              lengthData={dataLength} 
              dataWine={searchedDataWine}
              dataLiquor={searchedDataLiquor}
              dataBeer={searchedDataBeer}
              dataFood={searchedDataFood}
              loadingWine={loadingWine}
              loadingLiquor={loadingLiquor}
              loadingBeer={loadingBeer}
              loadingFood={loadingFood}
            />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/admin-panel' element={<ProtectedRoute />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App