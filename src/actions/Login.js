export const GET_AUTHED_USER = 'GET_AUTHED_USER'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function checkIfUserLoggedInACtion(id){
  return {
    type: GET_AUTHED_USER,
    id,
  }
}
export function doLoginAction(id){
  return {
  type: SET_AUTHED_USER,
  id

  }
}