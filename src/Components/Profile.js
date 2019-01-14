import React from 'react'
import {connect} from 'react-redux'
import { Button ,Typography} from '@material-ui/core'
import { withStyles} from '@material-ui/core'
import { compose } from 'recompose'
 


const styles = {
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
      marginLeft: -12,
      marginRight: 20,
    },
  };

const handleClickOpen = () => {
    //disable menu
    //clear the screen
    //change state back to login
}

const Profile = (props) => {

    const {login ,classes}  = props
    const {auth} = login
// diaply message on app bar, setup profile 
//replace login button eith logoff
    if ( auth){

       return (
        <div>
        
            
            <Button variant="outlined" component="span" color="inherit" onClick={handleClickOpen}>
            Logoff
            </Button>
            <Typography   
            className={classes.grow} 
            variant="h6"  
            color='inherit'>{login.userid}
        </Typography>
        </div>
    )
       }
    else{
        return(
            <div>
           
               
                <Button variant="outlined" component="span" color="inherit" onClick={props.open}>
                Logon
                </Button>
                <Typography   
                className={classes.grow} 
                variant="h6"  
                color='inherit'>You need to logon
            </Typography>
            </div>
        )
    }
    
}

const mapStateToProps= ({login}) => {
    return {
        login
    }
}
export default compose(withStyles(styles),connect(mapStateToProps)) (Profile)

