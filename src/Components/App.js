import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux'
import {compose} from 'recompose'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import LoginDialogBox from './LoginDialogBox'
import { withStyles } from '@material-ui/core/styles';
import { AppBar,  Drawer, Divider, MenuItem, Toolbar, Paper, Link} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import './App.css';
import { handleInitialData } from '../actions/shared'
import { setAppStatus } from '../actions/AppProfile'
import Profile from '../Components/Profile'
import MainMenuAppBar from './MainMenuAppBar'
import MainMenuDrawer from './MainMenuDrawer'




const styles = theme => ({
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
  root2: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})


class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      
      "show": null,
      "login": false,
     
      loginText: 'Login',
      
    }
  }

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  handleToggle = () => this.setState({open: !this.state.open})
  handleLoginToggle= () => this.setState({show: 'login',login:!this.state.login})
  
  render() {
    let content = null
//to do - make this part of react router
    console.log(this.state.show)
    const { appstatus} = this.props

    const {'MainMenuDrawer':{show}} = appstatus
    switch (show) {
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
      <div>
        <MainMenuAppBar />
        <br/>
        <MainMenuDrawer />
        {content} 
      </div>
    )
  }
}
function mapStateToProps (state,props){
  return {
    appstatus: state.appstatus,
  }
}

export default compose(withStyles(styles),connect(mapStateToProps))(App);
