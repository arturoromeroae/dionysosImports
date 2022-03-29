import React, { createContext, useState } from 'react';
import { getData } from './getData';

const ProductsContext = createContext();

const DataContext = (props) => {
    const {
        data: allData, 
        loading
    } = getData()
    
    const [searchDataValue, setSearchDataValue] = useState('');

    let searchedData = [];

    if (!searchDataValue.length >= 1) {
        searchedData = allData;
    }else{
        searchedData = allData.filter(data => {
            const dataContent = data.text.toLowerCase();
            const searchContent = searchDataValue.toLowerCase();
            return dataContent.includes(searchContent);
        })
    }

    return (
        <ProductsContext.Provider value={{
            searchedData, 
            loading,
            setSearchDataValue
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export {ProductsContext, DataContext};