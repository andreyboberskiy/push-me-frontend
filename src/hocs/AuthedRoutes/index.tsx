import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import routesByName from '../../configs/routesByName';

const user = null;

// Interface
interface IAuthedRoutesProps {
  children: ReactElement;
}

const AuthedRoutes: React.FC<IAuthedRoutesProps> = ({ children }) => {
  const history = useHistory();
  if (!user) {
    history.replace(routesByName.homePage);
  }
  return children;
};

export default AuthedRoutes;
