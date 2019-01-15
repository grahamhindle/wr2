import React from 'react'
import {connect} from 'react-redux'
import { Button ,Typography,Avatar,Menu,MenuItem,IconButton} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles} from '@material-ui/core'
import { compose } from 'recompose'
import { getUserProfile } from '../Selectors/Profile';
import { userInfo } from 'os';
 


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
    smlAvatar: {
        margin: 10,
        width: 50,
        height: 50,
      },
    
  };

const handleClickOpen = () => {
    //disable menu
    //clear the screen
    //change state back to login
}

const handleClose= ()=> {

}

const handleMenu = () => {

}
const Profile = (props) => {

    const {login ,classes,profile}  = props
    if ( login.auth ){
    return(
       
       
        
        
       
            
              <div className={classes.root}>
                <IconButton
                  aria-owns={true ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
        <Menu
        id="menu-appbar"
        anchorEl={null}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={false}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
            
            
           
            <Avatar alt={profile.name} src={profile.avatarURL}className={classes.avatar}/>
            <Typography   
            className='span' 
            variant="h6"  
            color='inherit'>{profile.name}
        </Typography>
        <Button variant="outlined" component="span" color="inherit" onClick={props.open}>
            Logoff
            </Button>
       
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

const mapStateToProps= (state => {
    return {
        login: state.login,
        profile: getUserProfile(state)
    }
    
})

export default compose(withStyles(styles),connect(mapStateToProps)) (Profile)

