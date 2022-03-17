import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import WineLoader from '@images/wine_loader.json';
import '@styles/LoadingAnimation.scss';

const LoadingAnimation = () => {
  return (
    <div className='LoadingContainer'>
        <Player
            autoplay
            loop
            src={WineLoader}
            className="loadingAnimation"
        />
        <h2>Loading...</h2>
    </div>
  )
}

export default LoadingAnimation;