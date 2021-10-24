import { AuthedAxiosInstance } from 'libs/axios/instances';

import { apiPrefix } from 'services';

import { ITemplate } from 'types/templates';

const TemplateDetailsService = {
  getTemplateById: (id: number | string): Promise<ITemplate> => {
    return AuthedAxiosInstance.get(`${apiPrefix}/templates/${id}`);
  },
  turnSubscribe: (
    templateId: number | string,
    enabled: boolean
  ): Promise<any> => {
    return AuthedAxiosInstance.put(`${apiPrefix}/templates/turn-parse`, {
      id: templateId,
      enabled,
    });
  },

  updateAvatar: (data) => {
    return AuthedAxiosInstance.post(
      `${apiPrefix}/templates/update-image`,
      data
    );
  },
};

export default TemplateDetailsService;
