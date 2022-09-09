/* Imports */
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react'

/* MUI Typography Component with styles as NameText. */
const NameText = styled(Typography)(() => ({
    fontWeight: 550,
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '18px',
}));

/* Name Functional Component */
function Name(props) {
  return (
    /* Renders Name with props.text value. */
    <NameText>{props.text}</NameText>
  )
}

/* Exports Component */
export default Name