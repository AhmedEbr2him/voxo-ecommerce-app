import Slider from 'react-slick';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Data } from '../../constants/mockData';
import { ProductBox, ProductView, SectionHeadTitle, Notification } from '../index';
import { useStoredProducts } from '../../hooks/useStoredProducts';

const NewArrivalsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [productIndex, setProductIndex] = useState(null);
  const { handleLocalStorage } = useStoredProducts();
  const [notificationMsg, setNotificationMsg] = useState('');

  return (
    <section className='section new-arrivals'>
      <div className='new-arrivals-inner'>
        <div className='container'>
          <SectionHeadTitle titleOne={'new arrivals'} titleTwo={'products new arrivals'} />
          <div className='products-wrapper'>
            <div className='products-list'>
              <Slider {...settings} className='full-dots'>
                {Data.newArrivalsData.map((product, index) => {
                  return (
                    <ProductBox
                      key={index}
                      data={product}
                      setProductIndex={() => setProductIndex(index)}
                      index={index}
                      cartStorage={() => handleLocalStorage('productsCart', index, product)}
                      wishlistStorage={() => handleLocalStorage('productsWishlist', index, product)}
                      setNotificationMsg={() => setNotificationMsg()}
                    />
                  );
                })}
              </Slider>
            </div>
            {Data.newArrivalsData[productIndex] && (
              <ProductView
                index={productIndex}
                product={Data.newArrivalsData[productIndex]}
                saveToLocalStorage={() =>
                  handleLocalStorage(
                    'productsCart',
                    productIndex,
                    Data.newArrivalsData[productIndex]
                  )
                }
              />
            )}
            <Notification notificationMsg={notificationMsg} key={productIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewArrivalsCarousel;
