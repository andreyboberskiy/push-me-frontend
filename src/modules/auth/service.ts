import { BaseAxiosInstance } from 'libs/axios/instances';

import localStorageKeys from 'constants/localStorageKeys';

const apiPrefix = '/api';

// types
type TLogInResponse = {
  accessToken: string;
  refreshToken: string;
  user: any;
};
type TRefreshTokenResponse = {
  accessToken: string;
  refreshToken: string;
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
    const token = localStorage.getItem(localStorageKeys.accessToken);
    return JSON.parse(token);
  },

  setAccessToken(token) {
    localStorage.setItem(
      localStorageKeys.accessToken,
      JSON.stringify(`Bearer ${token}`)
    );
  },

  clearAuthTokens() {
    localStorage.removeItem(localStorageKeys.accessToken);
    localStorage.removeItem(localStorageKeys.refreshToken);
  },

  async refreshToken() {
    const refreshTokenKey = this.getRefreshToken();

    const res = await BaseAxiosInstance.post<TRefreshTokenResponse>(
      `${apiPrefix}/auth/refresh-token`,
      {
        refreshToken: refreshTokenKey,
      }
    );

    this.setRefreshToken(res.data.refreshToken);
    this.setAccessToken(res.data.accessToken);
  },

  getRefreshToken() {
    const token = localStorage.getItem(localStorageKeys.refreshToken);
    return JSON.parse(token);
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
