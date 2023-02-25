import React, {useRef, useCallback} from 'react';
import { useAppDispatch } from '../store/hooks';
import { addTask } from '../features/task/taskSlice';
import { ITask } from '../types';
import uuid from 'react-uuid';
import { Box } from '@mui/system';
import { styled as MUIStyled } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


    
  const BoxContent = MUIStyled(Box)`
    width: 400px;
    heigh: 300px;
  `;

  const TextFieldLg = MUIStyled(TextField)({
    width: '100%'
  });

  interface IProps {
    isOpen: boolean,
    oncloseModal: (active: boolean) => void
  }
  
 const TaskModal:React.FC<IProps> = ({isOpen, oncloseModal}) => {
    const inputTaskRef = useRef<HTMLInputElement | null | any>(null);
    const dispatch = useAppDispatch();

    const onCreateTask = useCallback(() => {
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
    }, [dispatch, oncloseModal])

    const clearInput = () => {
        if (inputTaskRef.current) {
            inputTaskRef.current.value = "";
        }
    }

    const onCancel = useCallback(() => {
        inputTaskRef.current.value = "";
        oncloseModal(false);
    }, [oncloseModal])

    return (
    <>
    <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-create-task"
      >
        <BoxContent style={{width: '400px'}}>
            <DialogTitle>{"Create New Task"}</DialogTitle>
            <DialogContent>
                <TextFieldLg label="Task Description"
                            type='text'
                            margin='dense'
                            variant='standard'
                            inputRef={inputTaskRef} />
            </DialogContent>
            <DialogActions>
            <Button onClick={onCancel}>Cancel</Button>
            <Button onClick={onCreateTask}>Add</Button>
            </DialogActions>
        </BoxContent>
      </Dialog>
        </>
    )
 }

 export default TaskModal;
