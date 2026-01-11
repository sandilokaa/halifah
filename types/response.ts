import { Entity } from "./entity";
import type { IPaginationProps } from "./pagination";

export interface IResponseProps<T> {
  data: T;
  message?: string;
  pagination?: IPaginationProps;
}

export class Response<T> extends Entity<IResponseProps<T>> {
  static create<T>(props: IResponseProps<T>): Response<T> {
    return new Response(props);
  }

  unmarshall(): IResponseProps<T> {
    const { data, message, pagination } = this._props;

    return {
      data,
      ...(message && { message }),
      ...(pagination && { pagination }),
    };
  }
}
