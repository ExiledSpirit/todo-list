import { v4 as randomUUID } from 'uuid';
import { Replace } from '../helpers/Replace';

export interface TaskProps {
  doneAt?: Date | null,
  createdAt: Date,
  description: string
}

export class Task {
  private _id: string;
  private props: TaskProps;

  constructor(props: Replace<TaskProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
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

  public get doneAt(): Date | null | undefined {
    return this.props.doneAt;
  }

  get description(): string {
    return this.props.description;
  }

  set description(description: string) {
    this.description = description;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
