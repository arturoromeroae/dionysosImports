import React from 'react';
import '@styles/ProductsSlider.scss';

const ProductsSlider = ({ iconLeft, iconRight, image, title, content }) => {
  return (
    <>
      <h4 className='titleRecomendations'>Our Recomendations</h4>
      <div className='contaienerProductsSlider'>
        <div>
          <i className={ iconLeft + ' iconSlider'}></i>
        </div>
        <div>
          <img className='imageProductSlider' src={image} />
        </div>
        <div className='contentContainer'>
          <h3 className='titleProductSlider'>{ title }</h3>
          <p>{ content }</p>
        </div>
        <div>
          <i className={ iconRight + ' iconSlider' }></i>
        </div>
      </div>
    </>
  )
}

export default ProductsSlider;