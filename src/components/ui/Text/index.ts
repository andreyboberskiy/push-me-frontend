import styled from 'styled-components';
import { color, fontFamily, fontSize, space } from 'styled-system';

export const Text = styled<any>('p').attrs((props) => ({
  fontFamily: 0,
  color: 'black',
}))`
  text-align: center;
  ${space}
  ${color}
  ${fontSize}
  ${fontFamily}
`;
