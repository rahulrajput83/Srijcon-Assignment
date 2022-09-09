/* Imports */
import React, { useState, useEffect, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { GridCont } from '../Styles/Style';
import { Avatar, Grid, } from '@mui/material';
import { red, green } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import SpanText from './SpanText';
import SecondaryText from '../Profile/SecondaryText';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

/* MUI Grid Component with empty styles */
const GridItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

/* Profile Avatar Styles */
const ProfileAvatar = styled(Avatar)(() => ({
    marginBottom: '20px',
}));

/* MUI Delete Icon with styles */
const DeleteIcon = styled(DeleteOutlineOutlinedIcon)(({ theme }) => ({
    padding: theme.spacing(1),
    marginLeft: 'auto',
    marginTop: '10px',
    marginRight: 0,
    backgroundColor: red[600],
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer'
}));

/* MUI Add Icon with styles */
const IconAdd = styled(AddIcon)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: '10px auto',
    backgroundColor: green[600],
    borderRadius: '50%',
    color: 'white',
}));


/* Admin Functional Component */
export default function Admin() {
    /* useNavigate to navigate use to other path. */
    const navigate = useNavigate();

    /* useState to store all employee data in array. */
    const [data, setData] = useState([]);

    /* Navigate to add */
    const handleAdd = () => {
        return navigate('/add')
    }

    /* handleDelete to delete employee */
    const handleDelete = (id) => {

        fetch(`https://gorest.co.in/public/v2/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 42c446cd3f24ee289eb75ff3bdb9c698d833bf481175c5c3a2abc256ea77499b'
            },
        })
            .then(response => response.json())
            .then((response) => {
                /* Calls getData callback function */
                getData();
            })
            .catch((err) => {
                getData();
            })
    }

    const getData = useCallback(() => {
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
                /* Sets the response to data useState. */
                setData(response)
            })
    }, [])

    /* useEffect to get all employee data when component mounted. */
    useEffect(() => {
        getData()
    }, [getData])

    /* Return */
    return (
        <GridCont className='column'>
            {/* Renders Header Component */}
            <Header />
            {/* Renders SpanText Component with text prop from './SpanText' */}
            <SpanText text="List of Employees" />
            <GridCont className='grid'>

                {/* Map function on data array */}
                {
                    data.map((item, index) => {
                        return (

                            <GridItem key={index} className='grid_item'>
                                <ProfileAvatar sx={{ width: 80, height: 80 }} />
                                {/* Renders SpanText Component with text prop from './SpanText' */}
                                <SpanText text={item.email} />
                                {/* Renders SecondaryText Component with text prop from '../Profile/SecondaryText' */}
                                <SecondaryText text={item.email} />
                                {/* Delete Icon */}
                                <DeleteIcon onClick={() => handleDelete(item.id)} />
                            </GridItem>

                        )
                    })
                }
                <GridItem onClick={handleAdd} className='grid_item add'>
                    {/* Add Icon */}
                    <IconAdd />
                    {/* Renders SpanText Component with text prop from './SpanText' */}
                    <SpanText text="Add Employee" />
                </GridItem>

            </GridCont>
        </GridCont>
    );
}
