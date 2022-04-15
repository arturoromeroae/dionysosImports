import React, { useContext, useState } from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { ProductsContext } from '@config/DataContext';
import Filters from '@components/Filters';
import Select from '@components/Select';
import SkeletonCardLoading from '@components/SkeletonCardLoading';
import CardProducts from '@components/CardProducts';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { getData } from '@config/getData';

const Tab = styled(TabUnstyled)`
    color: white;
    cursor: pointer;
    font-size: 20px;
    background-color: transparent;
    padding: 6px 50px;
    margin: 6px 6px;
    border: none;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    z-index: 1;

  &:hover {
    background-color: white;
    color: black
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid #780725;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: rgba(203, 203, 203, 0.9);
    color: black;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: transparent;
  margin-bottom: 0px;
  padding-top: 170px;
  padding-left: 30%;
  padding-bottom: 1%;
  display: flex;
  align-items: center;
  justify-content: left;
  align-content: space-between;
  z-index: 1;
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 14px;
  display: flex;
`;

const TabsProductsCustom = () => {

  const {
    loading,
    searchedData,
  } = useContext(ProductsContext)
  
  const[info, setInfo] = useState(searchedData);

  const resetSearch = () => {
    setInfo(searchedData)
  }

  const [limitWine, setLimitWine] = useState(12);
  const n = 3;

  const increaseLimitWine = () => {
    setLimitWine(limitWine + 12);
  };

  return (
      <TabsUnstyled defaultValue={0}>
          <TabsList>
              <Tab onClick={resetSearch}>Wine</Tab>
              <Tab onClick={resetSearch}>Liquor</Tab>
              <Tab onClick={resetSearch}>Beer</Tab>
              <Tab onClick={resetSearch}>Foods</Tab>
          </TabsList>
          <TabPanel value={0}>
            <div className='productsFilterContainer'>
              <Filters filterTitle='Wine Filter' count={!loading}>
                  <Select label='Brand'  />
                  <Select label='Country'  />
                  <Select label='Producer'  />
                  <Select label='Region'  />
                  <Select label='Size'  />
              </Filters>
            </div>
            {loading &&
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
                searchedData && searchedData.slice(0, limitWine).map(wine => (
                  <CardProducts
                    loading={loading}
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
            {!loading &&
              <div className='buttonLoadMore'>
                <button onClick={increaseLimitWine}>Load More</button>
              </div>
            }
          </TabPanel>
      </TabsUnstyled>
  )
}

export default TabsProductsCustom;