import React from 'react';
import '@styles/ButtonSecondary.scss';

const ButtonSecondary = ({ url, text }) => {
  return (
    <div>
        <a href={url} className='ButtonSecondary'>
            <span>{ text }</span>
            <i className="fa-solid fa-angle-right"></i>
        </a>
    </div>
  )
}

export default ButtonSecondary;