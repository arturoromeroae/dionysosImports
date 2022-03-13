import React from 'react';
import '@styles/Banner.scss'

const Banner = ({ srcBanner, title }) => {
  return (
    <section className='bannerTemplates'>
        <img className='BannerPage' src={srcBanner} alt='' />
        <h1 className='BannerTitle'>{title}</h1>
    </section>
  )
}

export default Banner;