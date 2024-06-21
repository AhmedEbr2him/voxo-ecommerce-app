import { Outlet } from 'react-router-dom';
import {
  Auth,
  Cart,
  Catiegories,
  Footer,
  Header,
  Menu,
  MobileHeader,
  MobileMenuBottom,
  ThemeSettings,
  Search,
  ScrollToTop,
} from '../../index';

const Layout = () => {
  return (
    <div className='main'>
      <Header />
      <MobileHeader />
      <Outlet />
      <Footer />
      <Menu />
      <Auth />
      <Cart />
      <Catiegories />
      <ThemeSettings />
      <MobileMenuBottom />
      <Search />
      <ScrollToTop />
    </div>
  );
};
export default Layout;
