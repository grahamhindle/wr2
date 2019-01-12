
import {GET_APP_STATUS,
        SET_APP_STATUS,
        UPDATE_APPSTATUS,
        SET_CURRENT_USER,
        } 
        from '../actions/AppProfile';
      


export default function appstatus( state = {}, action) {
  console.log('key', action.value)
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
      return  Object.assign({},action.appstatus,{
        [action.key]: action.value })
      case SET_CURRENT_USER:
          return  Object.assign({}, action.appstatus,{
            currentuser: action.user})
            
    default:
      return state
  }
}


