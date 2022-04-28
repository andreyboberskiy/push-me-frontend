import React, { useCallback, useRef, useState } from 'react';
import { debounce, noop } from 'lodash';

import { TextInput } from './styles';

// Interface
interface ISearchInputProps {
  onSearch: (query: string) => void;
  startIconProps?: object;
}

export const SearchInput: React.FC<ISearchInputProps> = ({
  onSearch,
  startIconProps,
  ...props
}) => {
  const [value, setValue] = useState('');

  const debouncedSearch = useRef(debounce(onSearch, 1000));

  const handleChange = useCallback((e) => {
    setValue(e.currentTarget.value);
    debouncedSearch.current(e.currentTarget.value);
  }, []);

  return (
    <TextInput
      value={value}
      onChange={handleChange}
      startIcon={{ name: 'search', onClick: noop, ...startIconProps }}
      placeholder="Type to search..."
      {...props}
    />
  );
};
