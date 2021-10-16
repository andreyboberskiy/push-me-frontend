import React from 'react';

import { Container, RedCircle, NotifyText, LogoText } from './styles';

export const Logo = () => {
  return (
    <Container>
      <RedCircle>
        <NotifyText>1</NotifyText>
      </RedCircle>
      <LogoText>Push me</LogoText>
    </Container>
  );
};
