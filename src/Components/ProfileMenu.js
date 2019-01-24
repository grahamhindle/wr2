import React, {Fragment} from 'react'
import {IconButton,Menu,MenuItem} from '@material-ui/core'
import {AccountCircle } from '@material-ui/icons'
import {setAppStatus } from '../actions/AppProfile'
import { connect } from 'react-redux'
import  DisplayProfile from './DisplayProfile'
import Logout from './Logout'





const ProfileMenu = (props) => {
    const { ProfileMenu: {open} }= props.appstatus
    const handleMenu = () => {
    props.dispatch(setAppStatus(props.appstatus['ProfileMenu'], "open",true))
    }

    

    const handleMenuClose= (e)=> {

        console.log('menu',e)
        const { dispatch ,appstatus } = props
        dispatch(setAppStatus(appstatus['ProfileMenu'], "open",false))
    }
    const handleClose= (e)=> {
        const name = e.nativeEvent.target.outerText
        const { dispatch ,appstatus } = props
        dispatch(setAppStatus(appstatus['ProfileMenu'], "open",false))
       dispatch(setAppStatus(appstatus['ProfileMenu'], "selected",e.nativeEvent.target.outerText))
        

        const str1 = appstatus['ProfileMenu'].selected
        
        if ( String(str1) == String('Profile\n')){
             console.log('Profile')
        }else if (str1 == String('Logout\n')){
            console.log('Logout')
        }

          

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
                onClose={handleClose}
            >
                <MenuItem name='profile' onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                
            </Menu>
            { appstatus['ProfileMenu'].selected === 'Profile' ?
            <DisplayProfile/> : appstatus['ProfileMenu'].selected === 'Logout'?
             <Logout />: null}
        </Fragment>
    )  

}


const mapStateToProps = (state) => {
    return{
        appstatus: state.appstatus
    }
}
export default connect(mapStateToProps)(ProfileMenu)