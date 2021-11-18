import { Grid, Container, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 12
    },
    {
        id: 2,
        name: 'Cosmetcs Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
        price: 14
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 10,
        price: 15
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
        price: 17
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
        price: 19
    },
    {
        id: 6,
        name: 'Oral Sergery',
        time: '07.00 PM - 08.00 PM',
        space: 9,
        price: 21
    },
]
const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography sx={{ color: 'info.main', m: 3 }} variant="h4" gutterBottom component="div">
                Available Appointment on {date.toDateString()}
            </Typography>
            {
                bookingSuccess && <Alert severity="success">Congrets! You registered Successfully.</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;