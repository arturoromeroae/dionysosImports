import React from 'react';
import '@styles/CardProducts.scss';
import notFound from '@images/wine_not_found.png';

const CardProducts = ({ imageUrl,
                        title, 
                        brand,
                        country, 
                        region, 
                        size, 
                        type,
                        variety, 
                        rating 
                    }) => {

    return (
        <div className='cardContainer'>
            <div>
                <div className='cardItemsContainer'>
                    <div className='cardContentContainer'>
                        <h3 className='titleCard'>{ title }</h3>
                        <p>Brand <span className='descriptionCard'>{ brand }</span></p>
                        <p>Country <span className='descriptionCard'>{ country }</span></p>
                        <p>Region <span className='descriptionCard'>{ region }</span></p>
                        <p>Size <span className='descriptionCard'>{ size }</span></p>
                        <p>Type <span className='descriptionCard'>{ type }</span></p>
                        <p>Variety <span className='descriptionCard'>{ variety }</span></p>
                        <p>Rating <span className='descriptionCard'>{ rating }</span></p>
                        <p>Practices <span className='descriptionCard'></span></p>
                    </div>
                    <div className='cardImageContainer'>
                        <img
                            className='imageCard'
                            src={imageUrl}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src= notFound;
                            }}
                            alt="Image not found"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProducts;