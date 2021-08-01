import authReducer, { IAuthReducerState } from 'modules/auth/store/reducer';
import appReducer, { IAppReducerState } from 'modules/app/store/reducer';

export interface IReducerStore {
  auth: IAuthReducerState;
  app: IAppReducerState;
}

const reducers = {
  auth: authReducer,
  app: appReducer,
};

export default reducers;
