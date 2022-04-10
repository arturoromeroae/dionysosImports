import React from 'react';
import '@styles/CardIcon.scss';
import icon from '@images/icon-factory.svg'

const CardIcon = ({children}) => {
  return (
    <div className='cardIconContainer'>
      <div className='cardItem'>
        <img src={icon} />
        {children}
      </div>
    </div>
  )
}

export default CardIcon