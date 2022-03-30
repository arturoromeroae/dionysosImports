import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import arrow from '@images/arrow.json';
import '@styles/LottieAnimation.scss'

const LottieArrow = () => {
  return (
    <div className='animationContainer'>
        <Player
          autoplay
          loop
          src={arrow}
          className="arrowAnimation"
        />
    </div>
  )
}

export default LottieArrow;