/* Imports */
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react'

/* MUI Typography Component with styles as NameText. */
const NameText = styled(Typography)(() => ({
    textAlign: 'center',
    fontSize: '14px',
    color: 'grey'
}));

/* SecondaryText Functional Component */
function SecondaryText(props) {
  return (
    /* Renders Name with props.text value. */
    <NameText>{props.text}</NameText>
  )
}

export default SecondaryText