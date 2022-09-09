import React from 'react'
import { Grid, Input } from "@mui/material"
import styled from '@emotion/styled';

const InputField = styled(Input)(() => ({

}));

const GridContainer = styled(Grid)(() => ({
    border: '1px solid gray',
    borderRadius: '5px',
    padding: '0 5px',
    width: '100%',
    margin: '15px 0',
    marginRight: '10px'
}))

function InputVal(props) {
    return (
        <GridContainer item>
            <InputField name={props.name} type={props.type} disableUnderline fullWidth placeholder={props.placeholder} />
        </GridContainer>
    )
}

export default InputVal;