import React from 'react';
import '@styles/Rating.scss';
import Rating from '@mui/material/Rating';

const RatingStar = () => {

    return (
        <>
            <Rating className='rating' name="read-only" value='3' readOnly />
        </>
    )
}

export default RatingStar