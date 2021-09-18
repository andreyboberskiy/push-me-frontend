import { AuthedAxiosInstance } from 'libs/axios/instances';

const apiPrefix = '/api';

interface IParseByTextQueryResponse {
  sameTexts: string[];
  selector: string;
  parent: string | null;
}

const templateService = {
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
