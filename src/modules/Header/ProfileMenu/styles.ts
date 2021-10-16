import styled from 'styled-components';
import { color, space } from 'styled-system';

import { Box, SpriteIcon, Text, Popover as PopoverUI } from 'components/ui';
import { getThemeColor } from 'styles/theme';

export { UserAvatar } from 'components/ui';

export const Container = styled(Box).attrs({ ml: 5 })`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const UserName = styled(Text).attrs({ ml: 3, color: 'gray600' })`
  font-size: 18px;
`;

export const ArrowDown = styled(SpriteIcon).attrs({
  ml: 2,
  mt: 1,
  color: 'gray600',
  name: 'chevron-down',
  size: 'xs',
})`
  ${space}
  ${color}
`;

export const MenuListItem = styled(Text).attrs({ py: 4, color: 'gray600' })`
  text-align: center;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  transition: background-color 0.2s linear;
  &:hover {
    background-color: ${(props) => getThemeColor(props, 'gray200')};
  }
`;

export const Popover = styled(PopoverUI)`
  max-width: 200px !important;
  padding: 5px 0 !important;
  width: 100%;
  ${space}
`;
