import styled from 'styled-components';

import { Box } from 'components/ui/Box';

export const Circle = styled<any>(Box).attrs((props) => ({
  bg: props.active ? 'green' : 'red',
}))<any>`
  width: ${(props) => props.size ?? 16}px;
  height: ${(props) => props.size ?? 16}px;
  border-radius: 50%;

  margin: 0 auto;
`;
