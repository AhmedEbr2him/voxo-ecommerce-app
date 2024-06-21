import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';

const SidebarTitle = ({ title, onClick }) => {
  return (
    <div className='sidebar-title'>
      <h4>{title}</h4>
      <button className='btn has-state close-icon' aria-label='close menu button' onClick={onClick}>
        <Icon icon='ep:close-bold' width='20' height='20' className='icon' />
      </button>
    </div>
  );
};
export default SidebarTitle;
SidebarTitle.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
