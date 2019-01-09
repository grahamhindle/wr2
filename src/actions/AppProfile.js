export const GET_APP_STATUS = 'GET_APP_STATUS'
export const SET_APP_STATUS = 'SET_APP_STATUS'


export function getAppProfile(app_profile){
  return {
    type: GET_APP_STATUS,
    app_profile
  }
}
export function setAppProfile(app_profile){
  return {
  type: SET_APP_STATUS,
  app_profile

  }
}



