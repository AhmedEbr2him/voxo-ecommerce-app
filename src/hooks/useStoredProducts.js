import { useContext, useState } from 'react';
import { MainContext } from '../context/MainContext';

export const useStoredProducts = () => {
  const [productsCart, setProductsCart] = useState([]);

  const { setIsNotificationActive } = useContext(MainContext);
  const handleLocalStorage = (key, index, product) => {
    const isProductStored = JSON.parse(localStorage.getItem(`${key}-${index}`));

    if (!isProductStored) {
      setProductsCart(`${product}`);
      localStorage.setItem(`${key}-${index}`, JSON.stringify(product));
      setIsNotificationActive(true);
    } else {
      key === 'wishlist' && localStorage.removeItem(`${key}-${index}`, JSON.stringify(product));
      setIsNotificationActive(false);
    }
  };

  return {
    productsCart,
    handleLocalStorage,
  };
};
