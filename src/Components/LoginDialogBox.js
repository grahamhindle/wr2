import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core'
import { connect} from 'react-redux'
import {setLoggedInUser} from '../actions/shared'
import { produce} from 'immer'



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
    
    console.log('loggedinuser',this.props.users[e])
    
    console.log(e)
    let new_profile = {
      logindialog: false,
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
    // dispatch and update user profile and store current user             
    this.props.dispatch(setLoggedInUser(new_profile))
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  render(){
    console.log(this.props)
    
    let userA = Object.values(this.props.users)
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