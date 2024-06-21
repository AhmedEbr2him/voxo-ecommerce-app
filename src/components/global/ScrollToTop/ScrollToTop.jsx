import { useIsScroll } from '../../../hooks/useIsScroll';
import './style.css';
import { Icon } from '@iconify/react/dist/iconify.js';

const ScrollToTop = () => {
  const { isScroll } = useIsScroll();
  const handleScrollToTopBtn = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={`scroll-to-top ${isScroll ? '' : 'active'}`}>
      <button
        type='button'
        className='btn scroll-top-btn'
        aria-labelledby='scroll to top button'
        onClick={handleScrollToTopBtn}
      >
        <Icon icon='line-md:arrow-small-up' width='20' height='20' className='icon' />
      </button>
    </div>
  );
};
export default ScrollToTop;
