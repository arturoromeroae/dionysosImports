import React, { useContext } from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { ProductsContext } from '@config/DataContext';

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

const TabsProductsCustom = ({ children }) => {
  const { searchDataValue, setSearchDataValue } = useContext(ProductsContext);

  const resetSearch = (e) => {
    setSearchDataValue('');
  }

  return (
      <TabsUnstyled defaultValue={0}>
          <TabsList>
              <Tab onClick={resetSearch}>Wine</Tab>
              <Tab onClick={resetSearch}>Liquor</Tab>
              <Tab onClick={resetSearch}>Beer</Tab>
              <Tab onClick={resetSearch}>Foods</Tab>
          </TabsList>
          {children}
      </TabsUnstyled>
  )
}

export default TabsProductsCustom;