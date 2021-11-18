import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';

const AddDoctor = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h2>add a Docotor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    type='name'
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="standard" />
                <br />
                <Input
                    accept="image/*"
                    onChange={e => setImage(e?.target?.files[0])}
                    type="file" />
                <br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;