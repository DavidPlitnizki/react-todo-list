import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store/store';
import { ITask, ITaskList, ITaskModifiedText } from '../../types';

const initialState = {
    taskList: []
} as ITaskList;

export const taskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.taskList = [...state.taskList, action.payload];

      
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.taskList = state.taskList.filter((item: ITask) => item.id !== action.payload);
      
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      state.taskList = state.taskList.map((item: ITask) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return item;
      })
    },
    updateTaskText: (state, action: PayloadAction<ITaskModifiedText>) => {
      state.taskList = state.taskList.map((item: ITask) => {
        if (item.id === action.payload.id) {
          item.value = action.payload.value
        }
        return item;
      })
    }
  },
});

export const { addTask, removeTask, toggleTask, updateTaskText } = taskSlice.actions;
export const selectCount = (state: RootState) => state.tasks.taskList;

export default taskSlice.reducer;
