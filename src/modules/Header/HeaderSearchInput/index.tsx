import React, { useCallback } from 'react';

import { SearchInput } from './styles';

export const HeaderSearchInput = () => {
  const handleSearch = useCallback((query) => {
    console.log('request', query);
  }, []);

  return <SearchInput onSearch={handleSearch} />;
};
