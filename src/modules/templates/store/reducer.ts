import { IAction } from 'types/common';
import { ITemplate } from 'types/templates';

import { TEMPLATES_SET_LIST } from './constants';

const initialState = {
  list: [],
};

// types

export interface ITemplatesReducerState {
  list: ITemplate[];
}

export type TTemplatesReducer = (
  state: ITemplatesReducerState,
  action: IAction
) => ITemplatesReducerState;

const templatesReducer: TTemplatesReducer = (
  state = { ...initialState },
  { type, payload }
) => {
  switch (type) {
    case TEMPLATES_SET_LIST: {
      return { ...state, list: payload };
    }

    default:
      return state;
  }
};

export default templatesReducer;
