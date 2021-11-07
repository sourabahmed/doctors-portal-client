import React from 'react';
import useAuth from './../../../hooks/useAuth.js';

const Appointments = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>Appointments</h2>
        </div>
    );
};

export default Appointments;