import React, { createContext, useState } from 'react';
import { getData } from './getData';

const ProductsContext = createContext();

const DataContext = (props) => {
    
    const {
        data: allData,
        loading
    } = getData(4)
    
    const [searchDataValue, setSearchDataValue] = useState('');

    let searchedData = allData.data;

    // if (searchDataValue.length <= 1) {
    //     searchedDataWine = allDataWine.data;
        
    // }else{
    //     searchedDataWine = allDataWine.data.filter(data => {
    //         const dataContent = data.filtro.toLowerCase();
    //         const searchContent = searchDataValue.toLowerCase();
    //         return dataContent.includes(searchContent);
    //     })
    // }
    
    // if(searchDataValueCustomer.length <= 1){
    //     searchedDataCustomer = allDataCustomer.data;
    // }else{
    //     searchedDataCustomer = allDataCustomer.data.filter(data => {
    //         const dataContent = data.filtro.toLowerCase();
    //         const searchContent = searchDataValue.toLowerCase();
    //         return dataContent.includes(searchContent);
    //     })
    // }

    return (
        <ProductsContext.Provider value={{
            searchedData,
            loading
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export {ProductsContext, DataContext};