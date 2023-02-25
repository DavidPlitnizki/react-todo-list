export interface ITask {
    id: string,
    value: string;
    completed: boolean;
}

export interface ITaskList {
  taskList: ITask[]
}

export type ITaskModifiedText = Omit<ITask, "completed">

export const SORT_TYPE = {
INC: 'inc',
DEC: 'dec'
}
