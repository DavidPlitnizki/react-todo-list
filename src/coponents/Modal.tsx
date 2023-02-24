import React, {useCallback, useRef} from 'react';
import Modal from 'styled-react-modal'
import ButtonComponent from '../ui/ButtonComponent';
import FlexContainer from '../ui/FlexContainer';
import ContainerSpaceBetween from '../ui/ContainerSpaceBetween';
import ContainerCenter from '../ui/ContainerCenter';
import { useAppDispatch } from '../store/hooks';
import { addTask } from '../features/task/taskSlice';
import { ITask } from '../types';
import uuid from 'react-uuid';


const StyledModal = Modal.styled`
    width: 20rem;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    border-radius: 20px;
    border: 1px solid #373635;
    display: flex;
    flex-direction: column;
  `;

  interface IProps {
    isOpen: boolean,
    oncloseModal: (active: boolean) => void
  }
  
 const TaskModal:React.FC<IProps> = ({isOpen, oncloseModal}) => {
    const inputTaskRef = useRef<HTMLInputElement | null | any>(null);
    const dispatch = useAppDispatch();

    const onCreateTask = () => {
        if (inputTaskRef.current?.value) {
            const newTask:ITask = {
                value: inputTaskRef.current?.value,
                id: uuid(),
                completed: false
            }
            dispatch(addTask(newTask));
            clearInput();
        }
        oncloseModal(false);
    }

    const clearInput = () => {
        if (inputTaskRef.current) {
            inputTaskRef.current.value = "";
        }
    }

    const onCancel = useCallback(() => {
        oncloseModal(false);
    }, [oncloseModal])

    return (
    <div>
        <StyledModal
          isOpen={isOpen}>

        <FlexContainer>
            <ContainerCenter>
                <h2>New Task</h2>
            </ContainerCenter>
        </FlexContainer>

        <FlexContainer>
            <ContainerCenter>
                <input type="text" name="task" id="task" placeholder='Create Task' ref={inputTaskRef} />
            </ContainerCenter>
        </FlexContainer>
          

        <FlexContainer>
            <ContainerSpaceBetween>
                <ButtonComponent onHandle={onCancel} text="Cancel" bgColor='danger' />
                <ButtonComponent onHandle={onCreateTask} text="New Task" />
            </ContainerSpaceBetween>
        </FlexContainer>

        </StyledModal>
      </div>
    )
 }

 export default TaskModal;
