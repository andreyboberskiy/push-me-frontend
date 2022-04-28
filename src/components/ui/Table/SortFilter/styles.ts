import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styled from 'styled-components';
import { color } from 'styled-system';
import { getThemeColor } from 'styles/theme';

import { Box } from 'components/ui/Box';

import { Text } from 'components/ui/Text';

export const InnerContainer = styled(Box)`
  margin: 0 auto;
  display: flex;
  width: fit-content;

  justify-content: center;
  align-items: center;

  position: relative;
`;

export const ArrowContainer = styled(Box)<{ active: boolean }>`
  position: absolute;

  right: -18px;
  top: 50%;
  transform: translateY(-50%) translateX(-14px) scale(0);

  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: bold;

  transition: all 0.2s linear;

  opacity: ${(props) => (props.active ? 1 : 0)};
`;

export const Name = styled(Text).attrs({
  color: 'gray400',
})`
  font-size: 12px;
  line-height: 15px;
  font-weight: 700;

  text-transform: uppercase;
`;

export const ArrowDown = styled<any>(ArrowDownIcon).attrs<{
  $active: boolean;
}>((props) => ({
  htmlColor: getThemeColor(props, props.$active ? 'black' : 'gray300'),
  fontSize: 'inherit',
}))``;

export const ArrowUp = styled(ArrowDown)`
  transform: rotate(180deg);
`;

export const Container = styled(Box).attrs({ px: 4, py: 4 })<any>`
  max-width: ${(props) => props.width}%;
  width: 100%;

  cursor: pointer;
  transition: background-color 0.3s linear;

  &:hover {
    .${ArrowContainer.styledComponentId} {
      opacity: 1;
      transform: translateY(-50%) translateX(0px) scale(1);
    }
  }
`;
