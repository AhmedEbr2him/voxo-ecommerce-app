import { Icon } from '@iconify/react/dist/iconify.js';
import { EmptyCartScreen, Scrim, SidebarTitle } from '../../index';
import { routeConstants } from '../../../constants/routeConstants';
import { Link } from 'react-router-dom';
import { Products } from '../../../assets/images/images';
import { useContext, useEffect } from 'react';
import { MainContext } from '../../../context/MainContext';
import { useStopDocScroll } from '../../../hooks/useStopDocScroll';
const Cart = () => {
  const { isCartActive, handleIsCartActive } = useContext(MainContext);
  const { stopScroll, startScroll } = useStopDocScroll();

  useEffect(() => {
    isCartActive ? stopScroll() : startScroll();

    return () => startScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCartActive]);
  return (
    <div>
      <div className={`sidebar cart-sidebar ${isCartActive ? 'active' : ''}`}>
        <SidebarTitle title={'CART LIST'} onClick={handleIsCartActive} />
        <div className='cart-inner'>
          <div className='sidebar-body'>
            {/* <EmptyCartScreen /> */}

            <div className='cart-list'>
              <ul className='cart-menu'>
                <li className='cart-item'>
                  <div className='product-media'>
                    <img
                      src={Products.product}
                      alt=''
                      loading='lazy'
                      width='60'
                      height='60'
                      className='object-cover'
                    />
                    {/* REMOVE PRODUCT BUTTON */}
                    <button className='remove-product' aria-label='remove product button'>
                      <Icon icon='clarity:trash-line' width='20' height='20' className='icon' />
                    </button>
                  </div>
                  <div className='product-content'>
                    <div className='product-details'>
                      <p className='product-title label-medium'>Product one</p>
                      <span className='price label-medium'>$0.00</span>
                    </div>
                    <div className='product-quantity'>
                      <button
                        className='decrease'
                        aria-labelledby='decrease number of product button'
                      >
                        <Icon icon='oui:minus' width='15' height='15' className='icon' />
                      </button>
                      <input type='text' className='input-control' defaultValue={1} />
                      <button
                        className='increase'
                        aria-labelledby='increase number of product button'
                      >
                        <Icon icon='oui:plus' width='15' height='15' className='icon' />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='cart-footer'>
            <div className='price'>
              <h3>Subtotal:</h3>
              <span>
                <bdi>$0.00</bdi>
              </span>
            </div>
            <p className='label-large'>
              Final price and discounts will be determined at the time of payment processing.
            </p>
            <Link to={routeConstants.CHECKOUT} className='link-btn primary disabled'>
              Go to Cart
            </Link>
            <Link to={routeConstants.CHECKOUT} className='link-btn primary disabled'>
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
      <Scrim isActive={isCartActive} onClick={handleIsCartActive} />
    </div>
  );
};
export default Cart;
