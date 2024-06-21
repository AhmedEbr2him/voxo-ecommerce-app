import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../constants/routeConstants';

const EmptyCartScreen = () => {
  return (
    <div className='empty-screen'>
      <span className='cart-icon'>
        <Icon icon='teenyicons:cart-outline' className='icon' />
      </span>
      <p className='label-large'>
        Your shopping cart is empty.
        <br /> Let&apos;s add something to it
      </p>
      <Link to={routeConstants.PRODUCTS} className='link-btn secondary'>
        <Icon icon='uil:arrow-left' width='24' height='24' className='icon' />
        <span>Continue Shopping</span>
      </Link>
    </div>
  );
};
export default EmptyCartScreen;
