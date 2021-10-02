import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IReducerStore } from 'store/reducers';
import routesByName from 'constants/routesByName';

import _useEffect from 'hooks/_useEffect';

// Interface
interface IAuthedRoutesProps {
  children: any;
}

const AuthedRoutes: React.FC<IAuthedRoutesProps> = ({ children }) => {
  const history = useHistory();

  const authed = useSelector<IReducerStore, boolean>(
    (state) => state.auth.authed
  );

  _useEffect(() => {
    if (!authed) {
      history.replace(routesByName.homePage);
    }
  }, [authed]);

  return children;
};

export default AuthedRoutes;
