import React from 'react';
import '@styles/SocialButton.scss';

const SocialButton = ({ icon }) => {
  return (
    <div className='socialButton'>
        <i className={icon}></i>
    </div>
  )
}

export default SocialButton;