import { AuthedAxiosInstance } from 'libs/axios/instances';
import { apiPrefix } from 'services';

import { ITemplate } from 'types/templates';
import { ISearchParams } from 'modules/MyTemplates/store/reducer';

interface IGetMyTemplatesListResponse {
  list: ITemplate[];
}

const templatesPrefix = '/templates';

export const templateServices = {
  getTemplate: (id: number): Promise<{ template: ITemplate }> => {
    return AuthedAxiosInstance.get(`${apiPrefix}${templatesPrefix}/${id}`);
  },
  getMyTemplatesList(
    payload: ISearchParams
  ): Promise<IGetMyTemplatesListResponse> {
    return AuthedAxiosInstance.post(
      `${apiPrefix}${templatesPrefix}/my-list`,
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
