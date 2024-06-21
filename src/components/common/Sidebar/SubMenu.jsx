import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SecondSubmenu } from '../../index';
import { useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
import ExpandedButton from './ExpandedButton';

const SubMenu = ({ submenuItems }) => {
  const { isSecondSubmenuExpanded, handleExpandedSecondSubMenu } = useContext(MainContext);

  return (
    <div className='submenu'>
      <ul className='submenu-list'>
        {submenuItems.map((item, index) => {
          return (
            <li
              className='submenu-item'
              key={index}
              aria-expanded={isSecondSubmenuExpanded === index ? true : false}
            >
              <Link to={item.link}>
                {item.title}

                {/* EXPANDED BUTTON */}
                {item.expanded && (
                  <ExpandedButton
                    isExpanded={isSecondSubmenuExpanded}
                    index={index}
                    expandedFun={handleExpandedSecondSubMenu}
                  />
                )}
              </Link>
              {item.secondSubmenu && <SecondSubmenu submenuItems={item.secondSubmenu} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SubMenu;

SubMenu.propTypes = {
  submenuItems: PropTypes.array,
};
