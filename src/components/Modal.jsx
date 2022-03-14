import React from 'react';
import '@styles/Modal.scss';

const Modal = ({ children }) => {
    return (
        <div className='ModalBackground'>
            {children}
        </div>
    )
}

export default Modal;