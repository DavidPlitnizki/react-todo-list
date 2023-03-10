import React, { useCallback, useEffect,useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Badge, colors } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled as MUIStyled } from '@mui/system';

import useDebounce from '../hooks/useDebounce';
import { SORT_TYPE } from '../types';
import ContainerCenter from '../ui/ContainerCenter';
import ContainerSpaceBetween from '../ui/ContainerSpaceBetween';


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

const StyledFormGroup = MUIStyled(FormGroup)({
    width: '6rem'
});

const ShadowedContainerCenter = styled(ContainerCenter)`
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgb(0 0 0 / 0%);
    border-radius: 10px;
    margin-top: 10px;
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

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setSortString(text);
    }
  
    return (
        <ListWrapper>
            <ShadowedContainerCenter>
                <ContainerSpaceBetween>
                    <StyledFormGroup>
                        <Badge badgeContent={amountfiltered} color="primary">
                            <FormControlLabel control={<Checkbox checked={isHideCompleted} onChange={onHideCompletedTasks} />} label="Hide completed" />    
                        </Badge>
                    </StyledFormGroup>

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