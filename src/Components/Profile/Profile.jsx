/* Imports */
import styled from '@emotion/styled';
import { Avatar, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SpanText from '../Admin/SpanText'
import { GridCont } from '../Styles/Style'
import DetailsCard from './DetailsCard';
import Name from './Name';
import SecondaryText from './SecondaryText';
import { EditSharp, DeleteOutlineOutlined } from '@mui/icons-material';
import { red, teal } from '@mui/material/colors';
import { useNavigate, useParams } from 'react-router-dom';


/* Profile Avatar Styles */
const ProfileAvatar = styled(Avatar)(() => ({
    marginRight: '10px',
}));

/* Edit Icon Styles */
const Edit = styled(EditSharp)(() => ({
    position: 'absolute',
    top: '12%',
    right: '20px',
    backgroundColor: teal[400],
    color: 'white',
    padding: '7px',
    fontSize: '20px',
    borderRadius: '50%',
    cursor: 'pointer'
}));

/* Delete Icon Styles */
const Delete = styled(DeleteOutlineOutlined)(() => ({
    position: 'absolute',
    top: '20%',
    right: '20px',
    backgroundColor: red[400],
    color: 'white',
    padding: '7px',
    fontSize: '20px',
    borderRadius: '50%',
    cursor: 'pointer',
}));

/* Grid ProfileContainer Styles */
export const ProfileContainer = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column'
}));


/* Profile Functional Component */
function Profile() {
    /* useNavigate to navigate use to other path. */
    const navigate = useNavigate();

    /* useState to store response data */
    const [data, setData] = useState({})

    const {id} = useParams();

    /* Deletes employee profile when delete icon is clicked. */
    const handleDelete = (e) => {
        e.preventDefault();
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
                /* Navigate to Login again */
                return navigate('/')
            })
            .catch((err) => {
                return navigate('/')
            })
    }

    /* /public/v2/users/17 */
    useEffect(() => {
        fetch(`https://gorest.co.in/public/v2/users/${id}`, {
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
    }, [id])

    /* Return */
    return (
        <GridCont className='column'>
            <GridCont className='row'>
                <SpanText text="Management System" />
                <ProfileAvatar />
            </GridCont>
            <GridCont className="line"></GridCont>

            <ProfileContainer className='profile'>

                {/* Employee Profile image */}
                <ProfileAvatar size='large' />

                {/* Employee Name - Renders Name Component from ./Name */}
                <Name text={data.email} />

                {/* Renders SecondaryText Component from ./SecondaryText */}
                <SecondaryText text='Web Developer' />

                {/* Profile Details */}
                <GridCont className='detailsFlex'>

                    {/* Renders DetailsCard Component from ./DetailsCard as text and details prop.  */}
                    <DetailsCard text='Gender' detail={data.gender} />
                    <DetailsCard text='Status' detail={data.status} />
                    <DetailsCard text='Nationality' detail='Indian' />
                    
                </GridCont>

                {/* Edit Icon */}
                <Edit onClick={() => console.log('Edit')} />

                {/* Delete Icon */}
                <Delete onClick={handleDelete} />
            </ProfileContainer>
        </GridCont>
    )
}

/* Export Profile */
export default Profile;