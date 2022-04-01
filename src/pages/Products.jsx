import React, {useEffect} from 'react';
import '@styles/ProductsPage.scss'
import Header from '@components/Header';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import { styled } from '@mui/system';
import bannerProducts from '@images/banner_products.jpg';
import CardProducts from '@components/CardProducts';
import beerImage from '@images/beer.jpg';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabsProductsCustom from '../components/TabsProductsCustom';
import Filters from '@components/Filters';
import Select from '@components/Select';

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 14px;
  display: flex;
`;

const Products = (props) => {
  const name = props.data.items;
  useEffect(() => console.log(name), [props.loading])
  
  return (
    <>
      <Header />
      <Banner srcBanner={bannerProducts} title='Products' />
      <>
        <TabsProductsCustom>
          <TabPanel value={0}>
            <div className='productsFilterContainer'>
              <Filters filterTitle='Wine Filter'>
                  <Select label='Country' />
                  <Select label='Region' />
                  <Select label='Producer' />
                  <Select label='Size' />
              </Filters>
            </div>
            <div className='productsListContainer'>
              {
                name && name.map(test => (
                  <CardProducts
                    key={test.id}
                    imageUrl={beerImage} 
                    title={test.name}
                    country={test.region}
                    region={test.region}
                    Produced={"Producer"}
                    size='Size'
                    style='Style'
                    practices='Practices'
                    grapes='Grapes'
                    other='Other Features'
                    price='$000,000'
                  />
                ))
              }
            </div>
          </TabPanel>
          <TabPanel value={1}>
          <div className='productsFilterContainer'>
              <Filters filterTitle='Liquor Filter'>
                  <Select label='Country' />
                  <Select label='Region' />
                  <Select label='Producer' />
                  <Select label='Size' />
              </Filters>
            </div>
            <div className='productsListContainer'>
              {
                name && name.map(test => (
                  <CardProducts
                    key={test.id}
                    imageUrl={beerImage} 
                    title={test.name}
                    code="8018-1111"
                    country={test.region}
                    type={"BEER BOTTLE"}
                    size="LAGER"
                    content='tester'
                  />
                ))
              }
            </div>
          </TabPanel>
          <TabPanel value={2}>
          <div className='productsFilterContainer'>
              <Filters filterTitle='Beer Filter'>
                  <Select label='Country' />
                  <Select label='Region' />
                  <Select label='Producer' />
                  <Select label='Size' />
              </Filters>
            </div>
            <div className='productsListContainer'>
              {
                name && name.map(test => (
                  <CardProducts
                    key={test.id}
                    imageUrl={beerImage} 
                    title={test.name}
                    code="8018-1111"
                    country={test.region}
                    type={"BEER BOTTLE"}
                    size="LAGER"
                    content='tester'
                  />
                ))
              }
            </div>
          </TabPanel>
          <TabPanel value={3}>
          <div className='productsFilterContainer'>
              <Filters filterTitle='Food Filter'>
                  <Select label='Country' />
                  <Select label='Region' />
                  <Select label='Producer' />
                  <Select label='Size' />
              </Filters>
            </div>
            <div className='productsListContainer'>
              {
                name && name.map(test => (
                  <CardProducts
                    key={test.id}
                    imageUrl={beerImage} 
                    title={test.name}
                    code="8018-1111"
                    country={test.region}
                    type={"BEER BOTTLE"}
                    size="LAGER"
                    content='tester'
                  />
                ))
              }
            </div>
          </TabPanel>
        </TabsProductsCustom>
      </>
      <Footer />
    </>
  )
}

export default Products