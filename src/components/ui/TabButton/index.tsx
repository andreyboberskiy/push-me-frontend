import React, { ReactElement } from 'react';

import { Container, IconContainer, SpriteIcon, Label } from './styles';

// Interface
interface IPropsTabButton {
  active?: boolean;
  name: string;
  children: string | ReactElement;
}

export const TabButton: React.FC<IPropsTabButton> = ({
  active,
  name,
  children,
  ...props
}) => {
  return (
    <Container active={active} {...props}>
      <IconContainer active={active}>
        <SpriteIcon active={active} name={name} />
      </IconContainer>
      <Label active={active}>{children}</Label>
    </Container>
  );
};
