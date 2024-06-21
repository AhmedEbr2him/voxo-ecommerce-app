import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { routeConstants } from '../../constants/routeConstants';

const ProductBox = ({
  data,
  index,
  setProductIndex,
  cartStorage,
  wishlistStorage,
  setNotificationMsg,
  hasBadge,
}) => {
  const { frontImg, backImg, category, label, price, rate, sale } = data;
  const { handleDetailActive, isNotificationActive, setIsNotificationActive, setWishlistIndex } =
    useContext(MainContext);
  const navigate = useNavigate();

  const handleViewBtn = index => {
    handleDetailActive();
    setProductIndex(index);
  };
  const handleAddBtn = () => {
    cartStorage(index, data);
    setIsNotificationActive(true);
    setNotificationMsg('Cart');
  };
  const handleWishlist = () => {
    wishlistStorage(index, data);
    setIsNotificationActive(!isNotificationActive);
    setNotificationMsg('Wishlist');
    setWishlistIndex(index);
  };
  return (
    <>
      <div className='product-box'>
        <div className='product-media'>
          <div onClick={() => navigate(`/product_detail/${data.id}`)}>
            <Link to='#' className='front'>
              <img src={frontImg} alt={label} className='object-cover' loading='lazy' />
            </Link>
            <Link to='#' className='back'>
              {backImg && <img src={backImg} alt={label} className='object-cover' loading='lazy' />}
            </Link>
          </div>
          <div className='product-action'>
            <ul className='action-list'>
              <li className='action-item' title='Add to Cart' aria-labelledby='add to cart'>
                <button
                  className='btn action-btn'
                  aria-label='product action button'
                  onClick={handleAddBtn}
                >
                  <Icon icon='ic:round-add-shopping-cart' width='20' height='20' />
                </button>
              </li>

              <li
                className='action-item'
                style={{ animationDelay: '200ms' }}
                title='Qucik View'
                aria-labelledby='quick view'
              >
                <button
                  className='btn action-btn'
                  aria-label='product action button'
                  onClick={() => {
                    handleViewBtn(index);
                  }}
                >
                  <Icon icon='hugeicons:view' width='20' height='20' />
                </button>
              </li>
              <li
                className='action-item'
                style={{ animationDelay: '400ms' }}
                title='Add to Comparisson'
                aria-labelledby='add to compare'
              >
                <button
                  className='btn action-btn'
                  onClick={() => {}}
                  aria-label='product action button'
                >
                  <Icon icon='fluent:branch-compare-16-regular' width='20' height='20' />
                </button>
              </li>
              <li
                className='action-item'
                style={{ animationDelay: '500ms' }}
                title='Add to Wishlist'
                aria-labelledby='add to wishlist'
              >
                <button
                  className='btn action-btn'
                  onClick={handleWishlist}
                  aria-label='product action button'
                >
                  <Icon icon='carbon:favorite' width='20' height='20' />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='product-details' onClick={() => navigate(routeConstants.PRODUCT_DETAIL)}>
          <span className='category title-small'>{category}</span>
          {/* RATING */}
          <ul className='rating-list'>
            {Array.from({ length: 5 }, (_, index) => {
              const fullStar = index < Math.floor(rate);
              // const halfStar = rate % 1 !== 0; // باقي القسمه مش ب صفر
              return (
                <li className='rating-item' key={index}>
                  <Icon
                    icon='material-symbols:star'
                    width='16'
                    height='16'
                    className={`${fullStar ? 'full-star' : ''}`}
                  />
                </li>
              );
            })}
          </ul>
          <h2 className='label title-medium'>{label}</h2>
          <span className='price'>
            <bdi>$ {price}.00</bdi>
          </span>

          {hasBadge && <span className='badge'>{sale}% off</span>}
        </div>
      </div>
    </>
  );
};
export default ProductBox;

ProductBox.propTypes = {
  data: PropTypes.object,
  setProductId: PropTypes.func,
  index: PropTypes.number,
  setProductIndex: PropTypes.func,
  cartStorage: PropTypes.func,
  setNotificationMsg: PropTypes.func,
  wishlistStorage: PropTypes.func,
  hasBadge: PropTypes.bool,
};
