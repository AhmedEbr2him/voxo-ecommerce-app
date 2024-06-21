import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/index';
import {
  About,
  Blog,
  Checkout,
  Contact,
  Home,
  OrderTracking,
  Products,
  Wishlist,
  ProductDetail,
} from './pages';
import { routeConstants } from './constants/routeConstants';
import { MainProviderContext } from './context/MainContext';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: routeConstants.HOME,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: routeConstants.PRODUCTS,
          element: <Products />,
        },
        {
          path: routeConstants.PRODUCT_DETAIL,
          element: <ProductDetail />,
        },
        {
          path: routeConstants.BLOG,
          element: <Blog />,
        },
        {
          path: routeConstants.ABOUT,
          element: <About />,
        },
        {
          path: routeConstants.CONTACT,
          element: <Contact />,
        },
        {
          path: routeConstants.CHECKOUT,
          element: <Checkout />,
        },
        {
          path: routeConstants.ORDER,
          element: <OrderTracking />,
        },
        {
          path: routeConstants.WISHLIST,
          element: <Wishlist />,
        },
      ],
    },
  ]);
  return (
    <MainProviderContext>
      <RouterProvider router={routes}>
        <Layout />
      </RouterProvider>
    </MainProviderContext>
  );
};
export default App;
