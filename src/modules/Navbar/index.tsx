import React, { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routesByName from 'configs/routesByName';
import { IReducerStore } from 'store/reducers';

import {
  AuthButton,
  LeftMenu,
  Logo,
  NavBar,
  ContentContainer,
  Container,
  RightAuthMenu,
} from './styles';

const UnAuthedNavbar = () => {
  const history = useHistory();
  const authed = useSelector<IReducerStore, boolean>(
    (state) => state.auth.authed
  );

  const handlePressLogin = useCallback(() => {
    history.push(routesByName.sign, { activeTab: 'login' });
  }, [history]);
  const handlePressLogo = useCallback(() => {
    history.push(routesByName.homePage);
  }, [history]);
  const handlePressSignUp = useCallback(() => {
    history.push(routesByName.sign, { activeTab: 'signUp' });
  }, [history]);
  const handlePressTemplates = useCallback(() => {
    history.push(routesByName.templatesPage);
  }, [history]);
  const handlePressCreateTemplate = useCallback(() => {
    history.push(routesByName.createTemplate);
  }, [history]);

  const renderUnAuthedPart = () => (
    <LeftMenu>
      <AuthButton onClick={handlePressLogin}>Login</AuthButton>
      <AuthButton onClick={handlePressSignUp} ml={4}>
        Sign Up
      </AuthButton>
    </LeftMenu>
  );

  const renderAuthedPart = () => (
    <RightAuthMenu>
      <AuthButton onClick={handlePressTemplates}>Templates</AuthButton>
      <AuthButton onClick={handlePressCreateTemplate}>
        Create Template
      </AuthButton>
      <AuthButton onClick={() => {}}>Profile</AuthButton>
    </RightAuthMenu>
  );

  return (
    <Container showShadow>
      <ContentContainer>
        <NavBar as="nav">
          <Logo onClick={handlePressLogo} />
          {authed ? renderAuthedPart() : renderUnAuthedPart()}
        </NavBar>
      </ContentContainer>
    </Container>
  );
};

export default memo(UnAuthedNavbar);
