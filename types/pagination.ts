import { Entity } from "./entity";

export interface IPaginationProps {
  page: number;
  limit: number;
  nextPage: number;
  prevPage: number;
  currentRows?: number;
  currentRowsCount?: number;
  totalRows: number;
  totalPages: number;
}

export class Pagination extends Entity<IPaginationProps> {
  unmarshall(): IPaginationProps {
    return { ...this._props };
  }
  static create(props: IPaginationProps) {
    return new Pagination(props);
  }
}
