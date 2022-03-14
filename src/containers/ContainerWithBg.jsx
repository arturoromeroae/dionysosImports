import React from 'react';
import '@styles/ContainerWithBg.scss';

const ContainerWithBg = ({ children }) => {
  return (
    <div className='contanerLayoutBg'>
      {children}
    </div>
  )
}

export default ContainerWithBg;