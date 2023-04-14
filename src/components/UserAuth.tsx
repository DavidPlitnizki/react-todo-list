import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styled as MUIStyled } from '@mui/system';

import useAuth from '../hooks/useAuth';
import ContainerCenter from '../ui/ContainerCenter';




const StyledUserInfoBox = MUIStyled(Box)({
    paddingInline: '1rem',
})

const UserAuth = () => {
    const {isAuth} = useAuth();

    return (
        <ContainerCenter padding={false}>
            <Avatar sx={{ bgcolor:'#B8B42D' }}>OP</Avatar>
            <StyledUserInfoBox>
            <Typography variant='body2'>User Name</Typography>
                <Button variant="contained" endIcon={isAuth ? <LogoutIcon /> : <LoginIcon />}>
                    {isAuth ? 'Logut' : 'Login'}
                </Button>
            </StyledUserInfoBox>
        </ContainerCenter>
    )
}

export default UserAuth;
