import React from 'react';
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


interface IProps {
    id: string,
    value: string,
    completed: boolean,
    onDeletehandle: (id: string) => void,
    onUpdatehandle: (id: string) => void
}

const TaskItem:React.FC<IProps> = ({id, value, completed, onDeletehandle, onUpdatehandle}) => {

    const onDelete = () => {
        onDeletehandle(id)
    }

    const onUpdate = () => {
        onUpdatehandle(id);
    }

    const secondaryTxt = (completed) ? 'finished' : 'in progress';
    const taskTitle = (completed) ? <TextLign>{value}</TextLign> : value;

    return (
    <ListItem
            secondaryAction={
            <ContainerSpaceBetween>
                <FormGroup>
                    <FormControlLabel control={<StyledSwitchIcon defaultChecked={completed} onClick={onUpdate} />} label='Completed' />
                </FormGroup>
                <IconButton edge="end" aria-label="delete">
                    <StyledDeleteIcon onClick={onDelete} />
                </IconButton>
            </ContainerSpaceBetween>
            }
        >
        <ListItemAvatar>
          <Avatar>
            {(completed) ? <AssignmentTurnedInIcon /> : <AssignmentIcon />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<Typography variant='h6'>{taskTitle}</Typography>}
          secondary={<Typography variant='subtitle2'>{`status: ${secondaryTxt}`}</Typography>}
        />
    </ListItem>
    )
}

export default TaskItem;
