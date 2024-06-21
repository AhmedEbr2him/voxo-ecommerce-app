import { Icon } from '@iconify/react/dist/iconify.js';

const FilterAction = ({ handleActiveFilter }) => {
  return (
    <div className='filter-action'>
      <div className='filter-wrapper'>
        <button className='filter-btn' onClick={handleActiveFilter}>
          <Icon icon='bi:filter-left' width='26' height='26' className='icon' />
          <span>Filter</span>
        </button>
      </div>

      <div className='price'>
        <h3>Price:</h3>
        <div className='filter-price'>
          <span className='from'>&#36;3.00</span>
          <span>-</span>
          <span className='to'>&#36;100.00</span>
        </div>
      </div>
    </div>
  );
};
export default FilterAction;
