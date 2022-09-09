/* Imports */
import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Field/Input';
import { LoginButton } from '../Styles/Style';
import { useDispatch } from 'react-redux';

/* Login Functional Component */
function Login() {

    /* Dispatch to dispatch data to redux */
    const dispatch = useDispatch();
    /* useNavigate to navigate use to other path. */
    const navigate = useNavigate();

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

        /* if data.email and data.password equals to 'admin' then navigate to admin path.  */
        if (data.email === 'admin' && data.password === 'admin') {
            /* Dispatch Data to redux */
            let action = {
                type: "ADD_DATA",
                payload: {
                    email: 'admin',
                    isAdmin: 'Yes'
                }
            };
            dispatch(action);
            return navigate('/admin')
        }
        /* If data.email and data.password are empty then show error with error mesaage. */
        else if (data.email === '' || data.password === '' || data.email.indexOf('@') === -1) {
            setError(true)
            setMessage('All fields required !')
        }
        /* Else */
        else {
            /* Gets all employee data */
            fetch('https://gorest.co.in/public/v2/users', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 42c446cd3f24ee289eb75ff3bdb9c698d833bf481175c5c3a2abc256ea77499b'
                },
            })
                .then(response => response.json())
                .then((response) => {
                    /* Filter employee data with data.email */
                    const filtered = response.filter(i => i.email === data.email)
                    /* If found email in employee data. */
                    if (filtered.length >= 1) {
                        /* If filtered.email and password equal to data.email and password then login employee */
                        if (data.email === filtered[0].email && data.password === filtered[0].name) {
                            /* Dispatch data to redux store */
                            let action = {
                                type: "ADD_DATA",
                                payload: {
                                    email: filtered[0].email,
                                    isAdmin: 'No'
                                }
                            };
                            dispatch(action);
                            return navigate(`/profile/${filtered[0].id}`)
                        }
                        /* Else show error with error message 'Incorrect Password'. */
                        else {
                            setMessage('Incorrect Password');
                            setError(true);
                        }
                    }
                    /* Else Signup employee. */
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
                                /* Dispatch Data to redux store. */
                                let action = {
                                    type: "ADD_DATA",
                                    payload: {
                                        email: value.email,
                                        isAdmin: 'No'
                                    }
                                };
                                dispatch(action);
                                /* Navigate to edit route with id. */
                                return navigate(`/edit/${value.id}`)
                            })
                            /* Catch error */
                            .catch(err => console.log('err'))
                    }
                })
                /* Catch error */
                .catch(err => console.log('err'))
        }
    }

    /* Return */
    return (
        <div className="center">
            <div className="Card">
                <span className='label'>Employee and Admin login/Signup</span>

                {/* Renders Input Component from '../Field/Input' with props. */}
                <Input placeholder='Email' type='text' name='email' data={data} setData={setData} />
                <Input placeholder='Password' type='password' name='password' data={data} setData={setData} />

                {/* Conditional Randering to show and hide error. */}
                {error === true ? <Alert severity="error">{message}</Alert> : null}

                {/* Renders LoginButton from '../Styles/Style' */}
                <LoginButton onClick={handleSubmit}
                    variant="contained">
                    Login/Signup
                </LoginButton>

            </div>
        </div>
    );
}

/* Exports Component */
export default Login;