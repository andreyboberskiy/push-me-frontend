import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps } from 'styled-system';

interface Props extends SpaceProps, ColorProps {}

export const Box = styled.div.attrs<Props>({})`
  ${space}
  ${color}
`;
