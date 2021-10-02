import React, { memo } from 'react';

import {
  Container,
  HeaderContainer,
  HeaderMainArea,
  SecondaryLogo,
  HeaderTitle,
  HeaderText,
  HowItWorksButton,
} from './styles';

// @ts-ignore
const Header = memo(() => {
  return (
    <HeaderContainer as="section">
      <Container>
        <HeaderMainArea>
          <SecondaryLogo />
          <HeaderTitle as="h1">Notify you about everything</HeaderTitle>
          <HeaderText>
            You can create your own notify template or choose from existing ones
          </HeaderText>
        </HeaderMainArea>
        <HowItWorksButton>How it works</HowItWorksButton>
      </Container>
    </HeaderContainer>
  );
});

export { Header };
