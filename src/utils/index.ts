import { SORT_TYPE } from '../types';

export const sortByName = (arr:any = [], sortName: string) => {
     return arr.sort((a: any, b: any) => {
        if (sortName === SORT_TYPE.INC) {
            return (a.value > b.value) ? 1 : -1;
        }
        else if (sortName === SORT_TYPE.DEC) {
            return (a.value < b.value) ? 1 : -1;
        }
        return 0;
    });
}

