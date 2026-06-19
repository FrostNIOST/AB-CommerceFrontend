import { IAccountU } from 'app/shared/model/account-u.model';
import { State } from 'app/shared/model/enumerations/state.model';

export interface ICart {
  id?: string;
  state?: keyof typeof State;
  account?: IAccountU;
}

export const defaultValue: Readonly<ICart> = {};
