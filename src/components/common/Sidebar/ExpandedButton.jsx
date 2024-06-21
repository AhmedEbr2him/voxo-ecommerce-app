import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';

const ExpandedButton = ({ isExpanded, expandedFun, index }) => {
  return (
    <>
      <button
        className='expanded-icon'
        onClick={() => expandedFun(index)}
        aria-label='expanded menu button'
      >
        {isExpanded === index ? (
          <Icon icon='ic:baseline-minus' width='15' height='15' className='icon' />
        ) : (
          <Icon icon='ic:baseline-plus' width='15' height='15' className='icon' />
        )}
      </button>
    </>
  );
};
export default ExpandedButton;

ExpandedButton.propTypes = {
  isExpanded: PropTypes.node,
  expandedFun: PropTypes.func,
  index: PropTypes.number,
};
