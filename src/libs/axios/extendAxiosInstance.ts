import axios, { AxiosInterceptorManager } from 'axios';

export default function extendAxiosInstance(baseInstance, newConfig?: any) {
  const newInstance = axios.create({
    ...baseInstance.defaults,
    ...newConfig,
  });

  baseInstance.interceptors.request.handlers.forEach(
    (interceptor: AxiosInterceptorManager<any>) => {
      newInstance.interceptors.request.use(...Object.values(interceptor));
    }
  );

  baseInstance.interceptors.response.handlers.forEach(
    (interceptor: AxiosInterceptorManager<any>) => {
      newInstance.interceptors.response.use(...Object.values(interceptor));
    }
  );

  return newInstance;
}
