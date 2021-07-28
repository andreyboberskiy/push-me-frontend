import styled from 'styled-components';
import { color, fontSize, space } from 'styled-system';

export const Text = styled.p.attrs({ color: 'white' })`
  text-align: center;
  font-family: Main, sans-serif;
  ${space}
  ${color}
  ${fontSize}
`;
