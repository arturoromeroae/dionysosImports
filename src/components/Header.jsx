import React, { useState } from 'react';
import '@styles/Header.scss';
import banner from '@images/dionysos-logo.png';
import logoSeven from '@images/logo-seven.png';
import { Link, useLocation } from "react-router-dom";
import InputSearch from './InputSearch';
import { useAuth } from '@context/authContext';
import SocialButton from '@components/SocialButton';
import SocialCustomButton from '@components/SocialCustomButton';

const Header = () => {
  const [showText, setShowText] = useState('hidden');
  const [openModal, setOpenModal] = useState(false);
  const { user, logout } = useAuth()
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
  }

  const menuMobile = () => {
    const menuMobile = document.getElementById('menuMobile')
    menuMobile.style.display = menuMobile.style.display === 'none' ? 'block' : 'none';
  }

  return (
    <nav>
      <div className='menuContainer'>
        <ul id='menuList' className='menuList'>
          <li className='menuListLogo'><img className='logoMenu' src={banner} /></li>
          <li>
            <Link className={(location.pathname === '/') ? 'active linkItem' : 'linkItem'} to="/">Home</Link>
          </li>
          <li>
            <Link className={(location.pathname === '/about-us') ? 'active linkItem' : 'linkItem'} to="/about-us">About Us</Link>
          </li>
          <li>
            <Link className={(location.pathname === '/products') ? 'active linkItem' : 'linkItem'} to="/products">Products</Link>
          </li>
          <li>
            <Link className={(location.pathname === '/customer') ? 'active linkItem' : 'linkItem'} to="/customer">Customer</Link>
          </li>
          <li>
            <Link className={(location.pathname === '/distributors') ? 'active linkItem' : 'linkItem'} to="/distributors">Distributors</Link>
          </li>
          <li>
            <Link className={(location.pathname === '/contact') ? 'active linkItem' : 'linkItem'} to="/contact">Contact</Link>
          </li>
          {user && (
            <li>
              <Link className={(location.pathname === '/admin-panel') ? 'active linkItem' : 'linkItem'} to="/admin-panel">Admin Dashboard</Link>
            </li>
          )}
          <li className='menuListSearch'><InputSearch placeHolder="Search" /></li>
          <li className='menuListSocial'>
            <SocialButton icon={'fa-brands fa-facebook fa-1x'} />
            <SocialButton icon={'fa-brands fa-instagram fa-1x'} />
            <SocialButton icon={'fa-brands fa-twitter fa-1x'} />
            <SocialCustomButton src={logoSeven} />
          </li>
          {user && (
            <li className='loginButtonList'>
                <button className='logoutButton' onClick={handleLogout}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                  Logout
                </button>
            </li>
          )}
          <li className='menuMobileIcon'><i id='menuIconMobile' className="fa-solid fa-bars" onClick={menuMobile}></i></li>
        </ul>
      </div>
      <div id='menuMobile'>
        <ul className='listMenuMobile'>
          <li>
            <Link className={(location.pathname === '/') ? 'active linkMobile' : 'linkMobile'} to="/">Home</Link>
          </li>
          <li>
            <Link className={(location.pathname === '/about-us') ? 'active linkMobile' : 'linkMobile'} to="/about-us">About Us</Link>
          </li>
          <li>
            <Link className={(location.pathname === '/products') ? 'active linkMobile' : 'linkMobile'} to="/products">Products</Link>
          </li>
          <li>
            <Link className={(location.pathname === '/customer') ? 'active linkMobile' : 'linkMobile'} to="/customer">Customer</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;