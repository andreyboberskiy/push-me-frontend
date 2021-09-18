import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps } from 'styled-system';

export interface IBoxProps extends SpaceProps, ColorProps {}

export const Box = styled('div')`
  ${space}
  ${color}
`;
