import { RootReducer } from 'store/reducers';

export const getUserSelector = (state: RootReducer) => state.auth.user;
