import React, { useCallback, useState, useEffect } from 'react';
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
import { Badge, colors } from '@mui/material';
import ContainerSpaceBetween from '../ui/ContainerSpaceBetween';
import TextField from '@mui/material/TextField';
import { SORT_TYPE } from '../types';
import useDebounce from '../hooks/useDebounce';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';


const ListWrapper = styled('div')`
    display: block;
    width: 100%;
`;

const FlexWrapper = styled('div')`
    display: flex;
`;

const FlexCenter = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
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
const StyledSearchIcon = MUIStyled(ManageSearchIcon)({
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
    onHandleSort: (sort: string) => void,
    amountfiltered: number,
    setIsShowByName: (name: string) => void
}

const ListItems:React.FC<IProps> = ({list = [], onHideCompleted, isHideCompleted, onHandleSort, amountfiltered, setIsShowByName}) => {
    const [sortString, setSortString] = useState<string>('');
    const debouncedValue = useDebounce<string>(sortString, 500)
    const onHideCompletedTasks = useCallback(() => {
        onHideCompleted();
    }, [onHideCompleted]);

  useEffect(() => {
    setIsShowByName(sortString);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

    const onSortInc = useCallback(() => {
        onHandleSort(SORT_TYPE.INC);
    }, [onHandleSort]);
    const onSortDec = useCallback(() => {
        onHandleSort(SORT_TYPE.DEC);
    }, [onHandleSort]);

    const onChangeHandle = (e: any) => {
        const text = e.target.value;
        setSortString(text);
    }
  
    return (
        <ListWrapper>
            <ShadowedContainerCenter>
                <ContainerSpaceBetween>
                    <FormGroup>
                        <Badge badgeContent={amountfiltered} color="primary">
                            <FormControlLabel control={<Checkbox checked={isHideCompleted} onChange={onHideCompletedTasks} />} label="Hide completed" />    
                        </Badge>
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
          <FlexCenter>
            <TextField onChange={onChangeHandle} variant='standard' label='Search' />
            <StyledSearchIcon />
          </FlexCenter>
          <Demo>
            <List dense>
              {list}
            </List>
          </Demo>
        </ListWrapper>
    )
}

export default ListItems;