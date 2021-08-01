import { AUTH_LOGOUT, AUTH_SET_USER } from './constants';
import { IAction } from '../../../types/common';

const initialState = {
  authed: false,
  user: {
    id: null,
    email: null,
    telegramChatId: null,
  },
};

// types
export interface IAuthReducerState {
  authed: boolean;
  user: {
    id: string | null;
    email: string | null;
    telegramChatId: string | null;
  };
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
      return { ...state, authed: true, ...payload };
    }
    case AUTH_LOGOUT: {
      return { authed: false };
    }
    default:
      return state;
  }
};

export default authReducer;
