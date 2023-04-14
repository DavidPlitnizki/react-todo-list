import React, {useCallback, useMemo, useState} from 'react';
import { Box } from '@mui/system';
import { styled as MUIStyled } from '@mui/system';

import List from '../components/List';
import TaskItem from '../components/TaskItem';
import { removeTask, toggleTask } from '../features/task/taskSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { colors } from '../styles/colors';
import { ITask, ITaskList } from '../types';
import {sortByName} from '../utils';


const StyledBox = MUIStyled(Box)({
    backgroundColor: colors.whiteBg,
    width: 'clamp(400px, 70%, 800px)',
    margin: '0 auto',
    display: 'block'
})

const Main:React.FC = () => {
    const [isHideCompleted, setIsHideCompleted] = useState<boolean>(false);
    const [isShowByName, setIsShowByName] = useState<string>('');
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
    const taskFilteredByName = useMemo(() => taskFiltered.filter((item: ITask) => (isShowByName.length) ? item.value.includes(isShowByName) : item), [isShowByName, taskFiltered]);
    const amountfiltered = useMemo(() => Math.abs(taskList.length - taskFiltered.length), [taskFiltered.length, taskList.length]);
    const sortedTasks = sortByName(taskFilteredByName, sortName);
    
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
            <List list={tasks}
                onHideCompleted={onHideCompletedTasks}
                isHideCompleted={isHideCompleted}
                onHandleSort={setSortName}
                amountfiltered={amountfiltered}
                setIsShowByName={setIsShowByName} />
        </StyledBox>
    )
}

export default Main;