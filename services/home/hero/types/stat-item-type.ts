import { Entity } from "@/types/entity";

export interface IStateItem {
  id: string;
  value: string;
  label: string;
}

export interface IStateItemProps {
  data: IStateItem[];
}

export class StateItem extends Entity<IStateItemProps> {
  unmarshall(): IStateItemProps {
    return { ...this._props };
  }
  static create(props: IStateItemProps): StateItem {
    return new StateItem(props);
  }
}
