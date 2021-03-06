import React from 'react';
import '@styles/ProductsPage.scss'
import Header from '@components/Header';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import bannerProducts from '@images/Banner.jpg';
import TabsProductsCustom from '@components/TabsProductsCustom';

const Products = ({ info }) => {

  return (
    <>
      <Header />
      <Banner srcBanner={bannerProducts} title='Products' />
      <TabsProductsCustom data={info} />
      <Footer />
    </>
  )
}

export default Products