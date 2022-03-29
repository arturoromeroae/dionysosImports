import React from 'react';
import Slider from '@components/Slider';
import TextImage from '@components/TextImage';
import logo from '@images/dionysos-logo.png';
import Header from '@components/Header';
import ImageLeft from '@components/ImageLeft';
import imges from '@images/images-test.png'
import ProductsSlider from '@components/ProductsSlider';
import Footer from '@components/Footer';

const Home = () => {
    
    return (
    <>
        <Header />
        <Slider />
        <ProductsSlider 
            iconLeft = "fa-solid fa-angle-left" 
            iconRight = "fa-solid fa-angle-right" 
            title = "Pietroso Rosso di Montalcino"
            content = "This is excellent sangiovese, with flavors of dried cherry and cocoa powder and soft tannins. Pair it with  grilled meats and poultry. or pasta with meat sauces."
        />
        <ImageLeft url = {imges} title = "Our Brands" textButton = {'SEE MORE'} src='/products' />
        <TextImage title='About Us' 
                content={[
                    <strong>Dionysos Imports</strong>,  
                    " was established in 1991 by Yannis Tsapos. Initially, we imported and distributed wines and beers from Greece and Cyprus. In 1992, we expanded our operations to include wines from Italy, as well as from Virginia and California. In 1993 and 1994, further expansion included wines from France and Portugal.", 
                    <br />, <br />, 
                    "We currently import some of the best rated and regarded wines from France, Spain, Portugal, Italy, Greece, South Africa, Australia, New Zealand, Lebanon, Chile, Argentina, Armenia, Ukraine, Georgia, Turkey and Israel, along with the states of California, Oregon, New York and Indiana..."
                ]}
                url = {logo} 
        />
        <Footer />
    </>
    )
}

export default Home;
