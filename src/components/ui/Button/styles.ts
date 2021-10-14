import styled from 'styled-components';
import { color, shadow, space, variant } from 'styled-system';
import { getThemeColor } from 'styles/theme';

export const ButtonUI = styled('button').attrs<any>((props) => ({
  fontFamily: 0,
}))<any>`
  ${variant({
    variants: {
      primary: {
        borderRadius: 15,
        bg: 'teal300',
        borderColor: 'transparent',
        borderWidth: 0,
        color: 'white',
      },
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
      md: {
        py: 4,
        borderRadius: 15,
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
  border-style: solid;

  transition: background-color 0.2s linear;

  ${(props) => props.fullWidth && 'width: 100%;'}

  ${(props) =>
    props.variant === 'primary' &&
    `&:hover{
    background: ${getThemeColor(props, 'teal200')};
  }`}
 
  ${space};
  ${color};
  ${shadow}
`;
