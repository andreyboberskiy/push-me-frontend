import { AuthedAxiosInstance, BaseAxiosInstance } from 'libs/axios/instances';

import localStorageKeys from 'constants/localStorageKeys';
import { IUser } from 'types/common';

const apiPrefix = '/api';
const userPrefix = '/user';

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

export const clearAuthTokens = () => {
  localStorage.removeItem(localStorageKeys.accessToken);
  localStorage.removeItem(localStorageKeys.refreshToken);
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

  getUser(): Promise<{ user: IUser }> {
    return AuthedAxiosInstance.get(`${apiPrefix}/${userPrefix}`);
  },

  addTelegramId(id): Promise<{ user: IUser }> {
    return AuthedAxiosInstance.put(
      `${apiPrefix}/${userPrefix}/add-telegram-id`,
      {
        id,
      }
    );
  },

  logout() {
    clearAuthTokens();
  },
  clearAuthTokens,
  setAccessToken,
  setRefreshToken,
};

export default authService;
