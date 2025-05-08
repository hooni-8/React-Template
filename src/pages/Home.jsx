import React, {useEffect, useState} from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box, Typography, Button, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import * as gateway from "@components/common/Gateway";

const CenteredContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #e3f2fd, #bbdefb)',
}));

export default function Home() {

    const [userName, setUserName] = useState('');

    useEffect(() => {
        const session = async () => {
            try {
                const response = await gateway.session();
                if (response.isLogin) {
                    setUserName(response.userName);
                }
            } catch (e) {
                console.error(e);
            }
        }
        session();
    }, []);

    const logout = async () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.reload();
    }

    return (
        <CenteredContainer>
            <Paper elevation={6} sx={{ padding: 6, borderRadius: 4, maxWidth: 400 }}>
                <Stack spacing={3} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'success.main' }} />
                    <Typography variant="h5" fontWeight="bold">
                        {userName !== '' && userName}님 로그인 성공!
                    </Typography>
                    <Typography variant="body1" align="center">
                        이 템플릿은 간단히 구현한 템플릿으로써 <br />
                        Gateway와 연결하여 로그인, 회원가입만 구현한 서비스입니다.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/"
                        onClick={logout}
                        fullWidth
                        sx={{ borderRadius: 3, mt: 2 }}
                    >
                        로그아웃
                    </Button>
                </Stack>
            </Paper>
        </CenteredContainer>
    );
}