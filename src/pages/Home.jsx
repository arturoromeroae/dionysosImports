import React from 'react';
import Slider from '@components/Slider';
import Header from '@components/Header';
import ImageBackground from '@components/ImageBackground';
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
        <ImageBackground title="Our Brands" textButton={'View more'} url='./products' />
        <Footer />
    </>
    )
}

export default Home;
