import React from 'react';
import '@styles/TextImage.scss';

const TextImage = ({ title, content, url }) => {
  return (
    <div className='container'>
        <h2>{title}</h2>
        <p>{content}</p>
        <img src={url} />
    </div>
  )
}

export default TextImage;