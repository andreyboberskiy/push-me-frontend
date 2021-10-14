import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styled from 'styled-components';
import { color } from 'styled-system';

import { Box } from 'components/ui/Box';
import { Text } from '../Text';

export const Container = styled(Box).attrs({ px: 4, py: 4 })<any>`
  max-width: ${(props) => props.width}%;
  width: 100%;

  cursor: pointer;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${color('black1')};
  }
`;

export const InnerContainer = styled(Box)`
  margin: 0 auto;
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const ArrowContainer = styled(Box).attrs({ ml: 2 })`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: bold;
`;

export const Name = styled(Text).attrs({
  fontFamily: 0,
  fontSize: 3,
  color: 'black',
})``;

export const ArrowDown = styled<any>(ArrowDownIcon).attrs<{
  $active: boolean;
}>((props) => ({
  htmlColor: props.$active ? color('black') : color('grey3'),
  fontSize: 'inherit',
}))``;

export const ArrowUp = styled(ArrowDown)`
  transform: rotate(180deg);
`;
