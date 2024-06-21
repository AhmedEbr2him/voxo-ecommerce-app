import { Icon } from '@iconify/react/dist/iconify.js';
import { Type } from '../../assets/images/images';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../constants/routeConstants';
import React, { useState } from 'react';

const TypeSection = () => {
  const [isFavorite, setIsFavorite] = useState([]);
  const [animatedFavIcon, setAnimatedFavIcon] = useState(0);

  const MemoIcon = React.memo(Icon);
  const typeSectionData = [
    {
      typeBanner: Type.type1,
      badge: '10',
      label: 'v-neck',
    },
    {
      typeBanner: Type.type2,
      badge: '15',
      label: 'allen solly',
    },
    {
      typeBanner: Type.type3,
      badge: '10',
      label: 't-shirt',
    },
  ];
  const handleFavorite = index => {
    const newFavorite = [...isFavorite];
    newFavorite[index] = !newFavorite[index];
    setIsFavorite(newFavorite);
    setAnimatedFavIcon(prevKey => prevKey + 1);
  };
  return (
    <section className='section type-section'>
      <div className='container'>
        <div className='type-section-wrapper'>
          <div className='type-list'>
            {typeSectionData.map((item, index) => (
              <div className='type-item' key={index}>
                <div className='type-media'>
                  <img
                    src={item.typeBanner}
                    alt='type bannder'
                    loading='lazy'
                    className='object-cover'
                  />
                </div>
                <div className='type-header'>
                  <button
                    className='btn'
                    onClick={() => handleFavorite(index)}
                    aria-label='add to favorite button'
                  >
                    {isFavorite[index] ? (
                      <Icon icon='line-md:heart-filled' width='16' height='16' className='icon' />
                    ) : (
                      <MemoIcon
                        icon='cil:heart'
                        width='16'
                        height='16'
                        className='icon'
                        key={animatedFavIcon}
                        aria-label='add to favorite button'
                      />
                    )}
                  </button>
                  <span className='badge'>{item.badge}% off</span>
                </div>
                <div className='banner-content'>
                  <h2>{item.label}</h2>
                  <span className='label-large'>by one get one free</span>
                </div>
                <Link to={routeConstants.PRODUCTS} className='link'></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TypeSection;
