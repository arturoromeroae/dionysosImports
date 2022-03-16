import React, { useState } from 'react';
import '@styles/Header.scss';
import banner from '@images/dionysos-logo.png';
import { Link, useLocation } from "react-router-dom";
import Modal from '@components/Modal'
import Button from './Button';
import SearchForm from './SearchForm';
import { useAuth } from '@context/authContext';

const Header = () => {
  const [showText, setShowText] = useState('hidden');
  const [openModal, setOpenModal] = useState(false);
  const { user, logout } = useAuth()
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
  }

  return (
    <nav>
      <div className='menuContainer'>
        <ul className='menuList'>
          <li><img src={banner} /></li>
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
          {user && (
            <li>
              <Link className={(location.pathname === '/admin-panel') ? 'active linkItem' : 'linkItem'} to="/admin-panel">Admin Dashboard</Link>
            </li>
          )}
          <li>
            <div className='search' 
                onMouseOver={() => setShowText('displayText')} onMouseOut={() => setShowText('hidden')}
                onClick={() => setOpenModal(true)}
            >
              <i id='searchIcon' className='fa-solid fa-magnifying-glass'></i>
              <h4 id='searchTitle' className={showText}>Search</h4>
            </div>
            {!!openModal && (
                <Modal>
                    <SearchForm setOpenModal={setOpenModal} />
                </Modal>
            )}
          </li>
          <li>
            {!user && (
              <Button text='LOGIN' icon='fa-solid fa-unlock-keyhole' url='/login' />
            )}
            {user && (
              <button className='logoutButton' onClick={handleLogout}>
                <i class="fa-solid fa-right-from-bracket"></i>
                LOGOUT
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;