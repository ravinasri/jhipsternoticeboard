import { Moment } from 'moment';

export interface IAuthor {
  id?: number;
  firstname?: string;
  lastname?: string;
  creationdate?: Moment;
}

export class Author implements IAuthor {
  constructor(public id?: number, public firstname?: string, public lastname?: string, public creationdate?: Moment) {}
}
