import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useSelectMenu } from '../../hooks/useSelectMenu';
import { useRef } from 'react';

const SelectMenu = ({ title, data, storedKey, placeholder }) => {
  const selectValueRef = useRef(null);
  const { handleCurrencyField, isSelectExpanded, setIsSelectExpanded, selectValueType } =
    useSelectMenu({
      selectValueRef,
      storedKey,
    });

  return (
    <div className='select-menu'>
      {title && <p className='title-small'>{title}:</p>}
      <label htmlFor={storedKey} className='select-field'>
        <input
          id={storedKey}
          className='select-control'
          type='text'
          name='select-menu'
          defaultValue={selectValueType}
          disabled
          ref={selectValueRef}
          placeholder={placeholder && placeholder}
        />
        <button
          className='btn'
          aria-label='open currency menu button'
          onClick={() => setIsSelectExpanded(!isSelectExpanded)}
        >
          {isSelectExpanded ? (
            <Icon icon='ri:arrow-up-s-fill' width='20' height='20' className='icon' />
          ) : (
            <Icon icon='ri:arrow-down-s-fill' width='20' height='20' className='icon' />
          )}
        </button>
      </label>
      <ul aria-expanded={isSelectExpanded}>
        {data.map((prop, index) => (
          <li key={index} onClick={() => handleCurrencyField(prop.type)}>
            {prop.symbol && (
              <span className='symbol' dangerouslySetInnerHTML={{ __html: prop.symbol }}></span>
            )}
            <span className='type'>{prop.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SelectMenu;

SelectMenu.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  selectValueType: PropTypes.string,
  setSelectValueType: PropTypes.func,
  storedKey: PropTypes.string.isRequired,
};
