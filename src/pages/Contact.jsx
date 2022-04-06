import React from 'react';
import '@styles/ContactPage.scss'
import Header from '@components/Header';
import Footer from '@components/Footer';
import logo from '@images/dionysos-logo.png'

const Contact = () => {
  return (
    <>
        <Header />
        <div className='contactContainer'>
            <div>
                <h1 className='contactTitle'>Contact Us</h1>
                <div className='contactContainerForm'>
                    <div className='contactForm'>
                        <div>
                            <img src={logo} />
                            <div>
                                <p>11581 Robertson Dr Manassas, VA 2010.</p>
                                <p>Tel: (703) 392-7073</p>
                                <p>Monday – Friday: 8am – 5pm</p>
                            </div>
                            <div></div>
                        </div>
                        <form>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <div>
                                <button>Reset</button>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='contactMap'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12444.72187412986!2d-77.55386777589084!3d38.759558687836105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65d95152804b1%3A0x782fbc854595fa07!2sDionysos%20Imports%2C%20Inc.!5e0!3m2!1sen!2spe!4v1649220545555!5m2!1sen!2spe" width="519" height="326" style={{borderRadius: 20, border: 0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact