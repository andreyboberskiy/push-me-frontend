import axios from 'axios';

import appConfig from 'configs/appConfig';

export const BaseAxiosInstance = axios.create({
  baseURL: appConfig.apiUrl,
});
