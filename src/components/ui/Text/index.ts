import styled from 'styled-components';
import { color, fontFamily, fontSize, space } from 'styled-system';

export const Text = styled<any>('p')`
  text-align: center;
  ${space}
  ${color}
  ${fontSize}
  ${fontFamily}
`;
