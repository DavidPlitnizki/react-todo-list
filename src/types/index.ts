export interface ITask {
    id: string,
    value: string;
    status: 'to-do' | 'in-progress' | 'done';
}

export interface ITaskList {
  taskList: ITask[]
}