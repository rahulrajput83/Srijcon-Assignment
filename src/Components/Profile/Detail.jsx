/* Imports */
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react'

/* MUI Typography Component with styles as DetailText. */
const DetailText = styled(Typography)(() => ({
    fontWeight: 550,
    textAlign: 'center',
    fontSize: '15px',
}));

/* Detail Functional Component */
function Detail(props) {
  return (
    /* Renders DetailText with props.text value. */
    <DetailText>{props.text}</DetailText>
  )
}

/* Exports Component. */
export default Detail