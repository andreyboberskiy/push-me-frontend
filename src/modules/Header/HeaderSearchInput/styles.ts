import styled from 'styled-components';

import { SearchInput as SearchInputUI } from 'components/ui';
import { getThemeColor } from 'styles/theme';

export const SearchInput = styled<any>(SearchInputUI).attrs({
  startIconProps: {
    size: 'sm',
  },
})`
  max-width: 250px;
  width: 100%;
  .MuiInputBase-root {
    background-color: ${(props) => getThemeColor(props, 'white')};
  }
  .MuiInputBase-input {
    padding: 14px 0 !important;
  }
`;
