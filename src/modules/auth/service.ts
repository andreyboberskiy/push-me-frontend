import { BaseAxiosInstance } from 'libs/axios/instances';

import localStorageKeys from 'constants/localStorageKeys';

const apiPrefix = '/api';

// types
type TLogInResponse = {
  accessToken: string;
  refreshToken: string;
  user: any;
};
type IRefreshTokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export const setRefreshToken = (token) => {
  localStorage.setItem(localStorageKeys.refreshToken, token);
};

export const setAccessToken = (token) => {
  localStorage.setItem(localStorageKeys.accessToken, `Bearer ${token}`);
};

const authService = {
  logIn(payload): Promise<TLogInResponse> {
    return BaseAxiosInstance.post(`${apiPrefix}/auth/sign-in`, payload);
  },
  signUp(payload) {
    return BaseAxiosInstance.post(`${apiPrefix}/auth/sign-up`, payload);
  },
  getAccessToken() {
    const token = localStorage.getItem(localStorageKeys.accessToken);
    return token;
  },

  clearAuthTokens() {
    localStorage.removeItem(localStorageKeys.accessToken);
    localStorage.removeItem(localStorageKeys.refreshToken);
  },

  async refreshToken() {
    const refreshTokenKey = this.getRefreshToken();

    const res: IRefreshTokenResponse = await BaseAxiosInstance.post(
      `${apiPrefix}/auth/refresh-token`,
      {
        refreshToken: refreshTokenKey,
      }
    );

    setRefreshToken(res.refreshToken);
    setAccessToken(res.accessToken);
  },

  getRefreshToken() {
    const token = localStorage.getItem(localStorageKeys.refreshToken);
    return token;
  },

  getUser() {
    return new Promise((res) => {
      setTimeout(() => {
        res({ email: 'kek@gmail.com', id: '23232' });
      }, 200);
    });
  },

  setAccessToken,
  setRefreshToken,
};

export default authService;
