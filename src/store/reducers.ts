import authReducer, { IAuthReducerState } from 'modules/auth/store/reducer';
import appReducer, { IAppReducerState } from 'modules/app/store/reducer';
import templatesReducer, {
  ITemplatesReducerState,
} from 'modules/templates/store/reducer';

export interface IReducerStore {
  auth: IAuthReducerState;
  app: IAppReducerState;
  templates: ITemplatesReducerState;
}

const reducers = {
  auth: authReducer,
  app: appReducer,
  templates: templatesReducer,
};

export default reducers;
