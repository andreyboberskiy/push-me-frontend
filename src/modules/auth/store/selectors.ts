import { IReducerStore } from 'store/reducers';

export const getUserSelector = (state: IReducerStore) => state.auth.user;
