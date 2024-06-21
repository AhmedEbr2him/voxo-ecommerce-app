import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react/dist/iconify.js';
import { useIsScroll } from '../../../hooks/useIsScroll';
import { useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
import { routeConstants } from '../../../constants/routeConstants';

const MobileMenuBottom = () => {
  const { isScroll } = useIsScroll();

  const { handleIsCategriesActive, handleIsAuthActive, handleSearchActive } =
    useContext(MainContext);

  return (
    <div className={`mobile-menu-bottom ${isScroll ? '' : 'active'}`}>
      <ul className='menu-list'>
        <li className='menu-item '>
          <Link to={routeConstants.PRODUCTS}>
            <Icon
              icon='iconoir:shop-four-tiles'
              width='24'
              height='24'
              className='icon has-state'
            />
            <span>Shop</span>
          </Link>
        </li>

        <li className='menu-item ' onClick={handleIsCategriesActive}>
          <Link to={'#'}>
            <Icon icon='tabler:category' width='24' height='24' className='icon has-state' />
            <span>Category</span>
          </Link>
        </li>

        <li className='menu-item '>
          <Link to={routeConstants.HOME}>
            <Icon icon='iconoir:home-alt' width='24' height='24' className='icon has-state' />
            <span>Home</span>
          </Link>
        </li>

        <li className='menu-item ' onClick={handleSearchActive}>
          <Link to={'#'}>
            <Icon icon='iconamoon:search-light' width='24' height='24' className='icon has-state' />
            <span>Search</span>
          </Link>
        </li>

        <li className='menu-item ' onClick={handleIsAuthActive}>
          <Link to={'#'}>
            <Icon icon='solar:user-linear' width='24' height='24' className='icon has-state' />
            <span>Account</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default MobileMenuBottom;
