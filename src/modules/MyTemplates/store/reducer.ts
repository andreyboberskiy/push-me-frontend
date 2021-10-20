import update from 'immutability-helper';

import { ITemplate } from 'types/templates';

import {
  MY_TEMPLATES_SET_LIST,
  MY_TEMPLATES_TOGGLE_LOADING,
  MY_TEMPLATES_UPDATE_LIST,
  MY_TEMPLATES_UPDATE_SEARCH_PARAMS,
} from 'modules/MyTemplates/store/constants';

export interface ISearchParams {
  sort: 'newest' | 'oldest';
  offset: 0;
  query: '';
}

export interface IMyTemplatesReducerState {
  searchParams: ISearchParams;
  templatesList: ITemplate[];
  loading: boolean;
}

const initialState: IMyTemplatesReducerState = {
  templatesList: [],
  loading: false,
  searchParams: {
    sort: 'newest',
    offset: 0,
    query: '',
  },
};

const myTemplatesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MY_TEMPLATES_SET_LIST: {
      return update(state, {
        templatesList: (list) => update(list, { $set: payload.list }),
      });
    }
    case MY_TEMPLATES_UPDATE_LIST: {
      return update(state, {
        templatesList: (list) => update(list, { $push: payload.list }),
      });
    }
    case MY_TEMPLATES_TOGGLE_LOADING: {
      return update(state, { $merge: { loading: payload.loading } });
    }
    case MY_TEMPLATES_UPDATE_SEARCH_PARAMS: {
      return update(state, {
        searchParams: (params) =>
          update(params, { $merge: payload.searchParams }),
      });
    }
    default: {
      return state;
    }
  }
};

export default myTemplatesReducer;
