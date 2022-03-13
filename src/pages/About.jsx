import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import Text from '@components/Text';
import imageAbout from '@images/banner_about.jpg';
import logoBgWhite from '@images/dyonisos_logo_bg_white.jpg';
import '@styles/AboutPage.scss';

const About = () => {
  return (
    <>
      <Header />
      <Banner srcBanner={imageAbout} title='About Us' />
      <div className='aboutTextContainer'>
        <img className='logoAbout' src={logoBgWhite} />
        <Text>
          <p><strong>Dionysos Imports</strong> was established in 1991 by Yannis Tsapos. Initially, we imported and distributed wines and beers from Greece and Cyprus. In 1992, we expanded our operations to include wines from Italy, as well as from Virginia and California. In 1993 and 1994, further expansion included wines from France and Portugal.</p>
          <p>We currently import some of the best rated and regarded wines from France, Spain, Portugal, Italy, Greece, South Africa, Australia, New Zealand, Lebanon, Chile, Argentina, Armenia, Ukraine, Georgia, Turkey and Israel, along with the states of California, Oregon, New York and Indiana.</p>
          <p>Dionysos also imports and distributes beers from Greece, Germany, Turkey, Honduras, Lithuania and Portugal. We recently expanded our operations and import foods, cheese, olive oil, and bottled water. Dionysos Imports and its affiliated companies distribute in the States of Virginia, Maryland and Washington D.C.</p>
          <p>We would like to thank our customers for their continued support and business they have given us all these years, and in return we pledge to continue our efforts in bringing you the quality products you enjoy.</p>
        </Text>
      </div>
      <Footer />
    </>
  )
}

export default About