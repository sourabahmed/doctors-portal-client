import React, {useState, useEffect} from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h2>this is doctors</h2>
        </div>
    );
};

export default Doctors;