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
import Profile from './Profile'





class LoginDialog extends React.Component {
  


  handleClose = () => {
    const { dispatch ,appstatus} = this.props
    dispatch(setAppStatus(appstatus['LoginDialogBox'], "open",false))
   
      
  }

  handleClickOpen = () => {
    const { dispatch ,appstatus} = this.props
    dispatch(setAppStatus(appstatus['LoginDialogBox'], "open",true))
   
  }
  
  authUser = (e) => {
    
    const { dispatch,appstatus  } = this.props
    dispatch(loginUser(true, e))
    
    this.handleClose()
    
  }

  
  
  render(){

    const { users,  appstatus} = this.props
    
    console.log()
    return (
      <div>
     
      
      
      <Dialog
        open={appstatus['LoginDialogBox'].open}
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