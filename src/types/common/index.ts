export interface IAction {
  type: string;
  payload?: any;
}

export interface IUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  dateCreated: string;
  telegramChatId: number;
  image: string | null;
}
