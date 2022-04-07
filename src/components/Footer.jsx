import React from 'react';
import '@styles/Footer.scss';
import logo from '@images/logo_white 1.png';
import SocialButtonSecondary from '@components/SocialButtonSecondary';

const Footer = () => {
  return (
    <footer>
        {/* <div className='Social'>
            <ul className='SocialFooter'>
                <li><SocialButtonSecondary icon={'fa-brands fa-facebook fa-2x'} /></li>
                <li><SocialButtonSecondary icon={'fa-brands fa-instagram fa-2x'} /></li>
                <li><SocialButtonSecondary icon={'fa-brands fa-twitter fa-2x'} /></li>
            </ul>
        </div> */}
        <div className='logoFooter'>
            <img src={logo} />
            <p className='address'>11581 Robertson Dr Manassas, VA 2010.  Tel: <a href='tel:703-392-7073'>(703) 392-7073</a> <br />Monday – Friday: 8am – 5pm</p>
        </div>
        <div className='Menu'>
            <ul className='MenuFooter'>
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Customer</li>
                <li>Contact</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer;