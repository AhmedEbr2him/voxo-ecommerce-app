import { Link } from 'react-router-dom';
import { Data } from '../../constants/mockData';
import HoveredBtn from '../common/HoveredBtn';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SectionHeadTitle } from '../index';
import { Icon } from '@iconify/react/dist/iconify.js';
const InstagramShop = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
    ],
  };
  return (
    <div className='section instagram-section'>
      <div className='instagram-section-inner'>
        <div className='container'>
          <SectionHeadTitle titleOne={'instagram shop'} titleTwo={'New Collection'} />
          <div className='instagram-section-wrapper'>
            <div className='shop-list'>
              <Slider {...settings} className='full-dots'>
                {Data.instaShopData.map((item, index) => {
                  const { banner, title, price, discount } = item;

                  return (
                    <div className='shop-item' key={index}>
                      <button className='btn top-wishlist' aria-label='add to wishlist button'>
                        <Icon icon='codicon:heart' width='18' height='18' className='icon' />
                      </button>
                      <Link
                        to='#'
                        style={{ backgroundImage: `url(${banner})` }}
                        draggable='false'
                        className='image-media'
                      >
                        <img src={banner} alt={title} />
                      </Link>

                      <div className='layer-content'>
                        <div className='share-box'>
                          <span className='plus-icon'>+</span>
                          <span>Share</span>
                        </div>

                        <h5 className='title-small'>new offer {discount}% discount</h5>
                        <h3 className='title-large'>
                          {title} &#36;{price}
                        </h3>

                        <div className='shop-btn'>
                          <HoveredBtn
                            to='#'
                            addClass={'primary'}
                            text={'shop now'}
                            arrow={true}
                            color='#ffffff'
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstagramShop;
