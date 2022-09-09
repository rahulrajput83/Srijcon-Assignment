/* Imports */
import React, { useState } from 'react';
import { InputField } from '../Styles/Style';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


/* Input Functional Component */
function Input(props) {
    /* useState to show and hide entered password. */
    const [showPassword, setShowPassword] = useState(false);

    /* handleShow when lock icon is clicked. */
    const handleShow = () => {
        /* If Password visible then hide. */
        if(showPassword === true) {
            setShowPassword(false)
        }
        /* Else password set to visible. */
        else {
            setShowPassword(true)
        }
    }

    /* handleChange with Input value Changes. */
    const handleChange = (e) => {
        props.setData({...props.data, [e.target.name] : e.target.value});
    }

    /* Return */
    return (
        <div className='input'>

            {/* Renders InputField Component from '../Styles/Style' */}
            {/* Input type - if props.placeholder is Email then set type to 'email', else if props.placeholder is 'Password' and showPassword is also true then set Input type to 'text', else set Input type to 'password' */}
            <InputField name={props.name} onChange={handleChange} type={props.placeholder === 'Email' ? 'email' : props.placeholder === 'Password' && showPassword === true ? 'text' : 'password'} disableUnderline fullWidth placeholder={props.placeholder} />
            
            {/* Conditional Rendering, if props.placeholder is 'Password' renders div with lock icon, else render null. */}
            {props.placeholder === 'Password' ? <div onClick={handleShow} className='icon' >
                <LockOutlinedIcon  />
                </div> : null}
        </div>
    )
}

/* Export Component */
export default Input