import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <h2>Available appointment {date.toDateString()}</h2>
        </div>
    );
};

export default AvailableAppointment;