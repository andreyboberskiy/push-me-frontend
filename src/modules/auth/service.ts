import { BaseAxiosInstance } from 'libs/axios/instances';

import localStorageKeys from 'configs/localStorageKeys';

const apiPrefix = '/api';

// types
type TLogInResponse = {
  accessToken: string;
  refreshToken: string;
  user: any;
};

const authService = {
  logIn(payload): Promise<TLogInResponse> {
    return BaseAxiosInstance.post(`${apiPrefix}/auth/sign-in`, payload).then(
      ({ data }) => data
    );
  },
  signUp(payload) {
    return BaseAxiosInstance.post(`${apiPrefix}/auth/sign-up`, payload);
  },
  getAccessToken() {
    return localStorage.getItem(localStorageKeys.accessToken);
  },

  setAccessToken(token) {
    localStorage.setItem(localStorageKeys.accessToken, JSON.stringify(token));
  },

  getRefreshToken() {
    return localStorage.getItem(localStorageKeys.refreshToken);
  },

  setRefreshToken(token) {
    localStorage.setItem(localStorageKeys.refreshToken, JSON.stringify(token));
  },

  getUser() {
    return new Promise((res) => {
      setTimeout(() => {
        res({ email: 'kek@gmail.com', id: '23232' });
      }, 200);
    });
  },
};

export default authService;
