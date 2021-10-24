import update from 'immutability-helper';

import { TEMPLATES_LIBRARY_UPDATE } from 'store/libraries/constants';

import { ITemplate } from 'types/templates';

export interface ILibrariesReducerState {
  templates: { [id: string]: ITemplate };
}

const initialState: ILibrariesReducerState = {
  templates: {},
};

const librariesReducer = (
  state: ILibrariesReducerState = initialState,
  { type, payload }
) => {
  switch (type) {
    case TEMPLATES_LIBRARY_UPDATE: {
      return update(state, {
        templates: (prev) => update(prev, { $merge: payload }),
      });
    }
    default: {
      return state;
    }
  }
};

export default librariesReducer;
