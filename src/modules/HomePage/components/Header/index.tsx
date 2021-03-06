import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

// import routesByName from '../../constants/routesByName';
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
  const history = useHistory();
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
