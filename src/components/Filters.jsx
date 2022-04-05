import React, { useContext, useState } from 'react';
import '@styles/Filters.scss';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ProductsContext } from '@config/DataContext';

const Filters = ({ children, filterTitle, count }) => {
    const { searchDataValue, setSearchDataValue } = useContext(ProductsContext);
    
    const filterTodo = (e) => {
        setSearchDataValue(e.target.value);
    }

    const resetTodo = (e) => {
        e.preventDefault();
        setSearchDataValue('');
    }

    return (
        <div className='ContainerFilterForm'>
            <div className='searchInput' component="form">
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder='Search'
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchDataValue}
                    onChange={filterTodo}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </div>
            <p className='productsCount'>Available Products: {count}</p>
            <h3 className='titleFilter'>{filterTitle}</h3>
            <form>
                <div className='filterContainer'>
                    {children}
                </div>
                <div className='buttonsContainer'>
                    <button onClick={resetTodo} type='reset' className='resetButton'>Reset</button>
                    <button type='submit' className='filterButton'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Filters;