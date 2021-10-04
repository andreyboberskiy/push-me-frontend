import { IReducerStore } from 'store/reducers';
import { createSelector } from 'reselect';

export const getTemplatesListSelector = (state: IReducerStore) =>
  state.templates.templatesList;
export const getTemplatesMapSelector = (state: IReducerStore) =>
  state.templates.templatesMap;
