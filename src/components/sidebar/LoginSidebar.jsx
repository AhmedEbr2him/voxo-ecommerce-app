import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginSidebar = ({ isLoginActive, handleSignupActive, handleForgetPassActive }) => {
  const [isPassHidden, setIsPassHidden] = useState(true);

  return (
    <div className={`login-sidebar ${isLoginActive ? 'active' : ''}`} aria-hidden='false'>
      <form className='form'>
        <div>
          <input
            id='customer__email'
            type='email'
            name='customer[email] '
            className='form-control'
            autoComplete='none'
            autoCorrect='off'
            placeholder='Email'
          />
          <label htmlFor='customer__email' className='input-label label-large'>
            Email
          </label>
        </div>

        <div>
          <input
            id='customer__password'
            type={isPassHidden ? 'password' : 'text'}
            name='customer[password] '
            className='form-control'
            placeholder='Password'
          />
          <label htmlFor='customer__password' className='input-label label-large'>
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

        <button type='button' className='link-btn primary'>
          Sing in
        </button>
      </form>
      <Link to='#' className='link forget-pass-link body-large' onClick={handleForgetPassActive}>
        Forget your password?
      </Link>
      <p className='create-acc'>
        Don&apos;t have an account?
        <Link to='#' className='link forget-pass-link' onClick={handleSignupActive}>
          Create account
        </Link>
      </p>
    </div>
  );
};
export default LoginSidebar;

LoginSidebar.propTypes = {
  isLoginActive: PropTypes.bool,
  handleSignupActive: PropTypes.func,
  handleForgetPassActive: PropTypes.func,
};
