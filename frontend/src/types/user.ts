import { Account } from './bank';

export interface User {
  id: number;
  name: string;
  account?: Partial<Account>;
}
