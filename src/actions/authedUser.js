export const GET_AUTHED_USER = 'GET_AUTHED_USER'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function getAuthedUser(id){
  return {
    type: GET_AUTHED_USER,
    id,
  }
}
export function setAuthedUser(id){
  console.log('action', id)
  return {
  type: SET_AUTHED_USER,
  id,

  }
}