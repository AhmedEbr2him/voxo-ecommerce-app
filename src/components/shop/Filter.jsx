import { Link } from 'react-router-dom';
import SidebarTitle from '../common/Sidebar/SidebarTitle';
import ExpandedButton from '../../components/common/Sidebar/ExpandedButton';
import { Scrim, SubMenu } from '../index';

import { useState } from 'react';

const Filter = ({ handleActiveFilter, isActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const filterItems = [
    {
      title: 'Category',
      link: '#',
      expanded: true,
      submenu: [
        {
          title: 'Electronics',
          id: 1,
          quantity: '2',
          checkbox: false,
        },
        {
          title: 'Headphone',
          id: 2,
          quantity: '1',
          checkbox: false,
        },
        {
          title: 'Smartwatch',
          id: 3,
          quantity: '1',
          checkbox: false,
        },
        {
          title: 'Speaker',
          id: 4,
          quantity: '1',
          checkbox: false,
        },
        {
          title: 'Fashion',
          id: 5,
          quantity: '1',
          checkbox: false,
        },
        {
          title: 'Jacket',
          id: 6,
          quantity: '1',
          checkbox: false,
        },
        {
          title: 'Shirt',
          id: 7,
          quantity: '1',
          checkbox: false,
        },
        {
          title: 'Jeans',
          id: 8,
          quantity: '1',
          checkbox: false,
        },
        {
          title: 'Wallet',
          id: 9,
          quantity: '1',
          checkbox: false,
        },
        {
          title: 'Nike',
          id: 10,
          quantity: '1',
          checkbox: false,
        },
        {
          title: 'Puma',
          id: 11,
          quantity: '1',
          checkbox: false,
        },
        {
          title: 'Rebook',
          id: 12,
          quantity: '1',
          checkbox: false,
        },
      ],
    },
    {
      title: 'Weight',
      link: '#',
      expanded: true,
      submenu: [
        {
          id: 13,
          title: '500 G',
          checkbox: true,
        },
        {
          id: 14,
          title: '1 KG',
          checkbox: true,
        },
      ],
    },
    {
      title: 'Material',
      link: '#',
      expanded: true,
      submenu: [
        {
          id: 15,
          title: 'Cotton',
          checkbox: true,
        },
        {
          id: 16,
          title: 'Silk',
          checkbox: true,
        },
        {
          id: 17,
          title: 'Leather',
          checkbox: true,
        },
        {
          id: 18,
          title: 'Canvas',
          checkbox: true,
        },
      ],
    },
    {
      title: 'Size',
      link: '#',
      expanded: true,
      submenu: [
        {
          id: 19,
          title: 'S',
          checkbox: true,
        },
        {
          id: 20,
          title: 'M',
          checkbox: true,
        },
        {
          id: 1,
          title: 'L',
          checkbox: true,
        },
        {
          id: 21,
          title: 'XL',
          checkbox: true,
        },
        {
          id: 22,
          title: 'XXL',
          checkbox: true,
        },
      ],
    },

    {
      title: 'Color',
      link: '#',
      expanded: true,
      submenu: [
        {
          id: 23,
          title: 'Red',
          checkbox: true,
        },
        {
          id: 24,
          title: 'Blue',
          checkbox: true,
        },
        {
          id: 25,
          title: 'Green',
          checkbox: true,
        },
        {
          id: 26,
          title: 'Orange',
          checkbox: true,
        },
        {
          id: 27,
          title: 'Yello',
          checkbox: true,
        },
      ],
    },
    {
      title: 'Brand',
      link: '#',
      expanded: true,
      submenu: [
        {
          id: 28,
          title: 'Nike',
          checkbox: true,
        },
        {
          id: 29,
          title: 'Addidas',
          checkbox: true,
        },
        {
          id: 30,
          title: 'Voyage',
          checkbox: true,
        },
        {
          id: 31,
          title: 'Pulm',
          checkbox: true,
        },
        {
          id: 32,
          title: 'XO',
          checkbox: true,
        },
      ],
    },
    {
      title: 'Rating',
      link: '#',
      expanded: true,
      submenu: [
        {
          id: 33,
          rate: 1,
          checkbox: true,
        },
        {
          id: 34,
          rate: 2,
          checkbox: true,
        },
        {
          id: 35,
          rate: 3,
          checkbox: true,
        },
        {
          id: 36,
          rate: 4,
          checkbox: true,
        },
        {
          id: 37,
          rate: 5,
          checkbox: true,
        },
      ],
    },
    {
      title: 'Discount Range',
      link: '#',
      expanded: true,
      submenu: [
        {
          id: 38,
          title: '5% and above',
          checkbox: true,
        },
        {
          id: 39,
          title: '10% and above',
          checkbox: true,
        },
        {
          id: 40,
          title: '15% and above',
          checkbox: true,
        },
      ],
    },
  ];
  const handleExpandedSubMenu = index => {
    setIsExpanded(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className={`sidebar filter-sidebar ${isActive ? 'active' : ''}`}>
        <SidebarTitle title={'Filter'} onClick={handleActiveFilter} />
        <div className='sidebar-body'>
          <ul className='sidebar-menu'>
            {filterItems &&
              filterItems.map((item, index) => {
                const { title, link, expanded, submenu } = item;

                return (
                  <li
                    className='sidebar-item'
                    key={index}
                    aria-expanded={isExpanded === index ? true : false}
                  >
                    <Link to={link}>
                      {title}
                      {/* EXPANDED BUTTON */}
                      {expanded && (
                        <ExpandedButton
                          item={item}
                          isExpanded={isExpanded}
                          expandedFun={handleExpandedSubMenu}
                          index={index}
                        />
                      )}
                    </Link>

                    {/* SUBMENU */}
                    <SubMenu submenuItems={submenu} />
                  </li>
                );
              })}
          </ul>
        </div>

        <div className='filter-footer'>
          <div className='filter-action'>
            <button type='submit' className='link-btn submit-btn'>
              Submit
            </button>
          </div>
          <div className='filter-action'>
            <button type='submit' className='link-btn remove-btn'>
              Clear
            </button>
          </div>
        </div>
      </div>
      <Scrim isActive={isActive} onClick={handleActiveFilter} />
    </>
  );
};
export default Filter;
