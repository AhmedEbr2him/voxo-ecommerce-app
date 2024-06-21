import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button className='btn custom-prev-arrow' onClick={onClick} aria-label='prev arrow button'>
      <Icon icon='iconamoon:arrow-left-1' width='16' height='16' className='icon' />
    </button>
  );
};
export default CustomPrevArrow;
CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
};
