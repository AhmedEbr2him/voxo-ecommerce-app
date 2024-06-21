import { Link } from 'react-router-dom';
import { Data } from '../../constants/mockData';
import { routeConstants } from '../../constants/routeConstants';
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const TopBanner = () => {
  const MemoIcon = React.memo(Icon);
  const [animatedIcon, setAnimateIcon] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 8000,
    fade: true,
    beforeChange: (current, next) => {
      if (current !== next) {
        setSlideIndex(next);
      }
    },
  };
  return (
    <section className='top-banner'>
      <div className='banner-wrapper'>
        <Slider {...settings}>
          {Data.bannerSectionData.map((banner, index) => (
            <div className='banner-item' key={index}>
              <div
                className='banner-media'
                style={{ backgroundImage: `url(${banner.bannerImage})` }}
              >
                <img
                  src={banner.bannerImage}
                  alt='first banner'
                  loading='lazy'
                  className='object-cover'
                />
              </div>
              <div className='banner-content'>
                <h3
                  className='title-large'
                  style={{
                    animation: slideIndex === index ? 'fadeIn 1s ease-in-out forwards' : 'none',
                  }}
                >
                  Sale
                  <span className='theme-color'>{banner.sale}off</span>
                </h3>
                <h1
                  className='display-small'
                  style={{
                    animation:
                      slideIndex === index ? 'fadeIn 1s ease-in-out 0.35s forwards' : 'none',
                  }}
                >
                  {banner.type}
                </h1>
                <h6
                  style={{
                    animation:
                      slideIndex === index ? 'fadeIn 1s ease-in-out 0.75s forwards' : 'none',
                  }}
                >
                  {banner.offer} <span className='theme-color'>{banner.free && 'Free'}</span>
                </h6>
                <div
                  className='discover'
                  style={{
                    animation:
                      slideIndex === index ? 'fadeIn 1s ease-in-out 1.35s forwards' : 'none',
                  }}
                >
                  <Link
                    to={routeConstants.PRODUCTS}
                    onMouseEnter={() => setAnimateIcon(prevKey => prevKey + 1)}
                  >
                    <MemoIcon
                      icon='line-md:play-filled'
                      width='18'
                      height='18'
                      className='icon'
                      key={animatedIcon}
                    />
                  </Link>
                  <div className='discover-content'>
                    <h4 className='theme-color body-large'>Discover</h4>
                    <h5 className='body-medium'>Our Collection</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default TopBanner;
