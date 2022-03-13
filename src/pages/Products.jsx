import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import TabsProducts from '@components/TabsProducts';
import bannerProducts from '@images/banner_products.jpg'
import CardProducts from '@components/CardProducts';
import beerImage from '@images/beer.jpg'
import Filters from '@components/Filters';

const Products = () => {
  return (
    <>
      <Header />
      <Banner srcBanner={bannerProducts} title='Products' />
      <TabsProducts
        tab1={
              <CardProducts 
                imageUrl={beerImage} 
                title="SEPTEM"
                code="8018-1111"
                country="GREECE"
                type="BEER BOTTLE"
                size="LAGER"
                content="SUNDAYS HONEY GOLDEN ALE 330ML"
              />
              }
        tab2={<CardProducts
                imageUrl={beerImage} 
                title="SEPTEM"
                code="8018-1111"
                country="GREECE"
                type="BEER BOTTLE"
                size="LAGER"
                content="SUNDAYS HONEY GOLDEN ALE 330ML"
              />}
        tab3={<CardProducts
                imageUrl={beerImage} 
                title="SEPTEM"
                code="8018-1111"
                country="GREECE"
                type="BEER BOTTLE"
                size="LAGER"
                content="SUNDAYS HONEY GOLDEN ALE 330ML"
              />}
        tab4={<CardProducts
                imageUrl={beerImage} 
                title="SEPTEM"
                code="8018-1111"
                country="GREECE"
                type="BEER BOTTLE"
                size="LAGER"
                content="SUNDAYS HONEY GOLDEN ALE 330ML"
              />}
      />
      <Footer />
    </>
  )
}

export default Products