import { AUTH_LOGOUT, AUTH_SET_USER } from './constants';
import { IAction, IUser } from 'types/common';

const initialState = {
  authed: false,
  user: null,
};

// types
export interface IAuthReducerState {
  authed: boolean;
  user: IUser | null;
}

export type TAuthReducer = (
  state: IAuthReducerState,
  action: IAction
) => IAuthReducerState;

const authReducer: TAuthReducer = (
  state = { ...initialState },
  { type, payload }
) => {
  switch (type) {
    case AUTH_SET_USER: {
      return { ...state, authed: true, user: payload.user };
    }
    case AUTH_LOGOUT: {
      return { ...state, authed: false };
    }
    default:
      return state;
  }
};

export default authReducer;
