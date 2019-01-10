import React , { Component, Fragment } from 'react'
import { connect  } from 'react-redux'
import  {getUserDisplayValues} from './searchUsers'
import { compose } from 'recompose'
import { Drawer,
         MenuItem,
         Divider,
         Typography,
         withStyles
} from '@material-ui/core'
import { setUidState,getUidState } from '../actions/shared'



const styles = {
    root: {
      flexGrow: 1,
    },
    modal: {
      paddingTop: 50,
      paddingAnchorTop: 50,
    },
  }





class MainMenuDrawer extends Component {
    state = {
        "open": false,
    }
    
   
    

   
    render (){
        const {classes, uidstate, id,autheduser,home, newQuestion, leaderBoard }= this.props
        const {open} =this.state.open
 
    console.log(this.props)
    return (
        
        <Drawer
            classes={{modal: classes.modal}}
            anchor='left'
            width={200}
            open={this.props.open}
            onChange={this.props.change}
        >
        <MenuItem onClick = {this.props.home}>Home</MenuItem>
        <Divider />
        <MenuItem onClick = {this.props.newQuestion}>New Question</MenuItem>
        <MenuItem onClick = {this.props.leaderBoard}>Leader Board</MenuItem>
        </Drawer> 
        
    )    
}
}       


const mapStateToProps = state => {
    return {
      uidstate: state.uidstate,
      users:state.users,
      autheduser: state.autheduser
    }
  }

export default compose(withStyles(styles) ,connect(mapStateToProps))(MainMenuDrawer)