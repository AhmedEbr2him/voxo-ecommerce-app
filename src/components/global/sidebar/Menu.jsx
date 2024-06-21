import './style.css';
import SidebarTitle from '../../common/Sidebar/SidebarTitle';
import { useContext, useEffect } from 'react';
import { MainContext } from '../../../context/MainContext';
import { Scrim } from '../../index';
import { Data } from '../../../constants/mockData';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import SelectMenu from '../../common/SelectMenu';
import { useStopDocScroll } from '../../../hooks/useStopDocScroll';

const Menu = () => {
  const {
    isMenuActive,
    handleIsMenuActive,
    currencyType,
    setCurrencyType,
    currentLanguage,
    setCurrentLanguage,
  } = useContext(MainContext);
  const { stopScroll, startScroll } = useStopDocScroll();

  useEffect(() => {
    isMenuActive ? stopScroll() : startScroll();

    return () => startScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuActive]);
  return (
    <div>
      <div className={`sidebar main-menu-sidebar ${isMenuActive ? 'active' : ''}`}>
        <SidebarTitle title='Menu' onClick={handleIsMenuActive} />
        <div className='sidebar-body'>
          <ul className='sidebar-menu'>
            {Data.menuItems.map((item, index) => {
              return (
                <li key={index} className='sidebar-item' onClick={handleIsMenuActive}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              );
            })}
          </ul>

          <SelectMenu
            title='Currency'
            data={Data.currencyList}
            selectValueType={currencyType}
            setSelectValueType={setCurrencyType}
            storedKey={'currencyType'}
            placeholder={'USD'}
          />
          <SelectMenu
            title='Language'
            data={Data.LanguageList}
            selectValueType={currentLanguage}
            setSelectValueType={setCurrentLanguage}
            storedKey={'currentLanguage'}
            placeholder={'English'}
          />
        </div>
        <div className='sidebar-footer'>
          <p className='title-small'>Follow us on:</p>
          <ul className='social-list'>
            {Data.footerSocialList.map((item, index) => (
              <li className='social-item' key={index}>
                <Link to='#'>
                  <Icon icon={item.icon} width='28' height='28' className='icon social-icon' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Scrim isActive={isMenuActive} onClick={handleIsMenuActive} />
    </div>
  );
};
export default Menu;
