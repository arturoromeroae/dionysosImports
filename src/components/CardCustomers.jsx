import React from 'react';
import '@styles/CardProducts.scss';
import notFound from '@images/wine_not_found.png';

const CardCustomers = ({ title, 
                        address,
                        city, 
                        type, 
                        state, 
                        phone,
                        website
                    }) => {

    return (
        <div className='cardContainer'>
            <div>
                <div className='cardItemsContainer'>
                    <div className='cardContentContainer'>
                        <h3 className='titleCard'>{ title }</h3>
                        <p>Address <span className='descriptionCard'>{ address }</span></p>
                        <p>City <span className='descriptionCard'>{ city }</span></p>
                        <p>State <span className='descriptionCard'>{ state }</span></p>
                        <p>Phone <span className='descriptionCard'>{ phone }</span></p>
                        <p>Website <span className='descriptionCard'>{ website }</span></p>
                        <p>Type <span className='descriptionCard'>{ type }</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCustomers;