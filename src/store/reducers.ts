import authReducer, { IAuthReducerState } from 'modules/auth/store/reducer';
import appReducer, { IAppReducerState } from 'modules/app/store/reducer';
import myTemplatesReducer, {
  IMyTemplatesReducerState,
} from 'modules/MyTemplates/store/reducer';

export interface RootReducer {
  auth: IAuthReducerState;
  app: IAppReducerState;
  myTemplates: IMyTemplatesReducerState;
}

const reducers = {
  auth: authReducer,
  app: appReducer,
  myTemplates: myTemplatesReducer,
};

export default reducers;
