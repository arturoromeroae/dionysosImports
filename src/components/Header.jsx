import React, { useState } from 'react';
import '@styles/Header.scss';
import banner from '@images/dionysos-logo.png';
import { Link, useLocation } from "react-router-dom";
import Modal from '@components/Modal'
import Button from './Button';
import SearchForm from './SearchForm';

const Header = () => {
  const [showText, setShowText] = useState('hidden');
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();

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
            <Button text='LOGIN' icon='fa-solid fa-unlock-keyhole' url='/login' />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;