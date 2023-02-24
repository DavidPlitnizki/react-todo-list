export interface ITask {
    id: string,
    value: string;
    status: 'new' | 'done';
}

export interface ITaskList {
  taskList: ITask[]
}