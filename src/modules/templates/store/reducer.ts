import update from 'immutability-helper';

import {
  TEMPLATE_ADD_ITEM,
  TEMPLATE_SET_LIST_MAP,
  TEMPLATE_SET_USER_TEMPLATES_IDS,
  TEMPLATE_TOGGLE_LOADING,
} from 'modules/templates/store/constants';

import { ITemplate } from 'types/templates';

export interface ITemplatesReducerState {
  templatesList: ITemplate[];
  templatesMap: { [key: number]: ITemplate };
  userTemplatesIds: number[];
  loading: boolean;
}

const initialState: ITemplatesReducerState = {
  templatesList: [],
  templatesMap: {},
  loading: false,
  userTemplatesIds: [],
};

const templatesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TEMPLATE_TOGGLE_LOADING: {
      return update(state, { $merge: { loading: payload.loading } });
    }
    case TEMPLATE_SET_LIST_MAP: {
      const { list, map } = payload;
      return update(state, {
        $merge: {
          templatesList: list,
          templatesMap: map,
          loading: false,
        },
      });
    }
    case TEMPLATE_ADD_ITEM: {
      const { template } = payload;

      return update(state, {
        $merge: {
          templatesList: update(state.templatesList, { $push: [template] }),
          templatesMap: update(state.templatesMap, {
            $merge: { [template.id]: template },
          }),
        },
      });
    }
    case TEMPLATE_SET_USER_TEMPLATES_IDS: {
      const { idList } = payload;

      return update(state, {
        $merge: {
          userTemplatesIds: update(state.userTemplatesIds, { $set: idList }),
        },
      });
    }
    default: {
      return state;
    }
  }
};

export default templatesReducer;
