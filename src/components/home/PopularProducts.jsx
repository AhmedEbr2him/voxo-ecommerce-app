import { useState } from 'react';
import { Data } from '../../constants/mockData';
import { useStoredProducts } from '../../hooks/useStoredProducts';
import { Notification, ProductBox, ProductView, SectionHeadTitle } from '../index';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import { routeConstants } from '../../constants/routeConstants';

const PopularProducts = () => {
  const [productIndex, setProductIndex] = useState(null);
  const { handleLocalStorage } = useStoredProducts();
  const [notificationMsg, setNotificationMsg] = useState('');
  const hasBadge = true;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='section popular-section'>
      <div className='container'>
        <SectionHeadTitle titleOne={'popular products'} titleTwo={'most popular products'} />

        <div className='products-wrapper'>
          <div className='products-list'>
            {Data.newArrivalsData.map((product, index) => (
              <ProductBox
                key={index}
                data={product}
                setProductIndex={() => setProductIndex(index)}
                index={index}
                cartStorage={() => handleLocalStorage('productsCart', index, product)}
                wishlistStorage={() => handleLocalStorage('productsWishlist', index, product)}
                setNotificationMsg={setNotificationMsg}
                hasBadge={hasBadge}
              />
            ))}
          </div>
          {Data.newArrivalsData[productIndex] && (
            <ProductView
              index={productIndex}
              product={Data.newArrivalsData[productIndex]}
              saveToLocalStorage={() =>
                handleLocalStorage('productsCart', productIndex, Data.newArrivalsData[productIndex])
              }
            />
          )}
          <Notification notificationMsg={notificationMsg} key={productIndex} />
        </div>

        <Link
          to={routeConstants.PRODUCTS}
          className={`link-btn primary ${isHovered ? 'active' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
        >
          <span>Explore More</span>
          <Icon icon='octicon:arrow-up-right-16' width='16' height='16' className='icon' />
        </Link>
      </div>
    </div>
  );
};
export default PopularProducts;
