import React from 'react';
import '@styles/CardIcon.scss';

const CardIcon = ({children}) => {
  return (
    <div className='cardIconContainer'>
        {children}
    </div>
  )
}

export default CardIcon