import authService from 'modules/auth/service';
import { setUserAction } from 'modules/auth/store/actions';
import { setUpAuthInterceptorsAction } from 'libs/axios/instances';

import { APP_INITIAL_LOADED } from './constants';

export const initialLoadAction = () => async (dispatch) => {
  const accessToken = authService.getAccessToken();

  dispatch(setUpAuthInterceptorsAction());

  if (accessToken) {
    try {
      const { user } = await authService.getUser();
      dispatch(setUserAction(user));
    } catch (e) {
      console.log(e);
    }
  }

  dispatch({ type: APP_INITIAL_LOADED });
};
