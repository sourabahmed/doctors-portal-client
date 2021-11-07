import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, TextField, Typography, Button, Alert } from '@mui/material';
import login from '../../../images/login.png'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value, newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not matched')
            return
        }
        registerUser(loginData?.name, loginData?.email, loginData?.password, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Please Register
                    </Typography>
                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Re enter your password"
                                name="password2"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="standard" />

                            <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Register</Button>
                            <NavLink style={{ textDecoration: 'none' }} to='/login'>
                                <Button variant="text">Already Registered? Please Login.</Button>
                            </NavLink>
                        </form>
                    }

                    {
                        isLoading && <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                            <LinearProgress color="secondary" />
                            {/* <LinearProgress color="success" />
                        <LinearProgress color="inherit" /> */}
                        </Stack>
                    }

                    {
                        user?.email && <Alert severity="success">Congrets! You registered Successfully.</Alert>
                    }

                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;