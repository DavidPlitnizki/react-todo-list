export interface ITask {
    id: string,
    value: string;
    status: STATUS_TASK.NEW | STATUS_TASK.DONE;
}

export interface ITaskList {
  taskList: ITask[]
}

export enum STATUS_TASK {
  // eslint-disable-next-line no-unused-vars
  NEW = 'new',
 // eslint-disable-next-line no-unused-vars
 DONE = 'done'
}