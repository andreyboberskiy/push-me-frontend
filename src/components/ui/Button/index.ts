import styled from 'styled-components';

import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
  variant,
} from 'styled-system';

// Interface
interface IButtonProps extends SpaceProps, FontSizeProps, ColorProps {
  variant?:
    | 'lightFilled'
    | 'lightOutlined'
    | 'darkFilled'
    | 'darkOutlined'
    | 'redFilled'
    | 'redOutlined';
  size?: 'xs' | 'sm' | 'lg';
}

export const Button = styled('button').attrs<IButtonProps>({
  fontFamily: 'Ubuntu',
})<IButtonProps>`
  ${variant({
    variants: {
      lightFilled: {
        bg: 'lightBlue',
        color: 'white',
      },
      lightOutlined: {
        bg: 'transparent',
        borderColor: 'lightBlue',
        color: 'lightBlue',
      },
      darkFilled: {
        bg: 'darkBlue',
        color: 'white',
      },
      darkOutlined: {
        bg: 'transparent',
        borderColor: 'lightBlue',
        color: 'lightBlue',
      },
      redFilled: {
        bg: 'red',
        color: 'white',
      },
      redOutlined: {
        bg: 'transparent',
        borderColor: 'red',
        color: 'red',
      },
    },
  })}
  border-size: 3px;
  border-style: solid;

  ${variant({
    prop: 'size',
    variants: {
      xs: {
        px: 3,
        py: 2,
        borderRadius: 8,
        fontSize: 2,
      },
      sm: {
        px: 4,
        py: 3,
        borderRadius: 12,
        fontSize: 4,
      },
      lg: {
        px: 6,
        py: 4,
        borderRadius: 16,
        fontSize: 5,
      },
    },
  })}

  text-align: center;
  cursor: pointer;
  display: block;
  align-items: center;

  ${space};
  ${fontSize};
  ${color};
`;
