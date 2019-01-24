import React, { Fragment} from 'react'
import {Typography} from '@material-ui/core'
import { connect } from 'react-redux'

const SignIn = (props) =>(
    !props.login.auth &&
    <Fragment>
        <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In to Continue
        </Typography>
        
    </Fragment>
)

const mapStateToProps= ({login}) =>{
  return {
      login 
  }
}

export default connect(mapStateToProps)(SignIn)
