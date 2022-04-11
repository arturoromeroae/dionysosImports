import React, { useContext, useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import Filters from '@components/Filters';
import bannerCustomer from '@images/Banner.jpg';
import Select from '@components/Select';
import '@styles/CustomerPage.scss';
import Button from '@components/Button';
import { useAuth } from '@context/authContext';
import { ProductsContext } from '@config/DataContext';
import SkeletonCardLoading from '@components/SkeletonCardLoading';
import CardCustomers from '@components/CardCustomers';

const Customer = () => {
  const {
    searchedDataCustomer,
    loadingCustomer
  } = useContext(ProductsContext);

  const customersInfo = searchedDataCustomer;

  const [limitCustomer, setLimitCustomer] = useState(12);
  const { user, logout } = useAuth()
  const n = 3;

  const handleLogout = async () => {
    await logout();
  }

  const increaseLimitCustomer = () => {
    setLimitCustomer(limitWine + 12);
  };

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
        {loadingCustomer &&
          [...Array(n)].map((e, i) => (
            <div className='productsListContainerLoading'>
              <SkeletonCardLoading />
              <SkeletonCardLoading />
            </div>
            )
          )
        }
        <div className='customersListContainer'>
          {
            customersInfo && customersInfo.slice(0, limitCustomer).map(customer => (
              <CardCustomers
                title={customer.custname}
                address={customer.custaddr}
                city={customer.city}
                type={customer.custType}
                state={customer.state}
                phone={customer.custphone}
                website={customer.custwebsite}
              />
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Customer