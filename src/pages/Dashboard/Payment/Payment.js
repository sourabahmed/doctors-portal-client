import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51JwrFCKEGJQkjPniIuX6wYSAEKwPLdgpBTATVec0uVUZblsJ4SQzGcyrks9StKVhAFFVwpmhPcyhyXWvnRdUxB2I00AevE94ox')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointment/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please pay for: {appointmentId}</h2>
            <h4>pay: ${appointment?.price}</h4>
            {
                appointment.price &&
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        appointment={appointment}
                    />
                </Elements>
            }
        </div>
    );
};

export default Payment;


/*

1. install stripe and stripe-react
2. set publish key
3. elements
4. checkout form
5. create payment method

*/