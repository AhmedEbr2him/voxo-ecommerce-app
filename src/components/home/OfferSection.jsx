import { Link } from 'react-router-dom';
import { SectionHeadTitle } from '../index';
import { HomeOfferImages } from '../../assets/images/images';
import { Data } from '../../constants/mockData';
import { useState } from 'react';
import { routeConstants } from '../../constants/routeConstants';

const OfferSection = () => {
  const [isHoverd, setIsHovered] = useState(false);

  return (
    <div className='section offer-section'>
      <div className='offer-section-wrapper'>
        <div className='container'>
          <SectionHeadTitle titleOne='new offers' titleTwo='just for you' />
          <div className='offer-section-inner'>
            <div className='banner-one'>
              {Data.homeOfferData.slice(0, 1).map((item, index) => {
                const { banner, title, price } = item;
                return (
                  <div className='banner-item' key={index}>
                    <Link
                      to={routeConstants.PRODUCTS}
                      style={{ backgroundImage: `url(${banner})` }}
                    >
                      <img src={HomeOfferImages.offerBanner1} alt='offer banner' loading='lazy' />
                    </Link>

                    <div className='banner-content'>
                      <h2 className='title-large'>
                        {title}
                        <span className='theme-color'>$ {price}.00</span>
                      </h2>
                      <Link
                        to={routeConstants.PRODUCTS}
                        className={`link-btn primary ${isHoverd ? 'active' : ''}`}
                        onMouseEnter={() => setIsHovered(true)}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className='banner-two'>
              {Data.homeOfferData.slice(1, 4).map((item, index) => {
                const { banner, title, price, discount } = item;
                return (
                  <div className='banner-item' key={index}>
                    <Link
                      to={routeConstants.PRODUCTS}
                      style={{ backgroundImage: `url(${banner})` }}
                    >
                      <img src={banner} alt='offer banner' loading='lazy' />
                    </Link>

                    <div className='banner-content'>
                      <h2 className='title-large'>
                        {title} {price && <span className='theme-color'>$ {price}.00</span>}
                      </h2>
                      {discount && <span className='discount'>Discount - {discount}%</span>}

                      {index === 0 && (
                        <Link
                          to={routeConstants.PRODUCTS}
                          className={`link-btn primary ${isHoverd ? 'active' : ''}`}
                          onMouseEnter={() => setIsHovered(true)}
                        >
                          Shop Now
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfferSection;
