import { useEffect, useState } from 'react';

export const useSelectMenu = ({ selectValueRef, storedKey }) => {
  const [isSelectExpanded, setIsSelectExpanded] = useState(false);
  const [selectValueType, setSelectValueType] = useState(() => {
    const storedValue = localStorage.getItem(storedKey);

    return storedValue ? JSON.parse(storedValue) : '';
  });

  const handleCurrencyField = item => {
    setSelectValueType(item);
    setIsSelectExpanded(!isSelectExpanded);
  };
  useEffect(() => {
    // UPDATE CURRENT TYPE IMMEDIATELY WHEN APP IS LANCHING
    selectValueRef.current.value = selectValueType;

    localStorage.setItem(storedKey, JSON.stringify(selectValueType));
  }, [setSelectValueType, selectValueType, selectValueRef, storedKey]);

  return {
    handleCurrencyField,
    isSelectExpanded,
    setIsSelectExpanded,
    selectValueType,
  };
};
