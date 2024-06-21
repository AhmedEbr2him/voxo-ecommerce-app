import './style.css';
import { Filter, FilterAction, ProductsList, ShopBanner, Subscribe } from '../../components';
import { useEffect, useState } from 'react';
import { scrollToTop } from '../../utilities/scrollToTop';
import { useStopDocScroll } from '../../hooks/useStopDocScroll';

const ProductsPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveFilter = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    scrollToTop(0, 0);
  }, []);
  const { stopScroll, startScroll } = useStopDocScroll();

  useEffect(() => {
    isActive ? stopScroll() : startScroll();

    return () => startScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);
  return (
    <div className='shop-page'>
      <div className='shop-wrapper'>
        <div className='container'>
          <ShopBanner />
          <FilterAction handleActiveFilter={handleActiveFilter} />
          <ProductsList />
        </div>
      </div>
      <Filter handleActiveFilter={handleActiveFilter} isActive={isActive} />
      <Subscribe />
    </div>
  );
};
export default ProductsPage;
