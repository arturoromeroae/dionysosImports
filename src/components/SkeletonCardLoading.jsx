import React from 'react';
import '@styles/skeletonLoading.scss';

const SkeletonCardLoading = () => {
  return (
    <div className='cardLoadingContainer'>
        <div>
            <div>
                <div className='loadingRating'></div>
                <div className='loadingIcon'></div>
            </div>
            <div className='cardItemsLoading'>
                <div className='cardContentLoading'>
                    <h2 className='loadingTitle'>cargando..</h2>
                    <p className='loadingText'>cargando..</p>
                    <p className='loadingText2'>cargando..</p>
                    <p className='loadingText'>cargando..</p>
                    <p className='loadingText2'>cargando..</p>
                    <p className='loadingText'>cargando..</p>
                    <p className='loadingText2'>cargando..</p>
                </div>
                <div className='cardLoadingImageContainer'>
                    <div className='imageLoading'>cargando..</div>
                </div>
            </div>
            <div className='priceCardLoading'>cargando..</div>
        </div>
    </div>
  )
}

export default SkeletonCardLoading;