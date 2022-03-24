import React from 'react';
import '@styles/ImageLeft.scss';
import ButtonSecondary from './ButtonSecondary';

const ImageLeft = ({ url, title, textButton, src }) => {
  return (
    <div className='containerImageLeft'>
        <img className='imageLeft' src={url} />
        <div>
            <h2>{title}</h2>
            <ButtonSecondary text='SEE MORE' url={src} />
        </div>
    </div>
  )
}

export default ImageLeft;