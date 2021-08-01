import { AUTH_LOGOUT, AUTH_SET_USER } from './constants';

export const setUserAction = (userData) => ({
  type: AUTH_SET_USER,
  payload: userData,
});

export const logOutAction = () => ({
  type: AUTH_LOGOUT,
});
