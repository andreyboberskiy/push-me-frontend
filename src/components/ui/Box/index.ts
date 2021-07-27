import styled from 'styled-components';
import { color, space, SpaceProps } from 'styled-system';

interface Props extends SpaceProps {}

export const Box = styled.div<Props>`
  ${space}
  ${color}
`;
