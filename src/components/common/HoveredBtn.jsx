import { Icon } from '@iconify/react/dist/iconify.js';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HoveredBtn = ({ to, text, addClass, arrow, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className={`link-btn ${addClass} ${isHovered ? 'active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
    >
      {text && text}

      {arrow && (
        <Icon
          icon='jam:arrow-up-right'
          width='18'
          height='18'
          className='icon'
          style={{ color: color && color }}
        />
      )}
    </Link>
  );
};
export default HoveredBtn;
HoveredBtn.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  addClass: PropTypes.string.isRequired,
  arrow: PropTypes.bool,
};
