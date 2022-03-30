import React from 'react';
import '@styles/ImageBackground.scss';
import ButtonSecondary from './ButtonSecondary';

const ImageBackground = ({ url, title, textButton, src }) => {
  return (
    <div className='containerImageBg'>
        <h2>{title}</h2>
        <div className='containerItemsImageBg'>
            <a className='buttonImageBg' href={url}>{textButton}</a>
        </div>
    </div>
  )
}

export default ImageBackground;