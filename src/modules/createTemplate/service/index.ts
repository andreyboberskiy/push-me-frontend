import { AuthedAxiosInstance } from 'libs/axios/instances';
import { IParseTimeValue } from 'components/ui/ParseTimePicker';

const apiPrefix = '/api';

export interface IParseByTextQueryResponse {
  sameInfo: { text: string; selector: string; id: number }[];
  selector: string;
  parent: string | null;
}
export interface ICreatePayload {
  title: string;
  url: string;
  parseTime: IParseTimeValue;
  selectorsData: {
    parent: string;
    selectors: {
      title: string;
      selector: string;
      excludedSelectors: string[];
    }[];
  };
}

const createTemplateService = {
  create(payload: ICreatePayload) {
    return AuthedAxiosInstance.post(
      `${apiPrefix}/parse-templates/create`,
      payload
    );
  },

  parseByTextQuery(payload: {
    url: string;
    selectorQuery: string;
    approvedQueries: string[];
  }): Promise<IParseByTextQueryResponse> {
    return AuthedAxiosInstance.post(
      `${apiPrefix}/parse/by-text-query`,
      payload
    );
  },
};

export default createTemplateService;