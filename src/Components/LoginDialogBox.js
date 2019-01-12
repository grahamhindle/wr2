import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core'
import { connect} from 'react-redux'
import {saveCurrentUser} from '../actions/AppProfile'




class LoginDialog extends React.Component {
  constructor(props) {
    super(props)
  
  this.state = {
    open: false,
  };
}


  handleClose = () => {
    
    this.setState((state,props) => ({
        open: false
      }));
      
  };


  
  authUser = (e) => {
    
   
    const { appstatus } = this.props
    let new_profile = {
      logindialog: true,
      drawerenabled :true,
      menuopen:false,
      isloggedon:true,
      hometabvalue:0,
      currentuser: null,
      
      
      }
      let user = this.props.users[e]
      new_profile.currentuser = user 
      
      
    // update state for now - remove later
    this.setState(() => ({
     open: false
    }));
   
    console.log('new',new_profile)
    this.props.dispatch(saveCurrentUser(appstatus,user))
    //this.props.dispatch(modifyAppStatus('currentuser', user))
    // dispatch and update user profile and store current user             
    //this.props.dispatch(setLoggedInUser(new_profile))
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  render(){

    const { users} = this.props
    let userA = Object.values(users)
    return (
      <div>
      <Button variant="outlined" component="span" color="inherit" onClick={this.handleClickOpen}>
      Login
      </Button>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Select User</DialogTitle>
        {userA.map((user) => (
        <ListItem
          button={true}
          key={user.id}
          onClick={() => this.authUser(user.id) }
        >
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°${user.name + 1}`}
            src={user.avatarURL}
          />
        </ListItemAvatar>
        <ListItemText primary={user.name}/>
        </ListItem>
      ))}
      </Dialog>
    </div>
      
    )
  }
}


function mapStateToProps(state) {
  
  return {
      
     users: state.users,
      appstatus: state.appstatus,
  }
}
export default connect(mapStateToProps)(LoginDialog)