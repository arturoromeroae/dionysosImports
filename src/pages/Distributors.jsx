import React from 'react';
import '@styles/DistributorPage.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import bannerDistrubutors from '@images/Banner.jpg';
import CardIcon from '@components/CardIcon';

const Distributors = () => {
  return (
    <>
        <Header />
        <Banner srcBanner={bannerDistrubutors} title='Distributors' />
        <div className='distributorsContainer'>
            <div className='distributorListContainer'>
                <CardIcon className="items">
                    <div>
                        <p><strong>VI, Inc.</strong></p>
                        <p>19220 Orbit Dr Unit #10</p>
                        <p>Gaithersburg, MD 20879</p>
                        <p><a href="tel:301-977-2282">Tel: (301) 977-2282</a></p>
                        <p>Fax: (301) 924-1936</p>
                        <p><strong>Distribution in Maryland</strong></p>
                    </div>
                </CardIcon>
                <CardIcon className="items">
                    <div>
                        <p><strong>Distinctive Imports, Inc.</strong></p>
                        <p>941 Estes Court,</p>
                        <p>Schaumburg, IL 60193</p>
                        <p><a href="tel:312-456-5597">Tel: (312) 456-5597</a></p>
                        <p><strong>Distribution in Illinois</strong></p>
                    </div>
                </CardIcon>
                <CardIcon className="items">
                    <div>
                        <p><strong>Fotis & Son Imports</strong></p>
                        <p>540 Windy Point Dr.</p>
                        <p>Glendale Heights Village, DuPage, IL, 60139</p>
                        <p><a href="tel:630-790-1800">Tel: (630) 790-1800</a></p>
                        <p><strong>Distribution in Illinois</strong></p>
                    </div>
                </CardIcon>
                <CardIcon className="items">
                    <div>
                        <p><strong>Alliance Wines Corp.</strong></p>
                        <p>706 Ellis Rd</p>
                        <p>Durham, NC 27703</p>
                        <p><a href="tel:919-792-8799">Tel: (919) 792-8799</a></p>
                        <p><strong>Distribution in North Carolina</strong></p>
                    </div>
                </CardIcon>
                <CardIcon className="items">
                    <div>
                        <p><strong>CHL International</strong></p>
                        <p>3809 Beam Road</p>
                        <p>Charlotte, NC 28217</p>
                        <p><a href="tel:704-329-0006">Tel: (704) 329-0006</a></p>
                        <p><strong>Distribution in North Carolina</strong></p>
                    </div>
                </CardIcon>
                <CardIcon className="items">
                    <div>
                        <p><strong>CHL International</strong></p>
                        <p>2566 Center Circle</p>
                        <p>Front Mill, SC 29715</p>
                        <p><a href="tel:704-329-0006">Tel: (704) 329-0006</a></p>
                        <p><strong>Distribution in South Carolina</strong></p>
                    </div>
                </CardIcon>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Distributors