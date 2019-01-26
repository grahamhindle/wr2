import React, { Component,Fragment } from 'react'
import { connect  } from 'react-redux'
import { compose } from 'recompose'
import { AppBar,
         Toolbar,
         Avatar,
         IconButton,
         Typography,
         withStyles,
         
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'



import { setAppStatus } from '../actions/AppProfile'
import Profile from './Profile'
import LoginDialogBox from './LoginDialogBox'
import { getUserProfile} from '../Selectors/Profile'
import SignIn from './signin'
import ProfileMenu from './ProfileMenu'

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
    appbar: {
        alignItems: 'center',
      }
  };
  
class MainMenuAppBar extends Component {
    state = {
        iconbuttondisabled: false,
        open:false
    }

    

    handleChange = (open) => {
        this.setState({open})
    }

    handleToggle = () => {
        const { dispatch, appstatus} = this.props
        const {'MainMenuDrawer': {open}} = appstatus
        let val = !open
        
      
        dispatch(setAppStatus(appstatus['MainMenuDrawer'], "open",val))
    }
    render() {
    const { classes, profile, appstatus, login, handleToggle} = this.props
   
    const disabled = this.state.iconbuttondisabled
    return (
    <div className={classes.root}>
        <AppBar 
          position='static'
          >
          <Toolbar>
            <IconButton disabled={false} className={classes.menuButton}             color="inherit" aria-label="Menu"
                onClick={this.handleToggle}>
            <MenuIcon />
            </IconButton>
                <Typography   
                    className={classes.grow} 
                    variant="h6"  
                    color='inherit'>Welcome to the Would You Rather App
                </Typography>
            {login.auth &&
                <Fragment>
            <Avatar alt={profile.name} src={profile.avatarURL} 
                className= {classes.avatar} />
            <Typography   
                className='span' 
                variant="h6"  
                color='inherit' noWrap>{`Welcome  ${profile.name} `}
            </Typography>
           <ProfileMenu />
            </Fragment>
            }
          </Toolbar>
        </AppBar>
        { !login.auth ? <SignIn /> : null}
      <br/>
      <Profile />
      <LoginDialogBox name = "LoginDialogBox"/>

        </div>
    )   
       
    }
}

const mapDispatchToProps = (state) => {
    return {
        
        appstatus: state.appstatus,
        login: state.login,
        profile: getUserProfile(state),
        
    }  
}
export default compose(withStyles(styles),connect(mapDispatchToProps))(MainMenuAppBar)


