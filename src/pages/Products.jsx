import React, {useEffect} from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import TabsProducts from '@components/TabsProducts';
import bannerProducts from '@images/banner_products.jpg';
import CardProducts from '@components/CardProducts';
import beerImage from '@images/beer.jpg';

const Products = (props) => {
  const name = props.data.items;
  useEffect(() => console.log(name), [props.loading])
  
  return (
    <>
      <Header />
      <Banner srcBanner={bannerProducts} title='Products' />
      <>
        <TabsProducts
          loading={props.loading}
          tab1={name && name.map(test => (
                <CardProducts
                  key={test.id}
                  imageUrl={beerImage} 
                  title={test.name}
                  code="8018-1111"
                  country={test.region}
                  type={"BEER BOTTLE"}
                  size="LAGER"
                  content={test.description}
                />))
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
      </>
      <Footer />
    </>
  )
}

export default Products