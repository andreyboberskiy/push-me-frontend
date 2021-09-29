import { IParseTimeValue } from 'components/ui/ParseTimePicker';

export interface ISelectorsData {
  parent: string;
  selectors: { value: string; title: string }[];
}

export interface ISelectorsDataEmpty {
  parent: null;
  selectors: null;
}
export interface ITemplate {
  id: number;
  title: string;
  enabled: boolean;
  parseTime: IParseTimeValue;
  url: string;
  dateCreated: string;
  selectorsData: ISelectorsData;
}
