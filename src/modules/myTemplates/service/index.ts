import { AuthedAxiosInstance } from 'libs/axios/instances';

// Interface
import { ITemplate } from 'types/templates';

interface IGetListResponse {
  list: ITemplate;
}

const apiPrefix = '/api';

const templateService = {
  getList(payload): Promise<IGetListResponse> {
    return AuthedAxiosInstance.post(
      `${apiPrefix}/parse-templates/list`,
      payload
    );
  },
};

export default templateService;
