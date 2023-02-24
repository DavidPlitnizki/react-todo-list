import React from 'react';
import { removeTask, toggleTask } from '../features/task/taskSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ITask, ITaskList } from '../types';
import List from './List';
import TaskItem from './TaskItem';


const Main:React.FC = () => {
    const dispatch = useAppDispatch();
    const {taskList}: ITaskList = useAppSelector(state => state.tasks);
    
    const onDelete = (id: string) => {
        console.log("main: ", id);
        dispatch((removeTask(id)))
    }

    const onUpdate = (id: string) => {
        dispatch((toggleTask(id)))
    }

    const tasks = taskList.map((item: ITask) => <TaskItem
                                                    key={item.id}
                                                    id={item.id}
                                                    value={item.value}
                                                    completed={item.completed}
                                                    onDeletehandle={onDelete}
                                                    onUpdatehandle={onUpdate} />);




    return (
        <div>
            <List list={tasks} />
        </div>
    )
}

export default Main;