import styled from 'styled-components';

import { Box } from 'components/ui';

export const Container = styled(Box).attrs({
  pl: 6,
  pr: 1,
})`
  width: 100%;
`;

export const BottomContainer = styled(Box)
  .attrs({ pt: 4, mt: 4, px: 2, pb: 4 })
  .attrs({
    bg: 'transparent',
  })`
  overflow-y: scroll;
  overflow-x: visible;
  height: calc(100vh - 84px);
  
`;
