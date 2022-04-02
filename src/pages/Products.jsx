import React, {useEffect, useState} from 'react';
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
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 14px;
  display: flex;
`;

const Products = (props) => {
  const [limit, setLimit] = useState(12)
  const productsInfo = props.data.data;
  const productsInfoLength = props.lengthData
  useEffect(() => console.log(productsInfoLength), [props.loading])
  
  const increaseLimit = () => {
    
      setLimit(limit + 12)
    
  };

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
            {props.loading &&
              <Stack className='loadingProductsContainer' spacing={2}>
                <LinearProgress color="inherit" className='loadingProductsBar' />
              </Stack>
            }
            <div className='productsListContainer'>
              {
                productsInfo && productsInfo.slice(0, limit).map(resp => (
                  <CardProducts
                    loading={props.loading}
                    key={resp.prodCode}
                    imageUrl={resp.imagen} 
                    title={resp.prodName}
                    country={resp.country}
                    region={resp.region}
                    Produced={resp.producer}
                    size={resp.size}
                    style='Style'
                    practices='Practices'
                    grapes='Grapes'
                    other='Other Features'
                    price='$000,000'
                  />
                ))
              }
            </div>
            {!props.loading &&
              <div className='buttonLoadMore'>
                <button onClick={increaseLimit}>Load More</button>
              </div>
            }
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
                productsInfo && productsInfo.map(test => (
                  <CardProducts
                    key={test.prodCode}
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
                productsInfo && productsInfo.map(test => (
                  <CardProducts
                    key={test.prodCode}
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
                productsInfo && productsInfo.map(test => (
                  <CardProducts
                    key={test.prodCode}
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