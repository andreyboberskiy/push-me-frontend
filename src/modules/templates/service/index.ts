import { AuthedAxiosInstance } from 'libs/axios/instances';

const apiPrefix = '/api';

interface IParseByTextQueryResponse {
  sameTexts: string[];
  selector: string;
  parent: string | null;
}

const templateService = {
  getList(payload) {
    return AuthedAxiosInstance.post(
      `${apiPrefix}/parse-templates/list`,
      payload
    ).then(({ data }) => data.list);
  },

  parseByTextQuery(payload: {
    url: string;
    selectorQuery: string;
    approvedQueries: string[];
  }): Promise<IParseByTextQueryResponse> {
    return AuthedAxiosInstance.post(
      `${apiPrefix}/parse/by-text-query`,
      payload
    ).then(({ data }) => data);
  },
};

export default templateService;
