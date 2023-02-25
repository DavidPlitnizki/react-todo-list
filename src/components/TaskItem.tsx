import React, {useCallback, useState} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import ContainerSpaceBetween from '../ui/ContainerSpaceBetween';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import styled from 'styled-components';
import { styled as MUIStyled } from '@mui/system';
import { colors } from '../styles/colors';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useAppDispatch } from '../store/hooks';
import { updateTaskText } from '../features/task/taskSlice';
import { ITaskModifiedText } from '../types';
import useMediaQuery from '../hooks/useMediaQuery';


const TextLign = styled('span')`
    text-decoration: line-through;
`;

const StyledDeleteIcon = MUIStyled(DeleteIcon)({
    transition: 'color .15s linear',
    ":hover": {
        color: colors.danger
    }
});

const StyledSwitchIcon = MUIStyled(Switch)({
    '& .MuiSwitch-switchBase': {
        transition: 'color .15s linear',
        '&:hover': {
            color: colors.orange
        },
      },
});

const StyledEditIcon = MUIStyled(EditIcon)({
    transition: 'color .15s linear',
    ":hover": {
        color: colors.green
    }
});

const StyledCheckIcon = MUIStyled(CheckIcon)({
    transition: 'color .15s linear',
    ":hover": {
        color: colors.green,
        cursor: 'pointer'
    }
});

const StyledClearIcon = MUIStyled(ClearIcon)({
    transition: 'color .15s linear',
    ":hover": {
        color: colors.danger,
        cursor: 'pointer'
    }
});

const StyledListItem = MUIStyled(ListItem)({
    transition: 'all .15s linear',
    height: '80px'
});


interface IProps {
    id: string,
    value: string,
    completed: boolean,
    onDeletehandle: (id: string) => void,
    onToggleTaskHandle: (id: string) => void
}

const TaskItem:React.FC<IProps> = ({id, value, completed, onDeletehandle, onToggleTaskHandle}) => {
    const dispatch = useAppDispatch();
    const showButtons = useMediaQuery('(min-width: 850px)')
    const [openEdit, setOpenEdit] = useState<boolean>(false);
    const [taskTitle, setTaskTitle] = useState<string>(value);

    const onDelete = () => {
        onDeletehandle(id)
    }

    const onToggle = () => {
        onToggleTaskHandle(id);
    }

    const onToggleEdit = useCallback(() => {
        setOpenEdit(!openEdit);
    }, [openEdit])

    const acceptUpdate = useCallback(() => {
        const modifiedTask: ITaskModifiedText = {
            id,
            value: taskTitle
        }
        dispatch(updateTaskText(modifiedTask));
        onToggleEdit();
    }, [dispatch, id, onToggleEdit, taskTitle]);

    const cancelUpdate = useCallback(() => {
        setTaskTitle(value);
        onToggleEdit();
    }, [onToggleEdit, value]);

    const onChangeText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e?.target?.value;
        setTaskTitle(newValue);
    }, []);

    const secondaryTxt = (completed) ? 'finished' : 'in progress';
    const taskTxt = (completed) ? <TextLign>{taskTitle}</TextLign> : taskTitle;

    return (
    <>
        <StyledListItem
                secondaryAction={
                    (showButtons || !openEdit) && (
                    <ContainerSpaceBetween>
                        <FormGroup>
                            <FormControlLabel control={<StyledSwitchIcon defaultChecked={completed} onClick={onToggle} disabled={openEdit}  />} label='Completed' />
                        </FormGroup>
                        <IconButton edge="end" aria-label="edit" onClick={onToggleEdit} disabled={openEdit}>
                            <StyledEditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={onDelete} disabled={openEdit}>
                            <StyledDeleteIcon />
                        </IconButton>
                    </ContainerSpaceBetween>
                )}>
            <ListItemAvatar>
            <Avatar>
                {(completed) ? <AssignmentTurnedInIcon /> : <AssignmentIcon />}
            </Avatar>
            </ListItemAvatar>
            {(openEdit) ? (
                <ContainerSpaceBetween>
                    <TextField variant="standard" value={taskTitle} onChange={onChangeText} autoFocus />
                    <StyledClearIcon onClick={cancelUpdate} />
                    <StyledCheckIcon onClick={acceptUpdate} />
                </ContainerSpaceBetween>
            ) : (
            <ListItemText
                primary={<Typography variant='h6'>{taskTxt}</Typography>}
                secondary={<Typography variant='subtitle2'>{`status: ${secondaryTxt}`}</Typography>} />
            )}
        </StyledListItem>
    </>
    )
}

export default TaskItem;
