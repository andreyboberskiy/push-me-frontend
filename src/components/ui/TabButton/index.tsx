import React, { ReactElement } from 'react';

import { Container, IconContainer, SpriteIcon, Label } from './styles';

// Interface
interface IPropsTabButton {
  active?: boolean;
  name: string;
  children: string | ReactElement;
  hideIcon?: boolean;
  customChildren?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const TabButton: React.FC<IPropsTabButton> = ({
  active,
  name,
  children,
  hideIcon,
  customChildren,
  size = 'md',
  ...props
}) => {
  return (
    <Container active={active} size={size} {...props}>
      {!hideIcon && (
        <IconContainer active={active} size={size}>
          <SpriteIcon active={active} name={name} size={size} />
        </IconContainer>
      )}
      {customChildren ? children : <Label active={active}>{children}</Label>}
    </Container>
  );
};
