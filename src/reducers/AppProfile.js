
import {GET_APP_STATUS,
        SET_APP_STATUS,
        UPDATE_APPSTATUS,
        } 
        from '../actions/AppProfile';


export default function appstatus( state = {}, action) {
  
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
      case UPDATE_APPSTATUS:
            const key = action.key
            state.appstatus[key] = action.value
            
          return {
            ...state,
          }

    default:
      return state
  }
}

