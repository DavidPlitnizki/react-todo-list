import React, { useCallback } from 'react';
import ContainerCenter from '../ui/ContainerCenter';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { styled as MUIStyled } from '@mui/system';
import { colors } from '@mui/material';
import ContainerSpaceBetween from '../ui/ContainerSpaceBetween';
import { SORT_TYPE } from '../types';


const ListWrapper = styled('div')`
    display: block;
    width: 100%;
`;

const FlexWrapper = styled('div')`
    display: flex;
`;

const StyledArrowUp = MUIStyled(ArrowUpwardIcon)({
    ":hover": {
        color: colors.green,
        cursor: 'pointer'
    }
});

const StyledArrowDown = MUIStyled(ArrowDownwardIcon)({
    ":hover": {
        color: colors.green,
        cursor: 'pointer'
    }
});

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
    isHideCompleted: boolean,
    onHandleSort: (sort: string) => void
}

const ListItems:React.FC<IProps> = ({list = [], onHideCompleted, isHideCompleted, onHandleSort}) => {
    

    const onHideCompletedTasks = useCallback(() => {
        onHideCompleted();
    }, [onHideCompleted]);

    const onSortInc = useCallback(() => {
        onHandleSort(SORT_TYPE.INC);
    }, [onHandleSort]);
    const onSortDec = useCallback(() => {
        onHandleSort(SORT_TYPE.DEC);
    }, [onHandleSort]);
  
    return (
        <ListWrapper>
            <ShadowedContainerCenter>
                <ContainerSpaceBetween>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={isHideCompleted} onChange={onHideCompletedTasks} />} label="Hide completed" />
                    </FormGroup>

                    <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
                        List
                    </Typography>

                    <FlexWrapper>
                        <StyledArrowUp onClick={onSortInc} />
                        <StyledArrowDown onClick={onSortDec} />
                        By Name
                    </FlexWrapper>
                </ContainerSpaceBetween>
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