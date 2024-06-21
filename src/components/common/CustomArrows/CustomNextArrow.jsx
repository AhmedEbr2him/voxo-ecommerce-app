import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';

const CustomNextArrow = ({ onClick }) => {
  return (
    <button className='btn custom-next-arrow' onClick={onClick} aria-label='next arrow button'>
      <Icon icon='iconamoon:arrow-right-1' width='16' height='16' className='icon' />
    </button>
  );
};
export default CustomNextArrow;
CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};
