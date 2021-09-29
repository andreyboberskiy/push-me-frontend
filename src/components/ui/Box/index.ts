import styled from 'styled-components';
import {
  color,
  shadow,
  ShadowProps,
  ColorProps,
  space,
  SpaceProps,
} from 'styled-system';

export interface IBoxProps extends SpaceProps, ColorProps, ShadowProps {}

export const Box = styled('div')`
  ${space}
  ${color}
  ${shadow}
`;
