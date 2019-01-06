import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core'
import { connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {getLoggedOnUser} from '../actions/FilterUser'
import {getLoggedInUser} from '../Utils/searchUsers'


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
    this.setState((state,props) => ({
      open: false
    }));
    this.props.dispatch(setAuthedUser(e))
    this.props.dispatch(getLoggedOnUser(getLoggedInUser(this.props.users,e)))
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  render() {
    const {users} =this.props
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


function mapStateToProps({ users, questions,authedUser}) {
  return {
      users: Object.values(users),
      questions: Object.values(questions),
      authedUser,
  }
}
export default connect(mapStateToProps)(LoginDialog)