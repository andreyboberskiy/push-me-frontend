import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/theme';

import AuthedRoutes from 'hocs/AuthedRoutes';
import { ReactComponent as Sprite } from 'assets/sprite.svg';
import routesByName from 'constants/routesByName';
import { initialLoadAction } from 'modules/app/store/actions';

import Toast from 'libs/toast';

import HomePage from 'modules/HomePage';
import SignUpPage from 'modules/auth/SignUpPage';
import SignInPage from 'modules/auth/SignInPage';
import Sidebar from 'modules/Sidebar';

import { AuthContentContainer } from 'components/common';

import { RootReducer } from 'store/reducers';
import MainArea from 'modules/MainArea';

function App() {
  const dispatch = useDispatch();

  const appLoaded = useSelector<RootReducer, boolean>(
    (state) => state.app.loaded
  );

  useEffect(() => {
    dispatch(initialLoadAction());
    // eslint-disable-next-line
  }, []);

  return appLoaded ? (
    <>
      <Switch>
        <Route path={routesByName.homePage.route} component={HomePage} />
        <Route path={routesByName.signUp} component={SignUpPage} />
        <Route path={routesByName.signIn} component={SignInPage} />
        <AuthedRoutes>
          <AuthContentContainer>
            <Sidebar />
            <MainArea />
          </AuthContentContainer>
        </AuthedRoutes>
      </Switch>
      <Toast />
    </>
  ) : (
    <div>Loading...</div>
  );
}

const AppWrapper = (props) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Sprite />
      <App {...props} />
    </ThemeProvider>
  );
};

export default AppWrapper;
