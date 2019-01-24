import React, { Fragment} from 'react'
import {connect} from 'react-redux'
import { Button ,Typography,Avatar,Menu,MenuItem,IconButton,Grid} from '@material-ui/core'

import { withStyles} from '@material-ui/core'
import { compose } from 'recompose'
import { getUserProfile } from '../Selectors/Profile';
import { setAppStatus} from '../actions/AppProfile'
 


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    modal: {
      paddingTop: 50,
      paddingAnchorTop: 50,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {  
      paddingTop:12,
      paddingBottom: 12,
    },
    smlAvatar: {
        margin: 10,
        width: 50,
        height: 50,
      },
      centertext: {
          display: 'flex',
          [theme.breakpoints.up('md')]: {
            display: 'none',
          },
        },
    container: {
        display:'flex',
        justifyContent: 'center',
    textAlign: 'center',
    flexGrow: '50%,'
    }
          

     
    
  })





const Profile = (props) => {

const {login ,classes,}  = props

const handleClickOpen = () => {
    
    props.dispatch(setAppStatus(props.appstatus['LoginDialogBox'], "open",true))
        //load profile
    
      }
    
    if ( login.auth ){
    return(
            
        <Fragment>
            
       
        </Fragment>
    )
       }
    else{
        return(
            <div className={classes.center}>
            <Grid
            container
            spacing={16}
            className={classes.demo}
            alignItems='center'
            direction='row'
            justify='center'
          >
          
                <Button variant="outlined" className={classes.menuButton} color="inherit" onClick={handleClickOpen}>
                Logon
                </Button>
               
             </Grid>  
                
            </div>
        )
    }
    
}

const mapStateToProps= (state) => {
    return {
        login: state.login,
        profile: getUserProfile(state),
        appstatus: state.appstatus,
    }
    
}

export default compose(withStyles(styles),connect(mapStateToProps)) (Profile)

