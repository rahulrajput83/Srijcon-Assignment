/* Imports */
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react'
import Detail from './Detail';
import SecondaryText from './SecondaryText';


/* MUI Grid Component with styles as DetailComponent. */
const DetailsContainer = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '5px',
}));

/* DetailsCard Functional Component */
function DetailsCard(props) {
  return (
    /* Renders DetailsContainer */
    <DetailsContainer>
      {/* Renders SecondaryText component from './SecondaryText' with props. */}
      <SecondaryText text={props.text} />
      {/* Renders Detail component from './Detail' with props. */}
      <Detail text={props.detail} />
    </DetailsContainer>
  )
}

/* Exports Component */
export default DetailsCard