import { Icon } from '@iconify/react/dist/iconify.js';
import { Data } from '../../constants/mockData';
import CountDown from '../CountDown';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../constants/routeConstants';

const DealSection = () => {
  return (
    <div className='section deal-section'>
      <div className='deal-wrapper'>
        <div className='container'>
          <div className='deal-inner'>
            {Data.homeDealData.map((item, index) => {
              const { banner, discount, price } = item;

              return (
                <div
                  className='deal-content'
                  key={index}
                  style={{ backgroundImage: `url(${banner})` }}
                >
                  <div className='discount-detail'>
                    <div className='heart-btn'>
                      <Icon icon='streamline:heart-solid' width='18' height='18' className='icon' />
                    </div>
                    <h3 className='body-large'>
                      special discount <span className='theme-color'>{discount}% off</span>
                    </h3>

                    <h2 className='title-large'>
                      deal of the day from <span className='theme-color'>&#36;{price}.00</span>
                    </h2>
                  </div>

                  <div className='countdown-wrapper'>
                    <CountDown targetDate={'2024-12-29T12:00:00'} />
                  </div>

                  <div className='shop-now'>
                    <Link to={routeConstants.PRODUCTS} className='link-btn primary'>
                      shop now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DealSection;
