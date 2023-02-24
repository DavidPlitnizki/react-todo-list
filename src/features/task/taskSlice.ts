import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { ITask, ITaskList } from '../../types';

const initialState = {
    taskList: []
} as ITaskList;

export const taskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.taskList = [...state.taskList, action.payload]
      
    },
    removeTask: (state) => {
      
    },
    updateTask: (state) => {

    }
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.tasks.taskList;

export default taskSlice.reducer;
