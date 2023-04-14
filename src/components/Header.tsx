import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Box } from '@mui/system';
import { styled as MUIStyled } from '@mui/system';
import styled from 'styled-components';

import {colors} from '../styles/colors';
import ContainerCenter from '../ui/ContainerCenter';
import ContainerContent from '../ui/ContainerContent';

import UserAuth from './UserAuth';

const FabWrapper = styled('div')`
    justify-self: start;
    transform: translateY(2rem);
`;

const OwnFab = MUIStyled(Fab)({
    '&:hover': {
        cursor: 'pointer',
        background: colors.orange,
      }
})

const StyledContainerCenter = MUIStyled(ContainerCenter)({
    boxShadow: '0px 10px 30px -7px #000000, 5px 5px 15px 5px rgb(0 0 0 / 0%)'
})

const StyledContainerContent = MUIStyled(ContainerContent)({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '4rem',
    justifyItems: 'center'
})



const StyledEndGrid = MUIStyled(Box)({
    justifySelf: 'end'
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
        <StyledContainerCenter bgColor={colors.bg}>
            <StyledContainerContent className='container__content'>
                <FabWrapper>
                        <OwnFab color='primary' aria-label="add" onClick={onHandleClick}>
                            <AddIcon />
                        </OwnFab>
                </FabWrapper>
                <h1>TO DO LIST</h1>
                <StyledEndGrid>
                    <UserAuth />
                </StyledEndGrid>
            </StyledContainerContent>
        </StyledContainerCenter>
    </Box>
    )
}

export default Header;