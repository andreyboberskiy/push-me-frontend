import React, { memo } from 'react';

import {
  AuthButton,
  LeftMenu,
  Logo,
  NavBar,
  ContentContainer,
  Container,
} from './styles';

const UnAuthedNavbar = () => (
  <Container>
    <ContentContainer>
      <NavBar as="nav">
        <Logo />
        <LeftMenu>
          <AuthButton>Login</AuthButton>
          <AuthButton ml={4}>Sign Up</AuthButton>
        </LeftMenu>
      </NavBar>
    </ContentContainer>
  </Container>
);

export default memo(UnAuthedNavbar);
