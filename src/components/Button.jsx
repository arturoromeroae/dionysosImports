import React from 'react';
import '@styles/Button.scss';
import { Link, useLocation } from 'react-router-dom';

const Button = ({ text, icon, url }) => {
  const location = useLocation();

  return (
    <div>
        <Link to={url} className={(location.pathname === '/login') ? 'activeButton ButtonSite' : 'ButtonSite'}>
          <i className={ icon }></i>
          <span>{ text }</span>
        </Link>
    </div>
  )
}

export default Button;