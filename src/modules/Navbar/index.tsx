import React, { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routesByName from 'constants/routesByName';
import { RootReducer } from 'store/reducers';

import {
  AuthButton,
  LeftMenu,
  Logo,
  NavBar,
  UnAuthContentContainer,
  Container,
  RightAuthMenu,
} from './styles';

const UnAuthedNavbar = () => {
  const history = useHistory();
  const authed = useSelector<RootReducer, boolean>(
    (state) => state.auth.authed
  );

  const handlePressLogin = useCallback(() => {
    history.push(routesByName.signIn);
  }, [history]);
  const handlePressLogo = useCallback(() => {
    history.push(routesByName.homePage.route);
  }, [history]);
  const handlePressSignUp = useCallback(() => {
    history.push(routesByName.signUp);
  }, [history]);
  const handlePressTemplates = useCallback(() => {
    history.push(routesByName.myTemplates.route);
  }, [history]);
  const handlePressCreateTemplate = useCallback(() => {}, [history]);
  const handlePushProfile = useCallback(() => {
    history.push(routesByName.profile.route);
  }, [history]);

  const renderUnAuthedPart = () => (
    <LeftMenu>
      <AuthButton onClick={handlePressLogin}>Login</AuthButton>
      <AuthButton onClick={handlePressSignUp}>Sign Up</AuthButton>
    </LeftMenu>
  );

  const renderAuthedPart = () => (
    <RightAuthMenu>
      <AuthButton onClick={handlePressTemplates}>My Templates</AuthButton>
      <AuthButton onClick={handlePressCreateTemplate}>
        Create Template
      </AuthButton>
      <AuthButton onClick={handlePushProfile}>Profile</AuthButton>
    </RightAuthMenu>
  );

  return (
    <Container showShadow>
      <UnAuthContentContainer>
        <NavBar as="nav">
          <Logo onClick={handlePressLogo} />
          {authed ? renderAuthedPart() : renderUnAuthedPart()}
        </NavBar>
      </UnAuthContentContainer>
    </Container>
  );
};

export default memo(UnAuthedNavbar);
