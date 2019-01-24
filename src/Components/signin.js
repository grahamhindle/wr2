import React, { Fragment} from 'react'
import {Typography} from '@material-ui/core'

const SignIn = (props) =>(
    <Fragment>
        <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In to Continue
        </Typography>
        <Typography variant="body2" align="center">
            {'Not registeredyet? '}
    
            Sign Up here
    
        </Typography>
    </Fragment>

)
export default SignIn
