import './style.css';
import {
  CategoryCarousel,
  NewArrivalsCarousel,
  OfferSection,
  TopBanner,
  TypeSection,
  PopularProducts,
  DealSection,
  InstagramShop,
  ServicesSection,
} from '../../components';
import { useEffect } from 'react';
import { scrollToTop } from '../../utilities/scrollToTop';

const HomePage = () => {
  useEffect(() => {
    scrollToTop(0, 0);
  }, []);
  return (
    <div className='home-page'>
      <TopBanner />
      <TypeSection />
      <NewArrivalsCarousel />
      <CategoryCarousel />
      <OfferSection />
      <PopularProducts />
      <DealSection />
      <InstagramShop />
      <ServicesSection />
    </div>
  );
};
export default HomePage;
