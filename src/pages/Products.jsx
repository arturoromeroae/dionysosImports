import React, { useState, useContext } from 'react';
import '@styles/ProductsPage.scss'
import Header from '@components/Header';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import { styled } from '@mui/system';
import bannerProducts from '@images/Banner.jpg';
import CardProducts from '@components/CardProducts';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabsProductsCustom from '@components/TabsProductsCustom';
import Filters from '@components/Filters';
import Select from '@components/Select';
import SkeletonCardLoading from '@components/SkeletonCardLoading';
import { ProductsContext } from '@config/DataContext';

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 14px;
  display: flex;
`;

const Products = () => {
  const {
    searchedDataWine,
    searchedDataLiquor,
    searchedDataBeer,
    searchedDataFood,
    loadingWine,
    loadingLiquor,
    loadingBeer,
    loadingFood,
  } = useContext(ProductsContext)

  const [limitWine, setLimitWine] = useState(12);
  const [limitLiquor, setLimitLiquor] = useState(12);
  const [limitBeer, setLimitBeer] = useState(12);
  const [limitFood, setLimitFood] = useState(12);
  const winesInfo = searchedDataWine;
  const liquorInfo = searchedDataLiquor;
  const beerInfo = searchedDataBeer;
  const foodInfo = searchedDataFood;
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
              <Filters filterTitle='Wine Filter' count={!loadingWine && searchedDataWine.length}>
                  <Select label='Brand' brands={winesInfo} />
                  <Select label='Country' countries={winesInfo} />
                  <Select label='Producer' producers={winesInfo} />
                  <Select label='Region' regions={winesInfo} />
                  <Select label='Size' sizes={winesInfo} />
              </Filters>
            </div>
            {loadingWine &&
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
                    loading={loadingWine}
                    key={wine.prodCode}
                    imageUrl={wine.imagen} 
                    title={wine.prodName}
                    brand={wine.brand}
                    country={wine.country}
                    region={wine.region}
                    size={wine.size}
                    type={wine.prodType}
                    variety={wine.variety}
                    rating={wine.rating}
                  />
                ))
              }
            </div>
            {!loadingWine && limitWine < searchedDataWine.length &&
              <div className='buttonLoadMore'>
                <button onClick={increaseLimitWine}>Load More</button>
              </div>
            }
          </TabPanel>
          <TabPanel value={1}>
            <div className='productsFilterContainer'>
              <Filters filterTitle='Liquor Filter' count={!loadingLiquor && searchedDataLiquor.length}>
                <Select label='Brand' brands={liquorInfo} />
                <Select label='Country' countries={liquorInfo} />
                <Select label='Producer' producers={liquorInfo} />
                <Select label='Region' regions={liquorInfo} />
                <Select label='Size' sizes={liquorInfo} />
              </Filters>
            </div>
            {loadingLiquor &&
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
                    loading={loadingLiquor}
                    key={liquor.prodCode}
                    imageUrl={liquor.imagen} 
                    title={liquor.prodName}
                    brand={liquor.brand}
                    country={liquor.country}
                    region={liquor.region}
                    size={liquor.size}
                    type={liquor.prodType}
                    variety={liquor.variety}
                    rating={liquor.rating}
                  />
                ))
              }
            </div>
            {!loadingLiquor && limitLiquor < searchedDataLiquor.length &&
              <div className='buttonLoadMore'>
                <button onClick={increaseLimitLiquor}>Load More</button>
              </div>
            }
          </TabPanel>
          <TabPanel value={2}>
            <div className='productsFilterContainer'>
              <Filters filterTitle='Beer Filter' count={!loadingBeer && searchedDataBeer.length}>
                <Select label='Brand' brands={beerInfo} />
                <Select label='Country' countries={beerInfo} />
                <Select label='Producer' producers={beerInfo} />
                <Select label='Region' regions={beerInfo} />
                <Select label='Size' sizes={beerInfo} />
              </Filters>
            </div>
            {loadingBeer &&
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
                    loading={loadingBeer}
                    key={beer.prodCode}
                    imageUrl={beer.imagen} 
                    title={beer.prodName}
                    brand={beer.brand}
                    country={beer.country}
                    region={beer.region}
                    size={beer.size}
                    type={beer.prodType}
                    variety={beer.variety}
                    rating={beer.rating}
                  />
                ))
              }
            </div>
            {!loadingBeer && limitBeer < searchedDataBeer.length &&
              <div className='buttonLoadMore'>
                <button onClick={increaseLimitBeer}>Load More</button>
              </div>
            }
          </TabPanel>
          <TabPanel value={3}>
            <div className='productsFilterContainer'>
              <Filters filterTitle='Food Filter' count={!loadingFood && searchedDataFood.length}>
                <Select label='Brand' brands={foodInfo} />
                <Select label='Country' countries={foodInfo} />
                <Select label='Producer' producers={foodInfo} />
                <Select label='Region' regions={foodInfo} />
                <Select label='Size' sizes={foodInfo} />
              </Filters>
            </div>
            {loadingFood &&
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
                    loading={loadingFood}
                    key={food.prodCode}
                    imageUrl={food.imagen} 
                    title={food.prodName}
                    brand={food.brand}
                    country={food.country}
                    region={food.region}
                    size={food.size}
                    type={food.prodType}
                    variety={food.variety}
                    rating={food.rating}
                  />
                ))
              }
            </div>
            {!loadingFood && limitFood < searchedDataFood.length &&
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