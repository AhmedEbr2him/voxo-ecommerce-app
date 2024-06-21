import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { MainContext } from '../../context/MainContext';
import Scrim from './Scrim';
import { useStopDocScroll } from '../../hooks/useStopDocScroll';
import ProductDetailsContent from './ProductDetailsContent';

const ProductView = ({ product }) => {
  const { isDetailActive, handleDetailActive } = useContext(MainContext);
  const { stopScroll, startScroll } = useStopDocScroll();

  useEffect(() => {
    if (isDetailActive) {
      stopScroll();
    } else {
      startScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDetailActive]);

  // const handleOnAddToCart = () => {
  //   saveToLocalStorage(`productsCart-${index}`, index, product);
  //   handleDetailActive;
  // };
  return (
    <>
      <div className={`product-view ${isDetailActive ? 'active' : ''}`}>
        <button
          className='btn has-state close-icon'
          aria-label='close menu button'
          onClick={handleDetailActive}
        >
          <Icon icon='ep:close-bold' width='20' height='20' className='icon' />
        </button>
        <div className='product-media'>
          <Link to='#'>
            <img src={product.frontImg} alt={product.label} className='object-cover' />
          </Link>
        </div>
        <ProductDetailsContent productData={product} />
      </div>
      <Scrim isActive={isDetailActive} onClick={handleDetailActive} />
    </>
  );
};
export default ProductView;

ProductView.propTypes = {
  product: PropTypes.object,
  index: PropTypes.number,
  saveToLocalStorage: PropTypes.func,
};
