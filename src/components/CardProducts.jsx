import React from 'react';
import '@styles/CardProducts.scss';
import cart from '@images/cart.svg';
import RatingStar from '@components/RatingStar';

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
                        <img className='imageCard' src={imageUrl} alt="Image not found" />
                    </div>
                </div>
                <h2 className='priceCard'>{ price }</h2>
            </div>
        </div>
    )
}

export default CardProducts;