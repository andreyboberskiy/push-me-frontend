import authService from 'modules/auth/service';
import { setUserAction } from 'modules/auth/store/actions';
import { setUpAuthInterceptorsAction } from 'libs/axios/instances';

import { APP_INITIAL_LOADED } from './constants';

export const initialLoadAction = () => async (dispatch) => {
  try {
    const accessToken = authService.getAccessToken();

    console.log({ accessToken });

    dispatch(setUpAuthInterceptorsAction());

    const user = await authService.getUser(); // TODO: implement get user func on BE

    if (accessToken) {
      dispatch(setUserAction(user));
    }

    dispatch({ type: APP_INITIAL_LOADED });
  } catch (e) {
    console.log(e);
  }
};
