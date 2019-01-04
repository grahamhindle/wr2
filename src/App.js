import React, { Component } from 'react';
import Foo from './Foo'
import Bar from './Bar'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Drawer, Divider, MenuItem, Paper,Toolbar} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
      "open": false,
      "show": null
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  showBar =() => {
    this.setState({show: 'bar', open: false})
  }

  showHome =() => {
    this.setState({show: 'bar', open: false})
  }

  showNewQuestion =() => {
    this.setState({show: 'foo', open: false})
  }

  showLederBoard =() => {
    this.setState({show: 'bar', open: false})
  }
  render() {
    let content = null
//to do - make this part of react router
    switch (this.state.show) {
      case 'foo':
        content= (<Foo/>)
        break
      case 'bar':
        content= (<Bar/>)
        break
      default:
        content= <h1>Waiting</h1>
    }

    const {classes} = this.props
    return (
      <div className="App">
        <AppBar 
          position='static'
          title = 'Welcome to Would You Rather App!'>
          <Toolbar>
            <IconButton disabled={false} className={classes.menuButton} color="inherit" aria-label="Menu"
            title='Learn about drawer, menuitem and Paper'
            onClick={this.handleToggle}>
              <MenuIcon />
            </IconButton>
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

        <Paper style={paperStyle} >
          <Toolbar style={{'justifyContent': 'center'}}>
            
          </Toolbar>
          {content}
          <p>Click the icon on the appbar to opern the drawer and then picvk a menu item</p>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
