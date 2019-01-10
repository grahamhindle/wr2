import {  GET_APP_STATE ,
          SET_APP_STATE} 
    from '../actions/uidState'


export default function uidstate( state = {}, action) {
    console.log('action',action.uidstate)
    switch ( action.type) {
      case GET_APP_STATE:
        return {
        ...state,
        ...action.uidstate
        }
      case SET_APP_STATE:
        return {
          ...state,
        }
      default:
        return state
    }
  }