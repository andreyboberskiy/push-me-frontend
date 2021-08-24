export interface ISelectorsData {
  parent: string;
  selectors: { value: string; title: string }[];
}

export interface ISelectorsDataEmpty {
  parent: null;
  selectors: null;
}
export interface ITemplate {
  title: string;
  enabled: boolean;
  parseTime: object;
  url: string;
  dateCreated: string;
  selectorsData: ISelectorsData;
}
