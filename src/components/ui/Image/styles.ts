import styled from 'styled-components';

import { Box } from 'components/ui/Box';

export const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const Wrapper = styled(Box).attrs({})`
  cursor: pointer;
`;
