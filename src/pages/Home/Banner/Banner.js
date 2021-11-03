import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container, Box } from '@mui/material';

import chair from '../../../images/chair.png';
import bgImage from '../../../images/bg.png'

const bannerBg = {
    background: `url(${bgImage})`
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '400px'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your new Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{my: 5, fontSize: 13, fontWeigth: 300 }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nesciunt velit perspiciatis odit magnam asperiores consequuntur minima repellat. Recusandae, dolore.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;