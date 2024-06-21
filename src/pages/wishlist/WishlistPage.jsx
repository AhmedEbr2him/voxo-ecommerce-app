import './style.css';
import { Products } from '../../assets/images/images';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

const WishlistPage = () => {
  const { wishlistIndex } = useContext(MainContext);
  const wishlistProducts = JSON.parse(localStorage.getItem(`productsWishlist-${wishlistIndex}`));

  return (
    <section className='section wishlist-page'>
      <div className='container'>
        {/* <div className='empty-wishlist'>
          <p>No products on wishlist</p>
        </div> */}
        <div className='favorite-list'>
          <div className='list-title'>
            <h2>Favorite List</h2>
          </div>
          <ul className='favorite-menu'>
            <li className='favorite-item'>
              <div className='item-media'>
                <img src={Products.product} alt='' className='object-cover' />
              </div>
              <div className='item-content'>
                <div className='content'>
                  <h4 className='title'>[Sample] Able Brewing System consetetur</h4>
                  <span className='category'>Category</span>
                  <span className='price'>
                    <bdi>1000$</bdi>
                  </span>
                </div>

                <button className='remove-product' aria-label='remove product button'>
                  <Icon icon='clarity:trash-line' width='16' height='16' className='icon' />
                  <span>Remove</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default WishlistPage;
