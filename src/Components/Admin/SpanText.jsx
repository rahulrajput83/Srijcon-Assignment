/* Imports */
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react'

/* MUI Typography Component as Span with styles */
const Span = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    textAlign: 'center',
    margin: '0 10px',
}));

/* SpanText functional Component */
function SpanText(props) {
  return (
    /* Set Span text to props.text value. */
    <Span>{props.text}</Span>
  )
}
/* Exports Component */
export default SpanText