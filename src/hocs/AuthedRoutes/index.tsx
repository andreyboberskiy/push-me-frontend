import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import routesByName from 'constants/routesByName';
import { useSelector } from 'react-redux';
import { IReducerStore } from 'store/reducers';

// Interface
interface IAuthedRoutesProps {
  children: any;
}

const AuthedRoutes: React.FC<IAuthedRoutesProps> = ({ children }) => {
  const history = useHistory();

  const authed = useSelector<IReducerStore, boolean>(
    (state) => state.auth.authed
  );

  useEffect(() => {
    if (!authed) {
      history.replace(routesByName.homePage);
    }
  }, [authed]);

  return children;
};

export default AuthedRoutes;
