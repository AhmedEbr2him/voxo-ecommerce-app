import { Scrim, SidebarTitle, SubMenu } from '../../index';
import { Data } from '../../../constants/mockData';
import { useContext, useEffect } from 'react';
import { MainContext } from '../../../context/MainContext';
import { Link } from 'react-router-dom';
import ExpandedButton from '../../common/Sidebar/ExpandedButton';
import { useStopDocScroll } from '../../../hooks/useStopDocScroll';

const Categories = () => {
  const { isExpanded, handleExpandedSubMenu, isCategoriesActive, handleIsCategriesActive } =
    useContext(MainContext);
  const { stopScroll, startScroll } = useStopDocScroll();

  useEffect(() => {
    isCategoriesActive ? stopScroll() : startScroll();

    return () => startScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCategoriesActive]);
  return (
    <div>
      <div className={`sidebar categories-sidebar ${isCategoriesActive ? 'active' : ''}`}>
        <SidebarTitle title={'category list'} onClick={handleIsCategriesActive} />
        <div className='sidebar-body'>
          {Data.categoriesItems && (
            <ul className='sidebar-menu'>
              {Data.categoriesItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='sidebar-item'
                    aria-expanded={isExpanded === index ? true : false}
                  >
                    <Link to={item.link}>
                      {/* TITLE */}
                      {item.title}
                      {/* EXPANDED BUTTON */}
                      {item.expanded && (
                        <ExpandedButton
                          item={item}
                          isExpanded={isExpanded}
                          expandedFun={handleExpandedSubMenu}
                          index={index}
                        />
                      )}
                    </Link>
                    {/* SUBMENU */}
                    {item.submenu && <SubMenu submenuItems={item.submenu} />}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <Scrim isActive={isCategoriesActive} onClick={handleIsCategriesActive} />
    </div>
  );
};
export default Categories;
