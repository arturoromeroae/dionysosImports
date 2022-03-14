import React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import '@styles/InputSearch.scss';

const InputSearch = ({ placeHolder }) => {
    return (
        <div className='searchContainer'>
            <div
                className='searchInput'
                component="form"
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder={placeHolder}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
  )
}

export default InputSearch;