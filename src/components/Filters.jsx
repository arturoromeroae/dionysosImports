import React from 'react';
import '@styles/Filters.scss';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Filters = ({ children, filterTitle }) => {
    return (
        <div className='ContainerFilterForm'>
            <div className='searchInput' component="form">
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder='Search'
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </div>
            <h3 className='titleFilter'>{filterTitle}</h3>
            <form>
                <div className='filterContainer'>
                    {children}
                </div>
                <div className='buttonsContainer'>
                    <button type='reset' className='resetButton'>Reset</button>
                    <button className='filterButton'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Filters;