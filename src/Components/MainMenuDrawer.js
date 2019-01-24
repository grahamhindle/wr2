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
import {setAppStatus} from '../actions/AppProfile'



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
    
   


    
    
      showHome =() => {
        this.props.dispatch(setAppStatus(this.props.appstatus['MainMenuDrawer'], "show",'home'))
      }
    
      showNewQuestion =() => {
        
        this.props.dispatch(setAppStatus(this.props.appstatus['MainMenuDrawer'], "show",'question'))
        //this.props.dispatch(setAppStatus(this.props.appstatus['NewQuestion'], //"open",true))
      }
    
      showLeaderBoard =() => {
        this.props.dispatch(setAppStatus(this.props.appstatus['MainMenuDrawer'], "show",'leader'))
      }
      login = () => {
        this.setState((state, props) => ({
          show: 'login',login: true
        }));
      }
    render (){
        const {classes, appstatus, uidstate, id,autheduser,home, newQuestion, leaderBoard }= this.props
        const {MainMenuDrawer: {open}} =appstatus
        console.log(" Drawer", open)
    
    return (
        
        <Drawer
        classes={{modal: classes.modal}}
          anchor='left'
          width={200}
          open={open}
          onClick={(open)=> this.props.dispatch(setAppStatus(appstatus['MainMenuDrawer'], "open",false))}>
          
          <MenuItem onClick = {this.showHome}>Home</MenuItem>
          <Divider />
          <MenuItem onClick = {this.showNewQuestion}>New Question</MenuItem>
          <MenuItem onClick = {this.showLeaderBoard}>Leader Board</MenuItem>
          
         </Drawer> 
        
    )    
}
}       


const mapStateToProps = state => {
    return {
      users:state.users,
      autheduser: state.autheduser,
      appstatus: state.appstatus
    }
  }

export default compose(withStyles(styles) ,connect(mapStateToProps))(MainMenuDrawer)