import { AuthedAxiosInstance } from 'libs/axios/instances';

const apiPrefix = '/api';

const templateService = {
  getList(payload) {
    return AuthedAxiosInstance.post(
      `${apiPrefix}/parse-templates/list`,
      payload
    );
  },
};

export default templateService;
