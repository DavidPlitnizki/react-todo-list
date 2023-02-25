import { ITask, SORT_TYPE } from '../types';

export const sortByName = (arr:ITask[] = [], sortName: string) => {
     return arr.sort((a: ITask, b: ITask) => {
        if (sortName === SORT_TYPE.INC) {
            return (a.value > b.value) ? 1 : -1;
        }
        else if (sortName === SORT_TYPE.DEC) {
            return (a.value < b.value) ? 1 : -1;
        }
        return 0;
    });
}

