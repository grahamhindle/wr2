
import { GET_AUTHED_USER, SET_AUTHED_USER } from '../actions/authedUser';


export default function authedUser( state = null, action) {
  switch ( action.type) {
    
    case GET_AUTHED_USER:
      return action.id
    case SET_AUTHED_USER:
      return {
        authedUser: action.id
      }
      
      
    default:
      return state
  }
}