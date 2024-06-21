import { Link } from 'react-router-dom';
import { Icons } from '../../assets/images/images';
import { routeConstants } from '../../constants/routeConstants';
import { Icon } from '@iconify/react/dist/iconify.js';

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <div className='not-found-wrapper'>
        <div className='section'>
          <div className='not-found-content'>
            <div className='media'>
              <img src={Icons.NotFoundImage} alt='not found page image' />
            </div>
            <div className='content'>
              <p>
                We&apos;re sorry! This page is currently unavailable. We request you to please try
                again later.
              </p>

              <Link to={routeConstants.HOME} className='link-btn secondary'>
                <Icon icon='iconoir:home-alt' width='24' height='24' className='icon' />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
