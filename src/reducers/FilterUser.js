import { SHOW_USER, CLEAR_USER_FILTERS  } from '../actions/FilterUser'




const   userFilter = (state = {}, action) => {
  switch(action.type){
    case SHOW_USER :
     return {
       ...state,
       ...action.user
     }
     case CLEAR_USER_FILTERS :
      return {
        ...state,
        ...action.user
      }
    default:
      return state
  }
}
export default userFilter
