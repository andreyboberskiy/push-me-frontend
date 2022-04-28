import authService from 'modules/auth/service';

import { AUTH_LOGOUT, AUTH_SET_USER } from './constants';

export const setUserAction = (userData) => ({
  type: AUTH_SET_USER,
  payload: { user: userData },
});

export const logOutAction = () => {
  authService.logout();

  return { type: AUTH_LOGOUT };
};
