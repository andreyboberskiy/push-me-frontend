import Header from 'modules/Header';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'modules/Dashboard';
import MyTemplates from 'modules/MyTemplates';
import TemplateDetails from 'modules/TemplateDetails';

import routesByName from 'constants/routesByName';

import { Container, BottomContainer } from './styles';

const MainArea = () => {
  return (
    <Container>
      <Header />
      <BottomContainer>
        <Switch>
          <Route
            exact
            path={routesByName.dashboard.route}
            component={Dashboard}
          />
          <Route
            exact
            path={routesByName.myTemplates.route}
            component={MyTemplates}
          />{' '}
          <Route
            path={routesByName.templateDetails.route()}
            component={TemplateDetails}
          />
        </Switch>
      </BottomContainer>
    </Container>
  );
};

export default MainArea;
