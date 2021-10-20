import errorCatcher from 'utils/errorCatcher';

import { templateServices } from '../services';

import {
  MY_TEMPLATES_SET_LIST,
  MY_TEMPLATES_TOGGLE_LOADING,
  MY_TEMPLATES_UPDATE_LIST,
  MY_TEMPLATES_UPDATE_SEARCH_PARAMS,
} from './constants';

// Interface
import { ITemplate } from 'types/templates';
import { ISearchParams } from './reducer';
import { errorToast } from 'libs/toast/functions';

export const setTemplateListAction = (list: ITemplate[]) => {
  return {
    type: MY_TEMPLATES_SET_LIST,
    payload: { list },
  };
};
export const updateTemplateListAction = (list: ITemplate[]) => {
  return {
    type: MY_TEMPLATES_UPDATE_LIST,
    payload: { list },
  };
};

export const toggleLoadingAction = (isLoading: boolean) => ({
  type: MY_TEMPLATES_TOGGLE_LOADING,
  payload: { loading: isLoading },
});

export const updateSearchParams = (newParams) => ({
  type: MY_TEMPLATES_UPDATE_SEARCH_PARAMS,
  payload: { searchParams: newParams },
});

export const getMyTemplateListAction =
  (searchParams: ISearchParams, resetList: boolean) => async (dispatch) => {
    dispatch(toggleLoadingAction(true));

    await errorCatcher(
      async () => {
        const { list } = await templateServices.getMyTemplatesList(
          searchParams
        );
        if (resetList) {
          dispatch(setTemplateListAction(list));
        } else {
          dispatch(updateTemplateListAction(list));
        }
      },
      (e) => {
        dispatch(toggleLoadingAction(false));
        errorToast(e.generalError);
      }
    );
    dispatch(toggleLoadingAction(false));
  };
