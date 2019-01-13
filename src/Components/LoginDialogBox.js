import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core'
import { connect} from 'react-redux'
import {setAppStatus} from '../actions/AppProfile'
import { getUsersState } from '../Selectors/user'
import { getUiState} from '../Selectors/UiSelectors'
import { loginUser } from '../actions/Login.js'





class LoginDialog extends React.Component {
  constructor(props) {
    super(props)
  
  this.state = {
    open: false,
  };
}


  handleClose = () => {
    const { dispatch ,appstatus} = this.props
    dispatch(setAppStatus(appstatus['LoginDialogBox'], "open",false))
    this.setState((state,props) => ({
        open: false
      }));
      
  };


  
  authUser = (e) => {
    
   
    const { dispatch} = this.props
    this.setState(() => ({
     open: false
    }));
    dispatch(loginUser(true, e))
    this.handleClose()
    
  }

  handleClickOpen = () => {
    const { dispatch ,appstatus ,uiparams} = this.props
    console.log( 'uiparams',uiparams)
    dispatch(setAppStatus(appstatus['LoginDialogBox'], "open",true))
    this.setState({ open: true });
    console.log( 'uiparams',uiparams)

  }

  
  render(){

    const { users,  appstatus} = this.props
    const {LoginDialogBox: {open}} = appstatus
    console.log('uiparams',open)
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
          onClick={ () => this.authUser(user.id) }
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


function mapStateToProps(state,props) {
  console.log('prop',props)
  return {
    
    uiparams: getUiState(state,props.name),
    loggedIn: getUsersState(state),
    users: Object.values(state.users),
    appstatus: state.appstatus,
  }
}
export default connect(mapStateToProps)(LoginDialog)