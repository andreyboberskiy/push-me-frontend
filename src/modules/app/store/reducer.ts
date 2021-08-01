import { IAction } from 'types/common';

import { APP_INITIAL_LOADED } from './constants';

const initialState = {
  loaded: false,
};

export interface IAppReducerState {
  loaded: boolean;
}

type TAppReducer = (
  state: IAppReducerState,
  action: IAction
) => IAppReducerState;

const appReducer: TAppReducer = (
  state = { ...initialState },
  { type, payload }
) => {
  switch (type) {
    case APP_INITIAL_LOADED: {
      return { ...state, loaded: true };
    }
    default:
      return state;
  }
};

export default appReducer;
