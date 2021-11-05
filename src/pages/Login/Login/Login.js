import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, TextField, Typography, Button, Stack, LinearProgress, Alert } from '@mui/material';
import login from '../../../images/login.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, logInUser, isLoading, authError } = useAuth();
    // console.log(loginData);
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(field, value);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        logInUser(loginData?.email, loginData?.password);
        console.log('clicked');
        
    }

    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type="email"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                name="password"
                                onChange={handleOnChange}
                                type="password"
                                variant="standard" />

                            <Button  sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <NavLink style={{ textDecoration: 'none' }} to='/register'>
                                <Button variant="text">New user? Please Register.</Button>
                            </NavLink>

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

                        </form>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;