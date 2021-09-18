import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import routesByName from 'constants/routesByName';

import AuthedRoutes from 'hocs/AuthedRoutes';
import { IReducerStore } from 'store/reducers';
import { initialLoadAction } from 'modules/app/store/actions';

import ProfilePage from 'modules/ProfilePage';
import HomePage from 'modules/HomePage';
import UnAuthedNavbar from 'modules/Navbar';
import SignPage from 'modules/auth/SignPage';
import MyTemplatesPage from 'modules/myTemplates/MyTemplatesPage';
import CreateTemplatePage from 'modules/createTemplate/CreateTemplatePage';

import UIComponentsPage from 'components/UIComponentsPage';

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
      <UnAuthedNavbar />
      <Switch>
        <Route path="/UI" component={UIComponentsPage} />

        <Route path={routesByName.homePage} component={HomePage} />
        <Route path={routesByName.sign} component={SignPage} />
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
        </AuthedRoutes>
      </Switch>
    </>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
