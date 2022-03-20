import React, { useEffect, useState } from 'react';
import videoWine from '@videos/wine-video.mp4';
import '@styles/Slider.scss';
import LottieArrow from '@components/LottieArrow';

const imageArray = ['/Imagenes/WebLink1.jpg', '/Imagenes/WebLink2.jpg', '/Imagenes/WebLink3.jpg'];

const Slider = () => {
  const CUSTOM_URL = process.env.CUSTOM_URL;
  const [banner, setBanner] = useState(0);
  const [animation, setAnimation] = useState('opacityNull');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timerId = setInterval(() => {
      setBanner(banner => banner + 1);
      setAnimation('opacity')
      setLoading(false);
    }, 8000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAnimation('opacityNull');
    }, 300);
  }, [animation]);


  const image = imageArray[banner % imageArray.length];
  console.log(loading);
  return (
    <div className='containerSlider'>
        <h1 className='sliderTitle'>Importers and Distributors of <br /> fine wine, beer, and liquor</h1>
        <img rel='preload' className={'bannerImg ' + animation} src={CUSTOM_URL + image} alt='Image not found' />
        {/* <video className='bannerImg' loop autoPlay muted>
          <source src={videoWine} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <LottieArrow />
    </div>
  )
}

export default Slider