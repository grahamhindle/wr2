import React, from 'react';
import { connect } from 'react-redux'
import {compose} from 'recompose'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import LoginDialogBox from './LoginDialogBox'
import { withStyles } from '@material-ui/core/styles';
import { AppBar,  Drawer, Divider, MenuItem, Toolbar} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import './App.css'
import { handleInitialData } from '../actions/shared'



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
};


const MainContainer = (props) => {
  
const { classes, dispatch, loggedInUser, users} = this.props


  handleToggle = () => this.setState({open: !this.state.open})
  handleLoginToggle= () => this.setState({show: 'login',login:!this.state.login})
  showBar =() => {
    this.setState({show: 'bar', open: false})
  }

  showHome =() => {
    this.setState({show: 'home', open: false})
  }

  showNewQuestion =() => {
    this.setState({show: 'question', open: false})
  }

  showLeaderBoard =() => {
    this.setState({show: 'leader', open: false})
  }
  login = () => {
    this.setState((state, props) => ({
      show: 'login',login: true
    }));
  }
    let content = null
//to do - make this part of react router
    
    switch (this.state.show) {
      case 'home':
        content= (<Home/>)
        break
      case 'question':
        content= (<NewQuestion/>)
        break
      case 'leader':
        content= (<LeaderBoard/>)
        break
        case 'login':
        content= (<LoginDialogBox 
                  open={true}
                  />)
        break  
      default:
        break
    }


    
    
    return (
      <div className={classes.root}>
        
        <br/>
        <Drawer
        classes={{modal: classes.modal}}
          anchor='left'
          width={200}
          open={this.state.open}
          onChange={(open)=> this.setState({open})}>
          
          <MenuItem onClick = {this.showHome}>Home</MenuItem>
          <Divider />
          <MenuItem onClick = {this.showNewQuestion}>New Question</MenuItem>
          <MenuItem onClick = {this.showLeaderBoard}>Leader Board</MenuItem>
          
         </Drawer> 
        {content}
      </div>
    ); 
  
}
function mapStateToProps (users,questions,authedUser){
  return {
    loggedInUser: authedUser,
    users: Object.values(users)
  }
}

export default compose(withStyles(styles),connect(mapStateToProps))(MainContainer);
