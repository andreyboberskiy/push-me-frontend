import { RootReducer } from 'store/reducers';
import { createSelector } from 'reselect';

export const getLibraries = (state: RootReducer) => state.libraries;

export const getTemplatesLibrary = createSelector(
  getLibraries,
  (allLibraries) => allLibraries.templates
);
