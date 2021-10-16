import styled from 'styled-components';
import { color, space } from 'styled-system';

import { Box, SpriteIcon } from 'components/ui';

export { Popover, Badge } from 'components/ui';

export const Container = styled(Box).attrs({ mr: 6 })`
  cursor: pointer;
`;

export const Icon = styled<any>(SpriteIcon).attrs({
  size: 'lg',
  color: 'gray500',
})`
  ${color}
  ${space}
`;
