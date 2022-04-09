import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import Filters from '@components/Filters';
import InputSearch from '@components/InputSearch';
import bannerCustomer from '@images/Banner.jpg';
import CardProducts from '@components/CardProducts';
import distinctiveImage from '@images/distinctive.jpg';
import Divider from '@mui/material/Divider';
import Select from '@components/Select';
import '@styles/CustomerPage.scss';
import Button from '@components/Button';
import { useAuth } from '@context/authContext';

const Customer = () => {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    await logout();
  }

  return (
    <>
      <Header />
      <Banner srcBanner={bannerCustomer} title='Customers' />
      <div className='loginContainer'>
        <div className='loginButtonCustomer'>
            {!user && (
              <Button text='Login' icon='fa-solid fa-unlock-keyhole' url='/login' />
            )}
        </div>
      </div>
      <div className='containerCustomer'>
        <Filters filterTitle='Filter Customers'>
          <Select label='City' />
          <Select label='State' />
          <Select label='Type' />
        </Filters>
        <Divider className='dividerTabs' orientation="vertical" flexItem />
        <CardProducts 
          imageUrl={distinctiveImage} 
          title="Distinctive Imports, Inc."
          code="941 Estes Court,"
          country="Schaumburg, IL 60193"
          type="Tel: (312) 456-5597"
          size="Distribution in Illinois"
        />
      </div>
      <Footer />
    </>
  )
}

export default Customer