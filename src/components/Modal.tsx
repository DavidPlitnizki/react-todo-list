import React, {useCallback, useRef, useState} from 'react';
import uuid from 'react-uuid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/system';
import { styled as MUIStyled } from '@mui/system';

import { addTask } from '../features/task/taskSlice';
import { useAppDispatch } from '../store/hooks';
import { colors } from '../styles/colors';
import { ITask } from '../types';
import ContainerSpaceBetween from '../ui/ContainerSpaceBetween';
import SnackbarAler from '../ui/SnackbarAlert';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


  const StyledCanceBtn = MUIStyled(Button)({
    marginRight: '1rem',
    color: colors.danger
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
  const [isOpenSnackbar, setIsOpenSnackbar] = useState<boolean>(false);
  const [isMultiAdd, setIsMultiAdd] = useState<boolean>(false);
  const [errorMsg, setErrorMSg] = useState<string>('');
    const inputTaskRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const onCreateTask = useCallback(() => {
        if (inputTaskRef.current?.value.length) {
            const newTask:ITask = {
                value: inputTaskRef.current?.value,
                id: uuid(),
                completed: false
            }
            dispatch(addTask(newTask));
            clearInput();
            if (!isMultiAdd) {
              oncloseModal(false);  
            }
        } else {
          setIsOpenSnackbar(true);
          setErrorMSg('CAN NOT BE EMPTY!!!');
        }
    }, [dispatch, isMultiAdd, oncloseModal])

    const clearInput = () => {
        if (inputTaskRef.current) {
            inputTaskRef.current.value = "";
        }
    }

    const onCancel = useCallback(() => {
      if (inputTaskRef.current) {
        inputTaskRef.current.value = "";
      }
      oncloseModal(false);
    }, [oncloseModal])

    const onSetIsMultiAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsMultiAdd(!isMultiAdd);
    }

    return (
    <>
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-create-task">
          <BoxContent>
              <DialogTitle>{"Create New Task"}</DialogTitle>
              <DialogContent>
                  <TextFieldLg label="Task title"
                              type='text'
                              margin='dense'
                              variant='standard'
                              inputRef={inputTaskRef} />
              </DialogContent>
              <DialogActions>
                <ContainerSpaceBetween>
                  <FormGroup>
                      <FormControlLabel control={<Checkbox checked={isMultiAdd} onChange={onSetIsMultiAddTask} />} label="Multi task" />
                    </FormGroup>
                    <div>
                      <StyledCanceBtn onClick={onCancel}>Close</StyledCanceBtn>
                      <Button onClick={onCreateTask} variant="contained">Add</Button>
                    </div>
                  </ContainerSpaceBetween>
                </DialogActions>
          </BoxContent>
        </Dialog>
        <SnackbarAler isOpen={isOpenSnackbar} handleClose={setIsOpenSnackbar} type='error' text={errorMsg} />
      </>
    )
 }

 export default TaskModal;
