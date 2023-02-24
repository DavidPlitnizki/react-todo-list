export interface ITask {
    id: string,
    value: string;
    completed: boolean;
}

export interface ITaskList {
  taskList: ITask[]
}