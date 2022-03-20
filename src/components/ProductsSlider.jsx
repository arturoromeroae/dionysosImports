import React, { useEffect, useState } from 'react';
import '@styles/ProductsSlider.scss';
import bottle from '@images/bottle.png';
import bottle2 from '@images/bottle-2.png';
import bottle3 from '@images/bottle-3.png';
import bottle4 from '@images/bottle-4.png';
import bottle5 from '@images/bottle-5.png';
import bottle6 from '@images/bottle-6.png';

const productsImageArray = [bottle, bottle2, bottle3, bottle4, bottle5, bottle6];
const productsTextArray = [
    "This is excellent sangiovese, with flavors of dried cherry and cocoa powder and soft tannins. Pair it with  grilled meats and poultry. or pasta with meat sauces.", 
    "Medium ruby in color. Nice tannins wothout being harsh with perfect acidity. Cherry, pomegranate and cranberry all apear on a palate that is lush and expansively fruity, finishing in memorable minerality.", 
    "Dark ruby, with purple, black hues. The soft, deep red and black fruit notes seen together on the nose also show in abundance on the palate where they are accompanied by a fresh acid line and a super fine tannin frame.",
    "A pure, refined Gamay wine with a Burgundian personality, grown on soils more common to Vosne-Romanée than Beaujolais. Violet aromas, silky tannins, ruby-red fruit. Good amount of spice and acidity with great balance.",
    "Pale straw in color with a grayish tint. On the palate it is a dry white wine full of very crisp, refreshing and fruity and citrus flavors. It is a great wine to drinkon it's own, or with some nice lightappetizers.",
    "A concentrated blend of Touriga Nacional, jaén and Tinta Roriz. This is a rich wine, spicy and densely textured. It has concentration to balance the broad black fruits and acidity."
];
const productsTitleArray = [
  "Pietroso Rosso di Montalcino",
  "Joseph Swan Pinot Noir Cuvée de Trois",
  "Schild Estate Shiraz Barossa Valley",
  "Durdilly Beaujolais Grandes Coasses",
  "Bosinakis Mantinia Moschofilero",
  "Quinta Dos Grilos Dão Vinho Tinto Reserva"
];

const ProductsSlider = ({ iconLeft, iconRight }) => {
  const [product, setProduct] = useState(0);
  const [text, setText] = useState(0);
  const [title, setTitle] = useState(0);

  const handleRigthProduct = () => {
    setProduct(product + 1);
    setText(text + 1);
    setTitle(title + 1);
  }

  const handleLeftProduct = () => {
    if (product === 0) {
      setText(productsTextArray.length);
      setProduct(productsImageArray.length);
      setTitle(productsTitleArray.length);
    }else{
      setProduct(product - 1);
      setText(text - 1);
      setTitle(title - 1);
    }
  }

  const image = productsImageArray[product % productsImageArray.length];
  const content = productsTextArray[text % productsTextArray.length];
  const titleProduct = productsTitleArray[title % productsTitleArray.length];

  return (
    <>
      <h4 className='titleRecomendations'>Our Recomendations</h4>
      <div className='contaienerProductsSlider'>
        <div>
          <i onClick={handleLeftProduct} className={ iconLeft + ' iconSlider iconSliderLeft'}></i>
        </div>
        <div className='containerImageProductSlider'>
          <img className='imageProductSlider' src={image} />
        </div>
        <div className='contentContainer'>
          <h3 className='titleProductSlider'>{ titleProduct }</h3>
          <p>{ content }</p>
        </div>
        <div>
          <i onClick={handleRigthProduct} className={ iconRight + ' iconSlider iconSliderRight' }></i>
        </div>
      </div>
    </>
  )
}

export default ProductsSlider;