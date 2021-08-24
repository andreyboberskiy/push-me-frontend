import axios from 'axios';

import appConfig from 'configs/appConfig';
import authService from 'modules/auth/service';

export const BaseAxiosInstance = axios.create({
  baseURL: appConfig.apiUrl,
});

export const AuthedAxiosInstance = axios.create({ baseURL: appConfig.apiUrl });

// eslint-disable-next-line no-unused-vars
export const setUpAuthInterceptorsAction = () => (dispatch, getState) => {
  AuthedAxiosInstance.interceptors.request.use(
    async (config) => {
      // const { currentUser } = getState();
      // const url = prepareUrl(config.url, currentUser);
      const headers: { Authorization: string } = { Authorization: null };
      const authToken = authService.getAccessToken();
      if (authToken) {
        headers.Authorization = authToken;
      }

      if (!headers.Authorization) {
        delete headers.Authorization;
      }

      return {
        ...config,
        headers,
        // url,
      };
    },
    (error) => Promise.reject(error)
  );

  // AuthedAxiosInstance.interceptors.response.use(
  //   (response) => response,
  //   async (error) => {
  //     if (error.response && error.response.status === 401) {
  //       try {
  //         // await authService.refreshToken();
  //         return AuthedAxiosInstance.request({
  //           ...error.config,
  //           headers: {
  //             ...(error.config.headers || {}),
  //             Authorization: authService.getAccessToken(),
  //           },
  //         });
  //       } catch (e) {
  //         /*
  //          * In this case upper scope will receive message from first request eg. `Unauthenticated.`
  //          */
  //       }
  //
  //       dispatch({ type: AUTH_LOGOUT });
  //       authService.clearAuthTokens();
  //     }
  //
  //     throw error;
  //   }
  // );
};
