import React, {Fragment} from 'react'
import {IconButton,Menu,MenuItem} from '@material-ui/core'
import {AccountCircle } from '@material-ui/icons'
import {setAppStatus } from '../actions/AppProfile'
import { connect } from 'react-redux'
import  DisplayProfile from './DisplayProfile'
import Logout from './Logout'
import { loginUser } from '../actions/Login.js'




const ProfileMenu = (props) => {
    let profile
    const { ProfileMenu: {open} }= props.appstatus
    const handleMenu = () => {
    props.dispatch(setAppStatus(props.appstatus['ProfileMenu'], "open",true))
    props.dispatch(setAppStatus(appstatus['ProfileMenu'], "display",false))
    }
    const handleProfile= (e)=> {
        //display profile and scores
        //props.dispatch(loginUser(false,"" ))
        profile='profile'
        props.dispatch(setAppStatus(appstatus['ProfileMenu'], "open",false))
        props.dispatch(setAppStatus(appstatus['ProfileMenu'], "display",true))
        
        
    }
    const handleLogout= (e)=> {
        props.dispatch(loginUser(false,"" ))
        props.dispatch(setAppStatus(appstatus['ProfileMenu'], "open",false))
        props.dispatch(setAppStatus(appstatus['ProfileMenu'], "display",false))
    }
    
    const {appstatus} = props
    return (
        <Fragment>
            <IconButton
                aria-owns={true ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={null}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                
            >
                <MenuItem name='profile' onClick={handleProfile}>Profile</MenuItem>
                <MenuItem name ='logout' onClick={handleLogout}>Logout</MenuItem>
                
            </Menu>
            { appstatus['ProfileMenu'].display === true ? <DisplayProfile/> : null}
        </Fragment>
    )  

}


const mapStateToProps = ({appstatus, login}) => {
    return{
        appstatus,
        login,
    }
}
export default connect(mapStateToProps)(ProfileMenu)