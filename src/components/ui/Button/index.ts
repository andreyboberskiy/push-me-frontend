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

export const Button = styled.button.attrs<IButtonProps>({
  px: 3,
  py: 2,
})`
  ${variant({
    variants: {
      default: {
        color: 'white',
        bg: 'transparent',
        fontFamily: 'T600',
      },
    },
  })}

  text-align: center;
  cursor: pointer;
  ${space}
  ${fontSize}
  ${color}
`;
