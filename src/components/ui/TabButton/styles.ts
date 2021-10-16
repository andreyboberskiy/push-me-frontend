import styled from 'styled-components';

import { Box } from 'components/ui/Box';
import { SpriteIcon as SpriteIconUI } from 'components/ui/SpriteIcon';
import { Text } from 'components/ui/Text';
import { Card } from 'components/ui/Card';
import { color } from 'styled-system';

export const Container = styled<any>(Card).attrs((props) => ({
  mt: 3,
  py: 3,
  px: 4,
  bg: props.active ? 'white' : 'transparent',
}))`
  display: flex;
  align-items: center;

  cursor: pointer;
  ${(props) => !props.active && 'box-shadow: unset;'}
`;
export const IconContainer = styled<any>(Box).attrs((props) => ({
  bg: props.active ? 'teal300' : 'white',
}))`
  transition: all 0.2s linear;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;

  width: 30px;
  height: 30px;

  ${(props) =>
    props.active && 'box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);'}
`;

export const SpriteIcon = styled<any>(SpriteIconUI).attrs((props) => ({
  color: props.active ? 'white' : 'teal300',
  size: 'sm',
}))`
  ${color}
`;

export const Label = styled<any>(Text).attrs((props) => ({
  color: props.active ? 'gray700' : 'gray400',
  ml: 3,
}))`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  transition: all 0.2s linear;
`;
