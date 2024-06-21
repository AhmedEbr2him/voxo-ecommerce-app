import { Icon } from '@iconify/react/dist/iconify.js';
import { Logo } from '../../index';
import { useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../constants/routeConstants';
import { Data } from '../../../constants/mockData';

const MobileHeader = () => {
  const { handleIsMenuActive, handleIsCartActive, handleIsAuthActive, handleSearchActive } =
    useContext(MainContext);
  return (
    <header className='header mobile-header'>
      <div className='container'>
        <div className='header-inner'>
          <div className='main-menu'>
            <div className='menu-left'>
              <button
                className='btn menu-btn has-state'
                aria-label='open menu button'
                onClick={handleIsMenuActive}
              >
                <Icon
                  icon='iconamoon:menu-burger-horizontal'
                  width='24'
                  height='24'
                  className='icon'
                />
              </button>
            </div>

            <div className='menu-center'>
              <Logo />

              <nav className='navbar'>
                <div className='navbar-wrapper'>
                  <ul className='navbar-menu'>
                    {Data.menuItems.map((item, index) => {
                      const { title, link } = item;
                      return (
                        <li key={index} className='navbar-item'>
                          <Link to={link} className='navbar-link'>
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>

            <div className='menu-right'>
              <button className='btn search-btn has-state' onClick={handleSearchActive}>
                <Icon
                  icon='iconamoon:search-light'
                  width='24'
                  height='24'
                  aria-label='toggle search button'
                />
              </button>
              <Link
                to={routeConstants.WISHLIST}
                className='btn menu-btn has-state'
                aria-label='toggle menu button'
              >
                <Icon icon='carbon:favorite' width='24' height='24' className='icon' />
              </Link>

              <button
                className='btn auth-btn has-state'
                aria-label='toggle cart button'
                onClick={handleIsAuthActive}
              >
                <Icon icon='solar:user-linear' width='24' height='24' className='icon has-state' />
              </button>

              <button
                className='btn cart-btn has-state'
                aria-label='toggle cart button'
                onClick={handleIsCartActive}
              >
                <Icon icon='teenyicons:cart-outline' width='24' height='24' className='icon' />
                <span className='badge'>0</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default MobileHeader;
