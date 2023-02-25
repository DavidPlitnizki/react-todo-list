import React from 'react';
import { removeTask, toggleTask } from '../features/task/taskSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ITask, ITaskList } from '../types';
import List from './List';
import TaskItem from './TaskItem';
import { Box } from '@mui/system';
import { styled as MUIStyled } from '@mui/system';
import { colors } from '../styles/colors';


const StyledBox = MUIStyled(Box)({
    backgroundColor: colors.whiteBg,
    width: 'clamp(400px, 70%, 800px)',
    margin: '0 auto',
    display: 'block'
})

const Main:React.FC = () => {
    const dispatch = useAppDispatch();
    const {taskList}: ITaskList = useAppSelector(state => state.tasks);
    
    const onDelete = (id: string) => {
        dispatch((removeTask(id)))
    }

    const onToggleTask = (id: string) => {
        dispatch((toggleTask(id)))
    }

    const tasks = taskList.map((item: ITask) => <TaskItem
                                                    key={item.id}
                                                    id={item.id}
                                                    value={item.value}
                                                    completed={item.completed}
                                                    onDeletehandle={onDelete}
                                                    onToggleTaskHandle={onToggleTask} />);




    return (
        <StyledBox className='main-component'>
            <List list={tasks} />
        </StyledBox>
    )
}

export default Main;