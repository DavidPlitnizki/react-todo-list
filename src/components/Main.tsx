import React, {useCallback, useMemo, useState} from 'react';
import { removeTask, toggleTask } from '../features/task/taskSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ITask, ITaskList } from '../types';
import List from './List';
import TaskItem from './TaskItem';
import { Box } from '@mui/system';
import { styled as MUIStyled } from '@mui/system';
import { colors } from '../styles/colors';
import {sortByName} from '../utils';


const StyledBox = MUIStyled(Box)({
    backgroundColor: colors.whiteBg,
    width: 'clamp(400px, 70%, 800px)',
    margin: '0 auto',
    display: 'block'
})

const Main:React.FC = () => {
    const [isHideCompleted, setIsHideCompleted] = useState<boolean>(false);
    const [sortName, setSortName] = useState<string>('');
    const dispatch = useAppDispatch();
    const {taskList}: ITaskList = useAppSelector(state => state.tasks);
    
    const onDelete = useCallback((id: string) => {
        dispatch((removeTask(id)))
    }, [dispatch])

    const onToggleTask = useCallback((id: string) => {
        dispatch((toggleTask(id)))
    }, [dispatch])

    const onHideCompletedTasks = useCallback(() => {
        setIsHideCompleted(!isHideCompleted);
    }, [isHideCompleted])


    const taskFiltered = useMemo(() => taskList.filter((item: ITask) => (isHideCompleted) ? item.completed !== isHideCompleted : item), [isHideCompleted, taskList]);
    const sortedTasks = sortByName(taskFiltered, sortName);
    const tasks = useMemo(() => sortedTasks.map((item: ITask) => <TaskItem
                                                                key={item.id}
                                                                id={item.id}
                                                                value={item.value}
                                                                completed={item.completed}
                                                                onDeletehandle={onDelete}
                                                                onToggleTaskHandle={onToggleTask} />),
                                                                // eslint-disable-next-line react-hooks/exhaustive-deps
                                                                 [onDelete, onToggleTask, sortedTasks, sortName])




    return (
        <StyledBox className='main-component'>
            <List list={tasks} onHideCompleted={onHideCompletedTasks} isHideCompleted={isHideCompleted} onHandleSort={setSortName}  />
        </StyledBox>
    )
}

export default Main;