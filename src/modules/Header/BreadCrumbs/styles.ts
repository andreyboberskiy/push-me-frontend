import styled from 'styled-components';

import { Box, Text } from 'components/ui';
import { getThemeColor } from 'styles/theme';

export { Row } from 'components/common';

export const Label = styled(Text).attrs((props) => ({
  color: props.last ? 'gray700' : 'gray300',
}))`
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;
  transition: color 0.2s linear;
  &:hover {
    color: ${(props) => getThemeColor(props, 'gray700')};
  }
  ${(props) => (props.last ? 'font-weight: 700;' : '')}
`;

export const CircleSeparator = styled(Box).attrs({ bg: 'teal500', mx: 2 })`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
