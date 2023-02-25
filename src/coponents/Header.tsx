import React from 'react';
import ContainerCenter from '../ui/ContainerCenter';
// import ButtonComponent from '../ui/ButtonComponent';
import { Box } from '@mui/system';
import {colors} from '../styles/colors';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import { styled as MUIStyled } from '@mui/system';

const FabWrapper = styled('div')`
    position: absolute;
    right: 0;
    transform: translate(-50%, 70%);
    top: 0;
`;

const OwnFab = MUIStyled(Fab)({
    '&:hover': {
        cursor: 'pointer',
        background: colors.orange,
      }
})


interface IProps {
    onOpenTaskModal: (active: boolean) => void;
}

const Header:React.FC<IProps> = ({onOpenTaskModal}) => {

    const onHandleClick = () => {
        onOpenTaskModal(true)
    }

    return (
    <Box className='header-component'>
        <ContainerCenter bgColor={colors.bg}>
            <h1>TO DO LIST</h1>
            <FabWrapper>
                <OwnFab color='primary' aria-label="add" onClick={onHandleClick}>
                    <AddIcon />
                </OwnFab>
            </FabWrapper>
        </ContainerCenter>
    </Box>
    )
}

export default Header;