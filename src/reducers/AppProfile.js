
import {GET_APP_STATUS,
        SET_APP_STATUS,
        } 
        from '../actions/AppProfile';


export default function appstatus( state = {}, action) {
  console.log('reducer',action.appstatus)
  switch ( action.type) {
    
    case GET_APP_STATUS:
      return {
        ...state,
        ...action.appstatus

        
        
      }
    case SET_APP_STATUS:
      return {
        ...state,
        ...action.appstatus
        
      }

    default:
      return state
  }
}

