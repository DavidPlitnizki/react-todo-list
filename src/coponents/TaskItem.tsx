import React from 'react';
// import FlexContainer from '../ui/FlexContainer';
import ContainerSpaceBetween from '../ui/ContainerSpaceBetween';
import styled from 'styled-components';
import ButtonComponent from '../ui/ButtonComponent';


const TaskWrapper = styled.div`
    width: 100%;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #4a9ef7;
    display: flex;
    padding: 0 2rem;
    align-items: center;
    border-radius: 2rem;
`;

const Typography = styled('div')<{completed?: boolean}>`
    text-decoration: ${props => props.completed ? 'line-through' : ''};
`;


interface IProps {
    id: string,
    value: string,
    completed: boolean,
    onDeletehandle: (id: string) => void,
    onUpdatehandle: (id: string) => void
}

const TaskItem:React.FC<IProps> = ({id, value, completed, onDeletehandle, onUpdatehandle}) => {
    console.log('value: ', completed)

    const onDelete = () => {
        onDeletehandle(id)
    }

    const onUpdate = () => {
        onUpdatehandle(id);
    }

    return (
        <TaskWrapper>
            <ContainerSpaceBetween>
                <Typography completed={completed}>
                    {value}
                </Typography>
                <div>
                    <input type='checkbox' checked={completed} onChange={onUpdate} />
                    <ButtonComponent text='DELETE' bgColor='danger' onHandle={onDelete} />
                </div>
            </ContainerSpaceBetween>
        </TaskWrapper>
    )
}

export default TaskItem;
