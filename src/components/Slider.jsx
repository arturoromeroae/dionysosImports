import React from 'react';
import videoWine from '@videos/wine-video.mp4';
import '@styles/Slider.scss';
import LottieArrow from '@components/LottieArrow';

const Slider = () => {
  const CUSTOM_URL = process.env.CUSTOM_URL;
  
  return (
    <div className='containerSlider'>
        <h1 className='sliderTitle'>Importers and Distributors of <br /> fine wine, beer, and liquor</h1>
        <img className='bannerImg' src={CUSTOM_URL + '/Imagenes/WebLink1.jpg'} alt='' />
        {/* <video className='bannerImg' loop autoPlay muted>
          <source src={videoWine} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <LottieArrow />
    </div>
  )
}

export default Slider