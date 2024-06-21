import { Link } from 'react-router-dom';
import { routeConstants } from '../../constants/routeConstants';

const Logo = () => {
  return (
    <Link to={routeConstants.HOME} className='logo'>
      Voxo
    </Link>
  );
};
export default Logo;
