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
import SkeletonCardLoading from '@components/SkeletonCardLoading';

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 14px;
  display: flex;
`;

const Products = (props) => {
  const [limitWine, setLimitWine] = useState(12);
  const [limitLiquor, setLimitLiquor] = useState(12);
  const [limitBeer, setLimitBeer] = useState(12);
  const [limitFood, setLimitFood] = useState(12);
  const winesInfo = props.dataWine.data;
  const liquorInfo = props.dataLiquor.data;
  const beerInfo = props.dataBeer.data;
  const foodInfo = props.dataFood.data;
  const winesInfoLength = props.lengthData;
  const n = 3;
  
  const increaseLimitWine = () => {
    setLimitWine(limitWine + 12);
  };

  const increaseLimitLiquor = () => {
    setLimitLiquor(limitLiquor + 12);
  };

  const increaseLimitBeer = () => {
    setLimitBeer(limitBeer + 12);
  };

  const increaseLimitFood = () => {
    setLimitFood(limitFood + 12);
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
            {props.loadingWine &&
              [...Array(n)].map((e, i) => (
                <div className='productsListContainerLoading'>
                  <SkeletonCardLoading />
                  <SkeletonCardLoading />
                </div>
                )
              )
            }
            <div className='productsListContainer'>
              {
                winesInfo && winesInfo.slice(0, limitWine).map(wine => (
                  <CardProducts
                    loading={props.loadingWine}
                    key={wine.prodCode}
                    imageUrl={wine.imagen} 
                    title={wine.prodName}
                    country={wine.country}
                    region={wine.region}
                    Produced={wine.producer}
                    size={wine.size}
                    style='Style'
                    practices='Practices'
                    grapes='Grapes'
                    other='Other Features'
                    price='$000,000'
                  />
                ))
              }
            </div>
            {!props.loadingWine &&
              <div className='buttonLoadMore'>
                <button onClick={increaseLimitWine}>Load More</button>
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
            {props.loadingLiquor &&
              [...Array(n)].map((e, i) => (
                <div className='productsListContainerLoading'>
                  <SkeletonCardLoading />
                  <SkeletonCardLoading />
                </div>
                )
              )
            }
            <div className='productsListContainer'>
              {
                liquorInfo && liquorInfo.slice(0, limitLiquor).map(liquor => (
                  <CardProducts
                    loading={props.loadingLiquor}
                    key={liquor.prodCode}
                    imageUrl={liquor.imagen} 
                    title={liquor.prodName}
                    country={liquor.country}
                    region={liquor.region}
                    Produced={liquor.producer}
                    size={liquor.size}
                    style='Style'
                    practices='Practices'
                    grapes='Grapes'
                    other='Other Features'
                    price='$000,000'
                  />
                ))
              }
            </div>
            {!props.loadingLiquor &&
              <div className='buttonLoadMore'>
                <button onClick={increaseLimitLiquor}>Load More</button>
              </div>
            }
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
            {props.loadingBeer &&
              [...Array(n)].map((e, i) => (
                <div className='productsListContainerLoading'>
                  <SkeletonCardLoading />
                  <SkeletonCardLoading />
                </div>
                )
              )
            }
            <div className='productsListContainer'>
              {
                beerInfo && beerInfo.slice(0, limitBeer).map(beer => (
                  <CardProducts
                    loading={props.loadingBeer}
                    key={beer.prodCode}
                    imageUrl={beer.imagen} 
                    title={beer.prodName}
                    country={beer.country}
                    region={beer.region}
                    Produced={beer.producer}
                    size={beer.size}
                    style='Style'
                    practices='Practices'
                    grapes='Grapes'
                    other='Other Features'
                    price='$000,000'
                  />
                ))
              }
            </div>
            {!props.loadingBeer &&
              <div className='buttonLoadMore'>
                <button onClick={increaseLimitBeer}>Load More</button>
              </div>
            }
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
            {props.loadingFood &&
              [...Array(n)].map((e, i) => (
                <div className='productsListContainerLoading'>
                  <SkeletonCardLoading />
                  <SkeletonCardLoading />
                </div>
                )
              )
            }
            <div className='productsListContainer'>
              {
                foodInfo && foodInfo.slice(0, limitFood).map(food => (
                  <CardProducts
                    loading={props.loadingFood}
                    key={food.prodCode}
                    imageUrl={food.imagen} 
                    title={food.prodName}
                    country={food.country}
                    region={food.region}
                    Produced={food.producer}
                    size={food.size}
                    style='Style'
                    practices='Practices'
                    grapes='Grapes'
                    other='Other Features'
                    price='$000,000'
                  />
                ))
              }
            </div>
            {!props.loadingFood &&
              <div className='buttonLoadMore'>
                <button onClick={increaseLimitFood}>Load More</button>
              </div>
            }
          </TabPanel>
        </TabsProductsCustom>
      </>
      <Footer />
    </>
  )
}

export default Products