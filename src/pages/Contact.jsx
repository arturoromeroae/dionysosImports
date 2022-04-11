import React from 'react';
import '@styles/ContactPage.scss'
import Header from '@components/Header';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import contactBanner from '@images/Banner.jpg';
import logo from '@images/dionysos-logo.png'

const Contact = () => {
  return (
    <>
        <Header />
        <Banner srcBanner={contactBanner} title='Contact Us' />
        <div className='contactContainer'>
            <div className='addressContainer'>
                <img src={logo} />
                <div>
                    <h2>Dionysos Imports, Inc.</h2>
                    <p>11581 Robertson Dr,</p>
                    <p>Manassas, VA 20109</p>
                    <p><strong>Tel:</strong> <a href='tel:703-392-7073'>(703) 392-7073</a></p>
                    <p><strong>Fax:</strong> (703) 392-7075</p>
                </div>
            </div>
            <div className='contactFormContainer'>
                <form className='contactForm'>
                    <label>Your Name</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Your Email</label>
                    <br />
                    <input type="email" />
                    <br />
                    <label>Your Message</label>
                    <br />
                    <textarea />
                    <br />
                    <button>Send</button>
                </form>
            </div>
            <div className='contactEmployees'>
                <div>
                    <h3>President</h3>
                    <p>Yannis Tsapos</p>
                    <p>yannis.tsapos@dionysosimports.com</p>
                </div>
                <div>
                    <h3>Office Manager</h3>
                    <p>David Costa</p>
                    <p>david.costa@dionysosimports.com</p>
                </div>
            </div>
            <div className='contactEmployees'>
                <div>
                    <h3>Business Development</h3>
                    <p>John Anastasakis</p>
                    <p>john.anastasakis@dionysosimports.com</p>
                </div>
                <div>
                    <h3>Wine Manager</h3>
                    <p>Catherine Kaylor</p>
                    <p>catherine.kaylor@dionysosimports.com</p>
                </div>
            </div>
            <h2 className='contactTitle'>Sales Representatives</h2>
            <div className='contactEmployees'>
                <div>
                    <h3>Maryland</h3>
                    <p>Alexandros Georgiadis</p>
                    <p><a href='301-518-1935'>(301) 518-1935</a></p>
                    <p>alexgeorgiadis89@gmail.com</p>
                </div>
                <div>
                    <h3>Northern Virginia</h3>
                    <p>Amy Evans</p>
                    <p><a href="tel:202-321-6387">(202) 321-6387</a></p>
                    <p>amy.evans@dionysosimports.com</p>
                </div>
            </div>
            <div className='contactEmployees'>
                <div>
                    <h3>Northern Virginia, Washington DC, <br />Maryland</h3>
                    <p>Catherine Kaylor</p>
                    <p><a href='tel:571-437-4490'>(571) 437-4490</a></p>
                    <p>catherine.kaylor@dionysosimports.com</p>
                </div>
                <div>
                    <h3>Richmond, Fredericksburg, <br />Charlottesville</h3>
                    <p>Clinton Emerson</p>
                    <p><a href="tel:804-304-6231">(804) 304-6231</a></p>
                    <p>clinton.emerson@dionysosimports.com</p>
                </div>
            </div>
            <div className='contactEmployees'>
                <div>
                    <h3>Northern Virginia, Washington DC</h3>
                    <p>Dan Metzger</p>
                    <p><a href='tel:540-613-0671'>(540) 613-0671</a></p>
                    <p>dan.metzger@dionysosimports.com</p>
                </div>
                <div>
                    <h3>Montgomery County, Maryland</h3>
                    <p>Demetria Loukas</p>
                    <p><a href="tel:240-731-6372">(240) 731-6372</a></p>
                    <p>demetria.loukas@dionysosimports.com</p>
                </div>
            </div>
            <div className='contactEmployees'>
                <div>
                    <h3>Northern Virginia</h3>
                    <p>Fernanzo Leonzo</p>
                    <p><a href='tel:703-906-7855'>(703) 906-7855</a></p>
                    <p>fernando.leonzo@dionysosimports.com</p>
                </div>
                <div>
                    <h3>Richmond, Charlottesville, VA Beach, <br />Norfolk, Williamsburg</h3>
                    <p>Genevelyn Steele</p>
                    <p><a href="tel:804-426-8089">(804) 426-8089</a></p>
                    <p>genevelyn.steele@dionysosimports.com</p>
                </div>
            </div>
            <div className='contactEmployees'>
                <div>
                    <h3>Northern Virginia, Washington DC</h3>
                    <p>Matt Perrella</p>
                    <p><a href='tel:954-529-0908'>(954) 529-0908</a></p>
                    <p>matt.perrella@dionysosimports.com</p>
                </div>
                <div>
                    <h3>Montgomery County</h3>
                    <p>Nazila Safari</p>
                    <p><a href="tel:202-812-5866">(202) 812-5866</a></p>
                    <p>nazila.safari@dionysosimports.com</p>
                </div>
            </div>
            <div className='contactEmployees'>
                <div>
                    <h3>VA Beach, Newport News, Norfolk</h3>
                    <p>Seth White</p>
                    <p><a href='tel:757-749-5377'>(757) 749-5377</a></p>
                    <p>seth.white@dionysosimports.com</p>
                </div>
                <div>
                    <h3>Washington DC</h3>
                    <p>Thomas Valis</p>
                    <p><a href="tel:240-305-6337">(240) 305-6337</a></p>
                    <p>thomasvalis@yahoo.com</p>
                </div>
            </div>
            <div className='contactEmployees'>
                <div>
                    <h3>Northern Virginia, Washington DC</h3>
                    <p>Zdravko Solenkov</p>
                    <p><a href='tel:571-426-8277'>(571) 426-8277</a></p>
                    <p>zdravko.solenkov@dionysosimports.com</p>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact