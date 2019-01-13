import {  LOGIN ,
  LOGOUT} from '../actions/Login'

  const initialState = {
    auth: false, userid:   '' 
  }
  export default function login( state = initialState, action) {
    switch ( action.type) {
      case LOGIN:
        
        return {
          ...state,
          auth: action.auth,
          userid: action.uid, 
          
          
        }
        case LOGOUT:
        return {
          ...state,
          auth: action.auth,
          userid: '',
          
        }
      default:
        return state
    }
  }