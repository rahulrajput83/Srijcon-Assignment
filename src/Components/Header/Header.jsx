/* Imports */
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import SpanText from '../Admin/SpanText'
import { GridCont } from '../Styles/Style'


/* Profile Avatar Styles */
const ProfileAvatar = styled(Avatar)(() => ({
    marginRight: '10px',
}));


/* Header Functional Component */
function Header() {
    /* use State from redux */
    const user = useSelector((state) => state.user)
    return (
        <>
            <GridCont className='row'>
                {/* Renders SpanText Component with text prop from './SpanText' */}
                <SpanText text="Management System" />
                {/* if user.isAdmin equals to Yes from redux then show text 'Admin' else show Avatar.*/}
                {
                    user.isAdmin === 'Yes' ? <SpanText text="Admin" /> : <ProfileAvatar />
                }
            </GridCont>
            <GridCont className="line"></GridCont>
        </>
    )
}

/* Exports Component */
export default Header