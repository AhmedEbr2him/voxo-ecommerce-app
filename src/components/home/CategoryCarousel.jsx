import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { CustomNextArrow, CustomPrevArrow, SectionHeadTitle } from '../index';
import { Data } from '../../constants/mockData';
import { routeConstants } from '../../constants/routeConstants';

const CategoryCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          fade: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          fade: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
  };
  return (
    <div className='section category-carousel'>
      <div className='category-wrapper'>
        <SectionHeadTitle titleOne='our category' titleTwo={'our top category'} />
        <div className='container'>
          <div className='category-inner'>
            <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
              {Data.homeCategoryData.map((item, index) => {
                const { banner, title, category } = item;

                return (
                  <div className='category-item' key={index}>
                    <Link
                      draggable='false'
                      style={{ backgroundImage: `url(${banner})` }}
                      to={routeConstants.PRODUCTS}
                    >
                      <div className='category-content'>
                        <h3 className='theme-color headline-small'>{title}</h3>
                        <span>{category}</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryCarousel;
