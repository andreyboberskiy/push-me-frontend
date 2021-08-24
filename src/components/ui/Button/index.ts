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
interface IButtonProps extends SpaceProps, FontSizeProps, ColorProps {}

export const Button = styled('button').attrs<IButtonProps>({})`
  ${variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'lightBlue',
        borderRadius: 12,
      },
      default: {
        color: 'white',
        bg: 'transparent',
      },
    },
  })}

  ${variant({
    prop: 'size',
    variants: {
      xs: {
        px: 3,
        py: 2,
      },
      sm: {
        fontSize: 4,
        px: 4,
        py: 3,
      },
    },
  })}

  text-align: center;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
  font-family: 'T600';
  display: block;
  align-self: center;
  ${space} ${fontSize} ${color};
`;
