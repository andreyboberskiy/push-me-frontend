import styled from 'styled-components';
import { color, fontSize, shadow, space, variant } from 'styled-system';

export const ButtonUI = styled('button').attrs<any>({
  fontFamily: 'Ubuntu',
  boxShadow: 'button1',
})<any>`
  ${variant({
    variants: {
      lightFilled: {
        bg: 'lightBlue',
        borderColor: 'transparent',
        color: 'white',
      },
      lightOutlined: {
        bg: 'transparent',
        borderColor: 'lightBlue',
        color: 'lightBlue',
      },
      darkFilled: {
        bg: 'darkBlue',
        borderColor: 'transparent',
        color: 'white',
      },
      darkOutlined: {
        bg: 'transparent',
        borderColor: 'lightBlue',
        color: 'lightBlue',
      },
      errorFilled: {
        bg: 'red',
        borderColor: 'transparent',
        color: 'white',
      },
      errorOutlined: {
        bg: 'transparent',
        borderColor: 'red',
        color: 'red',
      },
      green: {
        bg: 'green',
        borderColor: 'darkGreen',
        color: 'white',
      },
      disabled: {
        bg: 'grey',
        borderColor: 'grey4',
        color: 'grey5',
        opacity: '0.3',
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
  ${shadow}
`;
