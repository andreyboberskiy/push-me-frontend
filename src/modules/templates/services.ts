import { AuthedAxiosInstance } from 'libs/axios/instances';

import { ITemplate } from 'types/templates';

const apiPrefix = '/api';
const templatesPrefix = '/templates';

interface IGetMyTemplatesListResponse {
  list: ITemplate[];
}

export const templateServices = {
  getTemplate: (id: number): Promise<{ template: ITemplate }> => {
    return AuthedAxiosInstance.get(`${apiPrefix}${templatesPrefix}/${id}`);
  },
  getMyTemplatesList(payload): Promise<IGetMyTemplatesListResponse> {
    return AuthedAxiosInstance.post(
      `${apiPrefix}${templatesPrefix}/list`,
      payload
    );
  },
  subscribe: (id: number) => {
    return AuthedAxiosInstance.post(
      `${apiPrefix}${templatesPrefix}/subscribe`,
      {
        id,
      }
    );
  },
  unsubscribe: (id: number) => {
    return AuthedAxiosInstance.post(
      `${apiPrefix}${templatesPrefix}/unsubscribe`,
      {
        id,
      }
    );
  },
};
