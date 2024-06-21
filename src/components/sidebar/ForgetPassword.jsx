import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ForgetPassword = ({ isPassSlideActive, handleLoginActive }) => {
  return (
    <div className={`forget-sidebar ${isPassSlideActive ? 'active' : ''}`}>
      <p className='recover-text body-large'>
        Lost your password? Please enter your email address. You will receive a link to create a new
        password via email.
      </p>
      <form className='form'>
        <div>
          <input
            id='email'
            type='email'
            name='customer[email] '
            className='form-control'
            placeholder='Email'
          />
          <label htmlFor='email' className='input-label'>
            Email
          </label>
        </div>
        <Link to='#' className='forget-pass-link body-large' onClick={handleLoginActive}>
          Cancel
        </Link>
      </form>
    </div>
  );
};
export default ForgetPassword;
ForgetPassword.propTypes = {
  isPassSlideActive: PropTypes.bool,
  handleLoginActive: PropTypes.func,
};
