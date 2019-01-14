import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { compose } from 'recompose'
import { AppBar,
         Toolbar,
         
         IconButton,
         Typography,
         withStyles
} from '@material-ui/core'
import { unstable_Box as Box } from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu'
import MainMenuDrawer from './MainMenuDrawer'

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
  
class MainMenuAppBar extends Component {
    state = {
        iconbuttondisabled: false,
        open:false
    }

    handleChange = (open) => {
        this.setState({open})
    }
    handleToggle = () => this.setState({open: !this.state.open})
    render() {

    
    const { classes,  handleToggle} = this.props
    const disabled = this.state.iconbuttondisabled

    
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
        <Typography component ='div'   
            color='inherit'>
            <Box textAlign="center" m={1}>
            Welcome to the Would You Rather App
          </Box>
            
        </Typography>
        
        
        </Toolbar>
        </AppBar>
        <br/>
        <MainMenuDrawer open = {this.state.open}
                        change = {this.handleChange}
        />
        </div>
        )
    }
}

const mapDispatchToProps = (state) => {
    return {
        uidstate: state.uidstate,
        authedUser: state.autheduser
    }  
}
export default compose(withStyles(styles),connect(mapDispatchToProps))(MainMenuAppBar)


