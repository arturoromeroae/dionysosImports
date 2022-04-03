import React, { createContext, useState } from 'react';
import { getDataLiquor } from './getDataLiquor';
import { getDataWine } from './getDataWine';
import { getDataBeer } from './getDataBeer';
import { getDataFood } from './getDataFood';

const ProductsContext = createContext();

const DataContext = (props) => {
    const {
        dataWine: allDataWine,
        loadingWine,
        dataWineLength
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
    
    const [searchDataValue, setSearchDataValue] = useState('');

    let searchedDataWine = [];
    let searchedDataLiquor = [];
    let searchedDataBeer = [];
    let searchedDataFood = [];

    if (!searchDataValue.length >= 1) {
        searchedDataWine = allDataWine;
        searchedDataLiquor = allDataLiquor;
        searchedDataBeer = allDataBeer;
        searchedDataFood = allDataFood;
    }else{
        searchedDataWine = allDataWine.filter(data => {
            const dataContent = data.text.toLowerCase();
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
            dataWineLength,
            loadingWine,
            loadingLiquor,
            loadingBeer,
            loadingFood,
            setSearchDataValue
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export {ProductsContext, DataContext};