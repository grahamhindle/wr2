
import {GET_APP_STATUS,
        SET_APP_STATUS,
        } 
        from '../actions/AppProfile';


export default function appstatus( state = null, action) {
  console.log(action.app_profile)
  switch ( action.type) {
    
    case GET_APP_STATUS:
      return {
        ...state,
        
        
      }
    case SET_APP_STATUS:
      return {
        ...state,
        ...action.app_profile
      }

    default:
      return state
  }
}

