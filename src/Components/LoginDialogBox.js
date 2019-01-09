import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core'
import { connect} from 'react-redux'
import {setLoggedInUser} from '../actions/shared'



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

  loginHandler = (user) => {
    const {dispatch, app_profile } =this.props
    
    const new_profile = Object.assign({
      logindialog: false,
      drawerenabled :true,
      menuopen:false,
      isloggedon:true,
      currentuser: user,
      },
      app_profile) 
    // update state for now - remove later
    this.setState(() => ({
      open: new_profile.logindialog
    }));
   
    // dispatch and update user profile and store current user             
    this.props.dispatch(setLoggedInUser(new_profile))
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  render(){
    const { users } = this.props
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
        {users.map((user) => (
        <ListItem
          button={true}
          key={user.id}
          onClick={() => this.loginHandler(user) } 
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


function mapStateToProps({ dispatch, users, app_profile}) {
  return {
      dispatch,
      users:Object.values(users),
      app_profile
  }
}
export default connect(mapStateToProps)(LoginDialog)