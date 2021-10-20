import styled from 'styled-components';
import { color, variant } from 'styled-system';

import { SpriteIcon as SpriteIconUI } from 'components/ui/SpriteIcon';

import { Box } from 'components/ui/Box';
import { Text } from 'components/ui/Text';
import { Card } from 'components/ui/Card';

export const Container = styled<any>(Card).attrs((props) => ({
  bg: props.active ? 'white' : 'transparent',
}))`
  display: flex;
  align-items: center;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  ${variant({
    prop: 'size',
    variants: {
      sm: { py: 2, px: 3 },
      md: { py: 3, px: 4 },
      lg: { px: 6, py: 5 },
    },
  })}

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

  ${variant({
    prop: 'size',
    variants: {
      sm: { width: 15, height: 15, borderRadius: 8 },
      md: { width: 30, height: 30, borderRadius: 12 },
      lg: { width: 40, height: 40, borderRadius: 15 },
    },
  })}

  ${(props) =>
    props.active && 'box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);'}
`;

export const SpriteIcon = styled<any>(SpriteIconUI).attrs((props) => ({
  color: props.active ? 'white' : 'teal300',
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
