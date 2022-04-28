import authReducer, { IAuthReducerState } from 'modules/auth/store/reducer';
import appReducer, { IAppReducerState } from 'modules/app/store/reducer';
import myTemplatesReducer, {
  IMyTemplatesReducerState,
} from 'modules/MyTemplates/store/reducer';
import librariesReducer, {
  ILibrariesReducerState,
} from 'store/libraries/reducer';

export interface RootReducer {
  auth: IAuthReducerState;
  app: IAppReducerState;
  myTemplates: IMyTemplatesReducerState;
  libraries: ILibrariesReducerState;
}

const reducers = {
  auth: authReducer,
  app: appReducer,
  myTemplates: myTemplatesReducer,
  libraries: librariesReducer,
};

export default reducers;
