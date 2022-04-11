import React, { createContext, useState } from 'react';
import { getDataLiquor } from './getDataLiquor';
import { getDataWine } from './getDataWine';
import { getDataBeer } from './getDataBeer';
import { getDataFood } from './getDataFood';
import { getDataCustomer } from './getDataCustomer';

const ProductsContext = createContext();

const DataContext = (props) => {
    const {
        dataWine: allDataWine,
        loadingWine
    } = getDataWine()

    const {
        dataLiquor: allDataLiquor,
        loadingLiquor,
        dataLiquorLength
    } = getDataLiquor()

    const {
        dataBeer: allDataBeer,
        loadingBeer,
        dataBeerLength
    } = getDataBeer()

    const {
        dataFood: allDataFood,
        loadingFood,
        dataFoodLength
    } = getDataFood()

    const {
        dataCustomer: allDataCustomer,
        loadingCustomer,
        dataCustomerLength
    } = getDataCustomer()
    
    const [searchDataValue, setSearchDataValue] = useState('');
    const [searchDataValueCustomer, setSearchDataValueCustomer] = useState('');

    let searchedDataWine = [];
    let searchedDataLiquor = [];
    let searchedDataBeer = [];
    let searchedDataFood = [];

    let searchedDataCustomer = [];

    if (searchDataValue.length <= 1) {
        searchedDataWine = allDataWine.data;
        searchedDataLiquor = allDataLiquor.data;
        searchedDataBeer = allDataBeer.data;
        searchedDataFood = allDataFood.data;
        
    }else{
        searchedDataWine = allDataWine.data.filter(data => {
            const dataContent = data.filtro.toLowerCase();
            const searchContent = searchDataValue.toLowerCase();
            return dataContent.includes(searchContent);
        })

        searchedDataLiquor = allDataLiquor.data.filter(data => {
            const dataContent = data.filtro.toLowerCase();
            const searchContent = searchDataValue.toLowerCase();
            return dataContent.includes(searchContent);
        })

        searchedDataBeer = allDataBeer.data.filter(data => {
            const dataContent = data.filtro.toLowerCase();
            const searchContent = searchDataValue.toLowerCase();
            return dataContent.includes(searchContent);
        })

        searchedDataFood = allDataFood.data.filter(data => {
            const dataContent = data.filtro.toLowerCase();
            const searchContent = searchDataValue.toLowerCase();
            return dataContent.includes(searchContent);
        })
        
    }
    
    if(searchDataValueCustomer.length <= 1){
        searchedDataCustomer = allDataCustomer.data;
    }else{
        searchedDataCustomer = allDataCustomer.data.filter(data => {
            const dataContent = data.filtro.toLowerCase();
            const searchContent = searchDataValue.toLowerCase();
            return dataContent.includes(searchContent);
        })
    }

    return (
        <ProductsContext.Provider value={{
            searchedDataWine,
            searchedDataLiquor,
            searchedDataBeer,
            searchedDataFood,
            searchedDataCustomer,
            loadingWine,
            loadingLiquor,
            loadingBeer,
            loadingFood,
            loadingCustomer,
            setSearchDataValue,
            setSearchDataValueCustomer
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export {ProductsContext, DataContext};