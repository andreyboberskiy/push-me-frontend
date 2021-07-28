import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProfilePage from 'modules/ProfilePage';
import routesByName from 'configs/routesByName';
import AuthedRoutes from 'hocs/AuthedRoutes';
import HomePage from 'modules/HomePage';
import UnAuthedNavbar from 'modules/UnAuthedNavbar';

const user = null;

function App() {
  return (
    <>
      {user ? null : <UnAuthedNavbar />}
      <Switch>
        <Route path={routesByName.homePage} component={HomePage} />
        <AuthedRoutes>
          <Route path={routesByName.profilePage} component={ProfilePage} />
        </AuthedRoutes>
      </Switch>
    </>
  );
}

export default App;
