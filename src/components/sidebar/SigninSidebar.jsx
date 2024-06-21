import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SigninSidebar = ({ isSignupActive, handleLoginActive }) => {
  const [isPassHidden, setIsPassHidden] = useState(true);
  const [isConfirmPassHidden, setIsConfirmPassHidden] = useState(true);

  return (
    <div className={`signup-sidebar ${isSignupActive ? 'active' : ''}`} aria-hidden='false'>
      <form className='form'>
        <div>
          <input
            id='fName'
            type='text'
            name='customer[firstName]'
            className='form-control'
            autoComplete='false'
            autoCorrect='off'
            placeholder='First Name'
          />
          <label htmlFor='fName' className='input-label'>
            First Name
          </label>
        </div>

        <div>
          <input
            id='lName'
            type='text'
            name='customer[lastName] '
            className='form-control'
            placeholder='Last Name'
          />
          <label htmlFor='lName' className='input-label'>
            Last Name
          </label>
        </div>
        <div>
          <input
            id='add__customer__email'
            type='email'
            name='customer[add__customer__email] '
            className='form-control'
            placeholder='Email'
          />
          <label htmlFor='add__customer__email' className='input-label'>
            Email
          </label>
        </div>
        <div>
          <input
            id='password'
            type={isPassHidden ? 'password' : 'text'}
            name='customer[password] '
            className='form-control'
            placeholder='Password'
          />
          <label htmlFor='password' className='input-label'>
            Password
          </label>
          <div className='pass-icon'>
            <button
              type='button'
              aria-pressed={isPassHidden ? true : false}
              aria-label='show or hide password'
              className='toggle-icon'
              onClick={() => setIsPassHidden(!isPassHidden)}
            >
              {isPassHidden ? (
                <Icon icon='tabler:eye-closed' width='15' height='15' className='icon' />
              ) : (
                <Icon icon='streamline:eye-optic' width='15' height='15' className='icon' />
              )}
            </button>
          </div>
        </div>
        <div>
          <input
            id='confirm__password'
            type={isConfirmPassHidden ? 'password' : 'text'}
            name='customer[password] '
            className='form-control'
            placeholder='Confirm Password'
          />
          <label htmlFor='confirm__password' className='input-label'>
            Confirm Password
          </label>
          <div className='pass-icon'>
            <button
              type='button'
              aria-pressed={isConfirmPassHidden ? true : false}
              aria-label='show or hide password'
              className='toggle-icon'
              onClick={() => setIsConfirmPassHidden(!isConfirmPassHidden)}
            >
              {isConfirmPassHidden ? (
                <Icon icon='tabler:eye-closed' width='15' height='15' className='icon' />
              ) : (
                <Icon icon='streamline:eye-optic' width='15' height='15' className='icon' />
              )}
            </button>
          </div>
        </div>

        <button type='button' className='link-btn primary'>
          Register
        </button>
        <Link to='#' className='forget-pass-link body-large' onClick={handleLoginActive}>
          Already have an account? Login here
        </Link>
      </form>
    </div>
  );
};
export default SigninSidebar;
SigninSidebar.propTypes = {
  isSignupActive: PropTypes.bool,
  handleLoginActive: PropTypes.func,
};
