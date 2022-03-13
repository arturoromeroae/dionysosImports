import React from 'react';
import '@styles/Text.scss';

const Text = ({ children }) => {
  return (
    <>
        <p className='textComponent'>{children}</p>
    </>
  )
}

export default Text;