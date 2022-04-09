import React from 'react';
import '@styles/Banner.scss';

const Banner = ({ srcBanner, title }) => {
  return (
    <section className='bannerTemplates'>
      <img className='BannerPage' src={srcBanner} alt='' />
      <h1 className='BannerTitle'>{title}</h1>
      <div className='containerBc'>
        <ul className='listBc'>
            <li><a href='/'>Home</a></li>
            <li className='separatorBc'>-</li>
            <li>{title}</li>
        </ul>
      </div>
    </section>
  )
}

export default Banner;