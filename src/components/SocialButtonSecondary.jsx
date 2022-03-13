import React from 'react';
import '@styles/SocialButtonSecondary.scss';

const SocialButtonSecondary = ({ icon }) => {
  return (
    <div className='socialButtonSecondary'>
        <i className={icon}></i>
    </div>
  )
}

export default SocialButtonSecondary;