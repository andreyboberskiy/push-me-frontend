import styled from 'styled-components';

import { Box } from 'components/ui/Box';

export const Card = styled(Box).attrs({
  p: 5,
  bg: 'white',
})`
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 4%) 0 7px 11px;
`;
