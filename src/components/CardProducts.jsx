import React, { useEffect, useState } from 'react';
import '@styles/CardProducts.scss';
import notFound from '@images/wine_not_found.png';
import cart from '@images/cart.svg';
import RatingStar from '@components/RatingStar';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CardProducts = ({ imageUrl,
                        title, 
                        country, 
                        region, 
                        produced, 
                        size, 
                        style, 
                        practices, 
                        grapes, 
                        other,
                        price, 
                        content 
                    }) => {
    const [imageSrc, setImageSrc] = useState(notFound);
    const [loadingimage, setLoadingImage] = useState(true);
    useEffect(() => (setImageSrc(imageUrl), setLoadingImage(false)), [imageUrl]);

    return (
        <div className='cardContainer'>
            <div>
                <div>
                    <RatingStar />
                    <img className='cartIcon' src={cart} />
                </div>
                <div className='cardItemsContainer'>
                    <div className='cardContentContainer'>
                        <h3 className='titleCard'>{ title }</h3>
                        <p>Country <span className='descriptionCard'>{ country }</span></p>
                        <p>Region <span className='descriptionCard'>{ region }</span></p>
                        <p>Produced <span className='descriptionCard'>{ produced }</span></p>
                        <p>Size <span className='descriptionCard'>{ size }</span></p>
                        <p>Style <span className='descriptionCard'>{ style }</span></p>
                        <p>Practices <span className='descriptionCard'>{ practices }</span></p>
                        <p>Grapes <span className='descriptionCard'>{ grapes }</span></p>
                        <p>Other Features <span className='descriptionCard'>{ other }</span></p>
                    </div>
                    <div className='cardImageContainer'>
                        {loadingimage && 
                            <Box sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>
                        }
                        {!loadingimage &&
                            <img
                                className='imageCard'
                                src={imageSrc}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src= notFound;
                                }}
                                alt="Image not found"
                            />
                        }
                    </div>
                </div>
                <h2 className='priceCard'>{ price }</h2>
            </div>
        </div>
    )
}

export default CardProducts;