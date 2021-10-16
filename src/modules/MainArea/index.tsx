import Header from 'modules/Header';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'modules/Dashboard';

import routesByName from 'constants/routesByName';

import { Container, BottomContainer } from './styles';

const MainArea = () => {
  return (
    <Container>
      <Header />
      <BottomContainer>
        <Switch>
          <Route path={routesByName.dashboard.route} component={Dashboard} />
        </Switch>
      </BottomContainer>
    </Container>
  );
};

export default MainArea;
