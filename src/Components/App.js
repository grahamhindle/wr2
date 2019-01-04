import React, { Component } from 'react';
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import LoginDialogBox from './LoginDialogBox'


import { withStyles } from '@material-ui/core/styles';
import { AppBar, Button, Drawer, Divider, MenuItem, Paper,Toolbar} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import './App.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
const paperStyle = {
  height: '85%',
  width: '85%',
  margin: '7%',
  textAlign: 'center',
  display: 'inline-block',
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      "drawerOpen": false,
      "show": null,
      "login": false,
      "menuDisabled": false,
      loginText: 'Login'
    }
  }

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
  render() {
    let content = null
//to do - make this part of react router
    console.log(this.state.show)
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

    const {classes} = this.props
    return (
      <div className={classes.root}>
        <AppBar 
          position='static'
          >
          <Toolbar>
            <IconButton disabled={false} className={classes.menuButton} color="inherit" aria-label="Menu"
            onClick={this.handleToggle}>
              <MenuIcon />
            </IconButton>
            <Typography   className={classes.grow} variant="h6"  color='inherit'>Welcome to the Would You Rather App</Typography>
            

            <LoginDialogBox/>
            

            
          </Toolbar>
        
        </AppBar>
          
        <Drawer
          
          width={200}
          open={this.state.open}
          onChange={(open)=> this.setState({open})}>
          <AppBar title='AppBar'/>
          <MenuItem onClick = {this.showHome}>Home</MenuItem>
          <Divider />
          <MenuItem onClick = {this.showNewQuestion}>New Question</MenuItem>
          <MenuItem onClick = {this.showLeaderBoard}>Leader Board</MenuItem>
         </Drawer> 
        {content}
      </div>
    );
  }
}

export default withStyles(styles)(App);
