/* Imports */
import styled from '@emotion/styled';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import React from 'react'
import Header from '../Header/Header';
import SecondaryText from '../Profile/SecondaryText';
import InputVal from './Input';


/* MUI Typography to show compulsary text. */
const Required = styled(Typography)(() => ({
  color: 'red',
  fontSize: '14px',
  marginTop: '20px'
}))

/* Profile Avatar Styles */
const ProfileAvatar = styled(Avatar)(() => ({
  margin: '20px 0',
}));

/* MUI Grid Component */
const GridContainer = styled(Grid)(() => ({
  padding: '1rem',
  justifyContent: 'space-evenly'
}))
/* MUI Grid Component */
const GridContent = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '1rem'
}))

/* MUI Grid Component */
const ButtonGroup = styled(Grid)(() => ({
  marginTop: '1rem',
  display: 'flex',
}))

/* MUI Button Component */
const ButtonItem1 = styled(Button)(() => ({
  margin: '0 10px',
  background: 'grey',
  color: 'white',
  padding: '3px 20px'
}))

/* MUI Button Component */
const ButtonItem2 = styled(Button)(() => ({
  margin: '0 10px',
  background: 'skyblue',
  color: 'white',
  padding: '3px 20px'
}))


/* EditProfile Functional Component */
function EditProfile() {
  return (
    <>
    {/* Renders Header Component */}
      <Header />
      <GridContainer container item xs={12} md={12}>
        <GridContent item className='content'>
          {/* Renders SecondaryText component with props. */}
          <SecondaryText text='Image sixe should not be larger than 1MB' />
          
          {/* ProfileAvatar */}
          <ProfileAvatar
            sx={{ width: 80, height: 80 }}
          />
          {/* Input Field */}
          <div className='textrow'>
            {/* Renders InputVal from './InputVal' */}
            <InputVal type='text' placeholder='First Name' />
            {/* Renders InputVal from './InputVal' */}
            <InputVal type='text' placeholder='Last Name' />
          </div>
          {/* Renders InputVal from './InputVal' */}
          <InputVal placeholder='Designation' />
        </GridContent>

        <GridContent item className='content'>
          <div className='textrow'>
            {/* Renders InputVal from './InputVal' */}
            <InputVal type='date' placeholder='DOB' />
            {/* Renders InputVal from './InputVal' */}
            <InputVal type='text' placeholder='Gender' />
          </div>
          {/* Renders InputVal from './InputVal' */}
          <InputVal placeholder='Mobile Number' type='tel' />
          {/* Renders InputVal from './InputVal' */}
          <InputVal placeholder='Address 1' type='text' />
          <div className='textrow'>
            {/* Renders InputVal from './InputVal' */}
            <InputVal type='text' placeholder='City' />
            {/* Renders InputVal from './InputVal' */}
            <InputVal type='text' placeholder='State' />
          </div>
          <div className='textrow'>
            {/* Renders InputVal from './InputVal' */}
            <InputVal type='text' placeholder='Zip Code' />
            {/* Renders InputVal from './InputVal' */}
            <InputVal type='text' placeholder='Country' />
          </div>
          <Required>* All Field are compulsary</Required>

          {/* Button Group */}
          <ButtonGroup>
            {/* Cancel Button */}
            <ButtonItem1>
              Cancel
            </ButtonItem1>
            {/* Save Button */}
            <ButtonItem2>
              Save
            </ButtonItem2>
          </ButtonGroup>
        </GridContent>
      </GridContainer>
    </>
  )
}

/* Exports Component */
export default EditProfile