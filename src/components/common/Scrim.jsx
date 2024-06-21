import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Scrim = ({ isActive, onClick }) => {
  return <div className={`scrim ${isActive ? 'active' : ''}`} onClick={onClick}></div>;
};
export default Scrim;

Scrim.propTypes = {
  onClick: PropTypes.func,
};
