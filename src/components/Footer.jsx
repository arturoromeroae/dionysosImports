import React from 'react';
import '@styles/Footer.scss';
import logo from '@images/dionysos-logo.png';
import SocialButtonSecondary from '@components/SocialButtonSecondary';

const Footer = () => {
  return (
    <footer>
        <div className='logoFooter'>
            <img src={logo} />
            <p className='address'>11581 Robertson Dr Manassas, VA 2010</p>
            <p className='phone'><strong>Tel:</strong> <a className='linkFooter' href='tel:703-392-7073'>(703) 392-7073</a></p>
            <p className='hours'>Monday – Friday: <strong>8am – 5pm</strong></p>
        </div>
        <div className='Menu'>
            <ul className='MenuFooter'>
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Customer</li>
            </ul>
        </div>
        <div className='Social'>
            <ul className='SocialFooter'>
                <li><SocialButtonSecondary icon={'fa-brands fa-instagram fa-2x'} /></li>
                <li><SocialButtonSecondary icon={'fa-brands fa-facebook fa-2x'} /></li>
                <li><SocialButtonSecondary icon={'fa-brands fa-twitter fa-2x'} /></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer;