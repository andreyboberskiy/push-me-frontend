import { APP_INITIAL_LOADED } from './constants';
import authService from '../../auth/service';
import { setUserAction } from '../../auth/store/actions';

export const initialLoadAction = () => async (dispatch) => {
  try {
    const accessToken = authService.getAccessToken();

    const user = await authService.getUser(); // TODO: implement get user func on BE

    if (accessToken) {
      dispatch(setUserAction(user));
    }

    dispatch({ type: APP_INITIAL_LOADED });
  } catch (e) {
    console.log(e);
  }
};
