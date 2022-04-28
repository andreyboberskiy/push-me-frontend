import axios from 'axios';

import authService from 'modules/auth/service';
import { AUTH_LOGOUT } from 'modules/auth/store/constants';

import extendAxiosInstance from 'libs/axios/extendAxiosInstance';

import appConfig from 'constants/appConfig';
import RequestError from 'errors/RequestError';

export const BaseAxiosInstance = axios.create({
  baseURL: appConfig.apiUrl,
});

BaseAxiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    throw new RequestError(error);
  }
);

export const AuthedAxiosInstance = extendAxiosInstance(BaseAxiosInstance);

// eslint-disable-next-line no-unused-vars
export const setUpAuthInterceptorsAction = () => (dispatch) => {
  AuthedAxiosInstance.interceptors.request.use(
    async (config) => {
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

  AuthedAxiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401 && !error.response?.logout) {
        try {
          await authService.refreshToken();

          return AuthedAxiosInstance.request({
            ...error.config,
            data: error.config.data ? JSON.parse(error.config.data) : undefined,
            headers: {
              ...(error.config.headers || {}),
              Authorization: authService.getAccessToken(),
            },
          });
        } catch (e) {
          // eslint-disable-next-line
          console.log('auth', e);
          /*
           * In this case upper scope will receive message from first request eg. `Unauthenticated.`
           */
        }

        dispatch({ type: AUTH_LOGOUT });
        authService.clearAuthTokens();
      }

      throw error;
    }
  );
};
