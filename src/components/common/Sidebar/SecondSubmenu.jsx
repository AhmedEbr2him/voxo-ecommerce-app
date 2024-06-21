import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SecondSubmenu = ({ submenuItems }) => {
  return (
    <div className='submenu second-submenu'>
      <ul className='submenu-list'>
        {submenuItems.map((item, index) => {
          return (
            <li className='submenu-item' key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SecondSubmenu;

SecondSubmenu.propTypes = {
  submenuItems: PropTypes.array,
};
