import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import React from 'react'
import SpanText from '../Admin/SpanText'
import { ProfileContainer } from '../Profile/Profile';
import SecondaryText from '../Profile/SecondaryText';
import { GridCont } from '../Styles/Style'



/* Profile Avatar Styles */
const ProfileAvatar = styled(Avatar)(() => ({
    marginRight: '10px',
}));


function EditProfile() {


  return (
    <GridCont className='column'>
    <GridCont className='row'>
        <SpanText text="Management System" />
        <ProfileAvatar />
    </GridCont>
    <GridCont className="line"></GridCont>

    <ProfileContainer className='profile'>
{/* Renders SecondaryText Component from ./SecondaryText */}
<SecondaryText text='Image Size should not be larger than 1MB.' />
        {/* Employee Profile image */}
        <ProfileAvatar sx={{ width: 100, height: 100 }} />

    

    </ProfileContainer>
</GridCont>
  )
}

export default EditProfile