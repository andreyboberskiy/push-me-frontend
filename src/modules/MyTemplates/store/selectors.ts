import { RootReducer } from 'store/reducers';

export const myTemplateList = (state: RootReducer) =>
  state.myTemplates.templatesList;

export const myTemplatesLoading = (state: RootReducer) =>
  state.myTemplates.loading;

export const myTemplatesSearchParams = (state: RootReducer) =>
  state.myTemplates.searchParams;
