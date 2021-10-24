import { AuthedAxiosInstance } from 'libs/axios/instances';

import { apiPrefix } from 'services';

import { ITemplate } from 'types/templates';

const TemplateDetailsService = {
  getTemplateById: (id: number | string): Promise<ITemplate> => {
    return AuthedAxiosInstance.get(`${apiPrefix}/templates/${id}`);
  },
};

export default TemplateDetailsService;
