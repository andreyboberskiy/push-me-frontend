import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Sprite } from 'assets/sprite.svg';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/theme';

import routesByName from 'constants/routesByName';

import AuthedRoutes from 'hocs/AuthedRoutes';
import { initialLoadAction } from 'modules/app/store/actions';

import Toast from 'libs/toast';

import ProfilePage from 'modules/profile/ProfilePage';
import HomePage from 'modules/HomePage';
import MyTemplatesPage from 'modules/templates/MyTemplatesPage';
import CreateTemplatePage from 'modules/createTemplate/CreateTemplatePage';
import TemplatePage from 'modules/templates/TemplatePage';
import SignUpPage from 'modules/auth/SignUpPage';

import UIComponentsPage from 'components/UIComponentsPage';

import { IReducerStore } from 'store/reducers';

function App() {
  const dispatch = useDispatch();

  const appLoaded = useSelector<IReducerStore, boolean>(
    (state) => state.app.loaded
  );

  useEffect(() => {
    dispatch(initialLoadAction());

    // eslint-disable-next-line
  }, []);

  return appLoaded ? (
    <>
      {
        // <UnAuthedNavbar />
      }
      <Switch>
        <Route path="/UI" component={UIComponentsPage} />

        <Route path={routesByName.homePage} component={HomePage} />
        <Route path={routesByName.signUp} component={SignUpPage} />
        <AuthedRoutes>
          <Route path={routesByName.profilePage} component={ProfilePage} />
          <Route
            path={routesByName.myTemplatesPage}
            component={MyTemplatesPage}
          />
          <Route
            path={routesByName.createTemplate}
            component={CreateTemplatePage}
          />
          <Route path={routesByName.template()} component={TemplatePage} />
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
