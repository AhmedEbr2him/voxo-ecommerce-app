import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

const ProductDetailsContent = ({ productData }) => {
  const [isHoverd, setIsHovered] = useState(false);
  return (
    <div className='product-detail'>
      <div className='product-detail-head'>
        <h2 className='title headline-small'>{productData.label}</h2>
        <span className='category'>{productData.category}</span>
        <span className='price label-large'>
          <bdi>$ {productData.price}.00</bdi>
        </span>
      </div>
      <div className='product-quantity'>
        <button className='decrease'>
          <Icon icon='oui:minus' width='18' height='18' className='icon' />
        </button>
        <input type='text' className='input-control' defaultValue={1} />
        <button className='increase'>
          <Icon icon='oui:plus' width='18' height='18' className='icon' />
        </button>
      </div>

      <div className='detail-action'>
        <button
          className={`link-btn primary ${isHoverd ? 'active' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
        >
          <Icon icon='ri:shopping-cart-line' width='24' height='24' className='icon' />
          <p>Add to Cart</p>
        </button>
        <button className='link-btn secondary'>
          <Icon icon='carbon:favorite' width='24' height='24' className='icon' />

          <p>Wishlist</p>
        </button>
        <button className='link-btn secondary'>
          <Icon icon='tabler:share-3' width='24' height='24' className='icon' />
          <p>Share</p>
        </button>
      </div>

      <div className='product-desc'>
        <h2 className='title-medium'>Product Details:</h2>
        <p className='body-medium'>
          Senectus commodo ab mattis convallis mattis aut facilisi aliquid ipsam.
        </p>
      </div>
    </div>
  );
};
export default ProductDetailsContent;
ProductDetailsContent.propTypes = {
  productData: PropTypes.object,
};
