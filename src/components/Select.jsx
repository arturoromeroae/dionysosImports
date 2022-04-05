import React, { useContext } from 'react';
import '@styles/Select.scss';
import { ProductsContext } from '@config/DataContext';

const Select = ({ label, countries, regions, producers, sizes, brands }) => {
    const { searchDataValue, setSearchDataValue } = useContext(ProductsContext);

    let countriesArr = [];
    let regionsArr = [];
    let producersArr = [];
    let sizesArr = [];
    let brandsArr = [];

    countries && countries.map(dataCountry => (countriesArr.push(dataCountry.country)));
    regions && regions.map(dataCountry => (regionsArr.push(dataCountry.region)));
    producers && producers.map(dataProducer => (producersArr.push(dataProducer.producer)));
    sizes && sizes.map(dataSize => (sizesArr.push(dataSize.size)));
    brands && brands.map(dataBrand => (brandsArr.push(dataBrand.brand)));

    let countriesSet = new Set(countriesArr);
    let regionsSet = new Set(regionsArr);
    let producersSet = new Set(producersArr);
    let sizesSet = new Set(sizesArr);
    let brandsSet = new Set(brandsArr);

    countriesArr = [...countriesSet];
    regionsArr = [...regionsSet];
    producersArr = [...producersSet];
    sizesArr = [...sizesSet];
    brandsArr = [...brandsSet];

    const filterProducts = (e) => {
        e.preventDefault();
        setSearchDataValue(e.target.value);
    }

    return (
        <div className='itemsFilter'>
            <label>{label}</label>
            <select value={searchDataValue} onChange={filterProducts} defaultValue={'all'}>
                <option value='all'>All</option>
                {
                    countries && countriesArr.sort().map( dataCountry => (
                        <option value={dataCountry}>{dataCountry}</option>
                    ))
                }
                {
                    regions && regionsArr.sort().map( dataRegion => (
                        <option value={dataRegion}>{dataRegion}</option>
                    ))
                }
                {
                    producers && producersArr.sort().map( dataProducer => (
                        <option value={dataProducer}>{dataProducer}</option>
                    ))
                }
                {
                    sizes && sizesArr.map( dataSize => (
                        <option value={dataSize}>{dataSize}</option>
                    ))
                }
                {
                    brands && brandsArr.sort().map( dataBrand => (
                        <option value={dataBrand}>{dataBrand}</option>
                    ))
                }
            </select>
        </div>
  )
}

export default Select;