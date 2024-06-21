import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

const MainContext = createContext(null);

const MainProviderContext = ({ children }) => {
  /* SUBMENU */
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSecondSubmenuExpanded, setIsSecondSubmenuExpanded] = useState(false);
  /* SELECT MENU */
  const [currencyType, setCurrencyType] = useState(() => {
    return JSON.parse(localStorage.getItem('currencyType')) || 'USD';
  });
  const [currentLanguage, setCurrentLanguage] = useState(
    () => JSON.parse(localStorage.getItem('currentLanguage')) || 'English'
  );
  const [currentProductsView, setCurrentProductsView] = useState(() => {
    const storedValue = localStorage.getItem('productsView');
    return storedValue ? JSON.parse(storedValue) : '24 Page per view';
  });
  const [produtsTypeView, setProdutsTypeView] = useState(() => {
    const storedValue = localStorage.getItem('productsTypeView');
    return storedValue ? JSON.parse(storedValue) : 'Selected Featured';
  });
  /* SIDEBAR STATUS */
  const [isMenuActive, setIsMenuActive] = useState(
    () => JSON.parse(sessionStorage.getItem('menuStatus')) || false
  );
  const [isCategoriesActive, setIsCategoriesActive] = useState(
    () => JSON.parse(sessionStorage.getItem('categoriesStatus')) || false
  );
  const [isCartActive, setIsCartActive] = useState(
    () => JSON.parse(sessionStorage.getItem('cartStatus')) || false
  );
  const [isAuthActive, setIsAuthActive] = useState(
    () => JSON.parse(sessionStorage.getItem('authStatus')) || false
  );
  /* SEARCH STATES */
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  /* HOME PAGE */

  /* TOGGLE FUNCTION FOR SIDEBAR */
  const toggleState = (state, setState, key) => {
    const newState = !state;
    setState(newState);
    sessionStorage.setItem(key, JSON.stringify(newState));
  };
  /* SIDEBAR HANDLER */
  const handleIsMenuActive = () => toggleState(isMenuActive, setIsMenuActive, 'menuStatus');
  const handleIsCategriesActive = () =>
    toggleState(isCategoriesActive, setIsCategoriesActive, 'categoriesStatus');
  const handleIsCartActive = () => toggleState(isCartActive, setIsCartActive, 'cartStatus');
  const handleIsAuthActive = () => toggleState(isAuthActive, setIsAuthActive, 'authStatus');
  /* SUBMENU HANDLER */
  const handleExpandedSubMenu = index => {
    setIsExpanded(prevIndex => (prevIndex === index ? null : index));
  };
  const handleExpandedSecondSubMenu = index => {
    setIsSecondSubmenuExpanded(prevIndex => (prevIndex === index ? null : index));
  };

  // Updating Local Storage
  useEffect(() => {
    sessionStorage.setItem('menuStatus', JSON.stringify(isMenuActive));
    sessionStorage.setItem('categoriesStatus', JSON.stringify(isCategoriesActive));
    sessionStorage.setItem('cartStatus', JSON.stringify(isCartActive));
  }, [isMenuActive, isCategoriesActive, isCartActive]);

  /* SEARCH */
  const handleSearchActive = () => setIsSearchActive(!isSearchActive);

  /* HOME PAGE */
  const [isDetailActive, setIsDetailActive] = useState(false);

  const handleDetailActive = () => {
    toggleState(isDetailActive, setIsDetailActive, 'detailSlide');
  };

  /* NOTIFICATION */
  const [isNotificationActive, setIsNotificationActive] = useState(false);

  /* WISHLIST PRODUCTS */

  return (
    <MainContext.Provider
      value={{
        isMenuActive,
        handleIsMenuActive,
        isCategoriesActive,
        handleIsCategriesActive,
        isExpanded,
        handleExpandedSubMenu,
        isSecondSubmenuExpanded,
        handleExpandedSecondSubMenu,
        isCartActive,
        handleIsCartActive,
        currencyType,
        setCurrencyType,
        currentLanguage,
        setCurrentLanguage,
        isAuthActive,
        handleIsAuthActive,
        isSearchActive,
        handleSearchActive,
        searchValue,
        setSearchValue,
        isDetailActive,
        handleDetailActive,
        isNotificationActive,
        setIsNotificationActive,
        currentProductsView,
        setCurrentProductsView,
        produtsTypeView,
        setProdutsTypeView,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProviderContext };

MainProviderContext.propTypes = {
  children: PropTypes.node,
};
