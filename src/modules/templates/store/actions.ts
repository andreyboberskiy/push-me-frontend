import { templateServices } from 'modules/templates/services';
import map from 'lodash/map';
import { batch } from 'react-redux';

import {
  TEMPLATE_ADD_ITEM,
  TEMPLATE_SET_LIST_MAP,
  TEMPLATE_SET_USER_TEMPLATES_IDS,
} from 'modules/templates/store/constants';

import transformArrayToMap from 'utils/transformArrayToMap';

import { ITemplate } from 'types/templates';

export const setTemplateListMapAction = (list: ITemplate[]) => {
  const transformedMap = transformArrayToMap(list, 'id');

  return {
    type: TEMPLATE_SET_LIST_MAP,
    payload: { list, map: transformedMap },
  };
};

export const addTemplateAction = (template: ITemplate) => ({
  type: TEMPLATE_ADD_ITEM,
  payload: { template },
});

export const loadTemplateAction = (id: number) => async (dispatch) => {
  const { template } = await templateServices.getTemplate(id);
  dispatch(addTemplateAction(template));
};

export const setUserTemplatesIdsAction = (idList: number[] = []) => ({
  type: TEMPLATE_SET_USER_TEMPLATES_IDS,
  payload: { idList },
});

export const getMyTemplateListAction = () => async (dispatch) => {
  try {
    const { list } = await templateServices.getMyTemplatesList({
      sort: 'newest',
      offset: 0,
    });

    console.log({ list });
    const ids = map(list, (item) => item.id);

    batch(() => {
      dispatch(setUserTemplatesIdsAction(ids));
      dispatch(setTemplateListMapAction(list));
    });
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
  }
};
