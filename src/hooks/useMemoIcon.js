import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

export const useMemoIcon = (event, iconName, iconSize) => {
  const [animatedIcon, setAnimatedIcon] = useState(0);
  const memoBtnRef = useRef(null);

  const MemoIcon = React.memo(Icon);

  useEffect(() => {
    const handleMemoRef = () => {
      setAnimatedIcon(prevKey => prevKey + 1);
    };
    memoBtnRef.addEventListener(event, handleMemoRef);
  }, [event]);

  return (
    <button className='btn' ref={memoBtnRef}>
      <MemoIcon
        key={animatedIcon}
        icon={iconName}
        width={iconSize}
        height={iconSize}
        className='icon'
      />
    </button>
  );
};
