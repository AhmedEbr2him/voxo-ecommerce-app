import './style.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { Products } from '../../../assets/images/images';
import { useContext, useRef, useState } from 'react';
import { MainContext } from '../../../context/MainContext';
const Search = () => {
  const { isSearchActive, handleSearchActive, searchValue, setSearchValue } =
    useContext(MainContext);
  const [isSearchChanged, setIsSearchChanged] = useState(false);
  const searchRef = useRef(null);

  const handleSearchChanged = event => {
    if (event.target.value) {
      setIsSearchChanged(true);
      setSearchValue(event.target.value);
    } else {
      setIsSearchChanged(false);
      setSearchValue('');
    }
  };
  const handleSearchOnBlur = () => {
    setIsSearchChanged(false);
    searchRef.current.value = '';
  };

  return (
    <div className={`search ${isSearchActive ? 'active' : ''}`}>
      <div className='search-wrapper'>
        <div className='close-btn'>
          <button
            className='btn has-state close-icon'
            aria-label='close search button'
            onClick={handleSearchActive}
          >
            <Icon icon='ep:close-bold' width='20' height='20' className='icon' />
          </button>
        </div>
        <div className='search-inner'>
          <div className='search-form'>
            {/* SEARCH FORM LIST */}
            <form className='form'>
              <div>
                <input
                  id='search-field'
                  type='search'
                  name='search-field'
                  className='form-control'
                  autoComplete='none'
                  autoCorrect='off'
                  placeholder='Search for any product...'
                  defaultValue={searchValue}
                  onChange={event => handleSearchChanged(event)}
                  onBlur={handleSearchOnBlur}
                  ref={searchRef}
                />
                <label htmlFor='customer__email' className='input-label label-large'>
                  Search
                </label>
              </div>
              <button type='button' aria-label='confirm search button' className='confirm'>
                <Icon icon='icon-park-outline:search' width='20' height='20' className='icon' />
              </button>
            </form>

            {/* PRODUCTS SEARCH LIST */}
            <div className={`search-list ${isSearchChanged ? 'active' : ''}`}>
              <ul className='search-menu'>
                <li className='search-item'>
                  <Link to='#'>
                    <div className='product-media'>
                      <img
                        src={Products.product}
                        alt=''
                        loading='lazy'
                        width='60'
                        height='60'
                        className='object-cover'
                      />
                    </div>
                    <div className='product-content'>
                      <div className='product-details'>
                        <p className='product-title label-medium'>Product one</p>
                        <span className='price label-medium'>$0.00</span>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
              {/* <div className='no-product-wrapper'>
                <p className='label-medium'>No Products With this Name.</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
