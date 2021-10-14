import React, { MouseEventHandler } from 'react';
import { ColorProps, FontSizeProps, SpaceProps } from 'styled-system';

import { ButtonUI } from './styles';

// Interface
export interface IButtonProps extends SpaceProps, FontSizeProps, ColorProps {
  type?: string;
  disabled?: boolean;
  variant?:
    | 'lightFilled'
    | 'lightOutlined'
    | 'darkFilled'
    | 'darkOutlined'
    | 'errorFilled'
    | 'errorOutlined'
    | 'green';
  size?: 'xs' | 'sm' | 'lg' | 'md';
  onClick?: MouseEventHandler | undefined;
  fullWidth?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  variant = 'primary',
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
