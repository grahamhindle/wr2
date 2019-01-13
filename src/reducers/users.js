import { RECEIVE_USERS, GET_USER_PROFILE } from '../actions/users'


export default function users( state = {}, action) {
  switch ( action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
      case GET_USER_PROFILE:
    
  
        return state
      

    default:
      return state
  }
}

