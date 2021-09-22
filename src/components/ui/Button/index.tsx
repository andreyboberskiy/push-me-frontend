import React, { MouseEventHandler } from 'react';
import { ColorProps, FontSizeProps, SpaceProps } from 'styled-system';

import { ButtonUI } from './styles';

// Interface
interface IButtonProps extends SpaceProps, FontSizeProps, ColorProps {
  disabled?: boolean;
  variant?:
    | 'lightFilled'
    | 'lightOutlined'
    | 'darkFilled'
    | 'darkOutlined'
    | 'errorFilled'
    | 'errorOutlined'
    | 'green';
  size?: 'xs' | 'sm' | 'lg';
  onClick?: MouseEventHandler | undefined;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  variant = 'lightFilled',
  size = 'sm',
  disabled,
  ...props
}) => {
  return (
    <ButtonUI
      variant={disabled ? 'disabled' : variant}
      disabled={disabled}
      size={size}
      {...props}
    >
      {children}
    </ButtonUI>
  );
};
