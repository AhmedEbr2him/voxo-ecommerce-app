import './theme.css';
import { Icon } from '@iconify/react';
import { useThemeSwitch } from '../../../hooks/useThemeSwitch';
import React, { useState } from 'react';

const ThemeSettings = () => {
  const { changeTheme } = useThemeSwitch();
  const [, setLightIconKey] = useState(0);
  const [, setDarkIconKey] = useState(0);

  const MemoIcons = React.memo(Icon);
  return (
    <div className='theme-settings'>
      <button
        className='btn'
        onClick={() => {
          changeTheme();
        }}
        aria-labelledby='switch theme button'
      >
        <MemoIcons
          icon='line-md:moon'
          width='24'
          height='24'
          className='icon dark-icon'
          onClick={() => setLightIconKey(prevKey => prevKey + 1)}
        />
        <MemoIcons
          icon='line-md:moon-alt-to-sunny-outline-loop-transition'
          width='24'
          height='24'
          className='icon light-icon'
          onClick={() => setDarkIconKey(prevKey => prevKey + 1)}
        />
      </button>
    </div>
  );
};
export default ThemeSettings;
