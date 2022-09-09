/* Imports */
import { Alert } from '@mui/material';
import React, { useState } from 'react';
import Input from '../Field/Input';
import { LoginButton } from '../Styles/Style';

/* Login Functional Component */
function NewEmployee() {

    /* useState to store email and password input value. */
    const [data, setData] = useState({
        "email": '',
        "password": ''
    });

    /* useState to show error. */
    const [error, setError] = useState(false);

    /* useState for error mesaage. */
    const [message, setMessage] = useState('All fields required !')

    /* handleSubmit when Login/Signup buuton ic clicked. */
    const handleSubmit = (e) => {
        e.preventDefault();
        /* If data.email or data.password are empty or darta.email odesn't contains '@' then show error with error mesaage. */
        if (data.email === '' || data.password === '' || data.email.indexOf('@') === -1) {
            setError(true)
            setMessage('All fields required !')
        }

        /* Else */
        else {
            fetch('https://gorest.co.in/public/v2/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 42c446cd3f24ee289eb75ff3bdb9c698d833bf481175c5c3a2abc256ea77499b'
                },
                /* Post the object in body. */
                body: JSON.stringify({ "name": `${data.password}`, "gender": "male", "email": `${data.email}`, "status": "active" })
            })
                .then(value => value.json())
                .then((value) => {
                    setError(true)
                    setMessage('Successfull Added')
                })
        }
    }

    /* Return */
    return (
        <div className="center">
            <div className="Card">
                <span className='label'>Add New Employee</span>

                {/* Renders Input Component from '../Field/Input' with props. */}
                <Input placeholder='Email' type='text' name='email' data={data} setData={setData} />
                <Input placeholder='Password' type='password' name='password' data={data} setData={setData} />

                {/* Conditional Randering to show and hide error. */}
                {error === true ? <Alert severity="error">{message}</Alert> : null}

                {/* Renders LoginButton from '../Styles/Style' */}
                <LoginButton onClick={handleSubmit}
                    variant="contained">
                    Add Now
                </LoginButton>

            </div>
        </div>
    );
}

/* Exports Component */
export default NewEmployee