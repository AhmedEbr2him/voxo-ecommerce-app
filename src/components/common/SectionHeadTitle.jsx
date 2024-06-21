import PropTypes from 'prop-types';

const SectionHeadTitle = ({ titleOne, titleTwo }) => {
  return (
    <div className='section-title'>
      <h2 className='first-title'>{titleOne}</h2>
      <h5 className='second-title'>{titleTwo}</h5>
    </div>
  );
};
export default SectionHeadTitle;

SectionHeadTitle.propTypes = {
  titleOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
};
