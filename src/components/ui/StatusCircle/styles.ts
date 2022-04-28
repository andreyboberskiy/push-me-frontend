import styled from 'styled-components';

import { Box } from 'components/ui/Box';

export const Circle = styled<any>(Box).attrs((props) => ({
  bg: props.active ? 'green500' : 'red500',
}))<any>`
  transition: background-color 0.2s linear;
  width: ${(props) => props.size ?? 16}px;
  height: ${(props) => props.size ?? 16}px;
  border-radius: 50%;
`;
