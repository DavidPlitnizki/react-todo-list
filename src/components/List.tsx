import React, { useCallback } from 'react';
import ContainerCenter from '../ui/ContainerCenter';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const ListWrapper = styled('div')`
    display: 'block';
`;

const ShadowedContainerCenter = styled(ContainerCenter)`
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgb(0 0 0 / 0%);
    border-radius: 10px;
`;
  
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

interface IProps {
    list: React.ReactNode[],
    onHideCompleted: () => void,
    isHideCompleted: boolean
}

const ListItems:React.FC<IProps> = ({list = [], onHideCompleted, isHideCompleted}) => {
    

    const onHideCompletedTasks = useCallback(() => {
        onHideCompleted();
    }, [onHideCompleted]);
  
    if (!list.length) {
        return (
            <ShadowedContainerCenter>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
                        No Tasks
                </Typography>
            </ShadowedContainerCenter>
        )
    }
    return (
        <ListWrapper>
            <ShadowedContainerCenter>
                <FormGroup>
                  <FormControlLabel control={<Checkbox checked={isHideCompleted} onChange={onHideCompletedTasks} />} label="Hide completed" />
                </FormGroup>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
                    Tasks List
                </Typography>
          </ShadowedContainerCenter>
          <Demo>
            <List dense>
              {list}
            </List>
          </Demo>
        </ListWrapper>
    )
}

export default ListItems;