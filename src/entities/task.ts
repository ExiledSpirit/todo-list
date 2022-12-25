import { v4 } from 'uuid';

export interface TaskProps {
  doneAt?: Date | null,
  description: string
}

export class Task {
  private _id: string;
  private props: TaskProps;

  constructor(props: TaskProps, id?: string) {
    this._id = id ?? v4();
    this.props = {
      ...props,
    };
  }

  public get id() {
    return this._id;
  }

  public check() {
    this.props.doneAt = new Date();
  }

  public uncheck() {
    this.props.doneAt = null;
  }

  public get readAt(): Date | null | undefined {
    return this.props.doneAt;
  }

  get description(): string {
    return this.description;
  }

  set description(description: string) {
    this.description = description;
  }
}
