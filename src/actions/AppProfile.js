export const GET_APP_STATUS = 'GET_APP_STATUS'
export const SET_APP_STATUS = 'SET_APP_STATUS'
export const UPDATE_APPSTATUS = 'UPDATE_APPSTATUS'

export function getAppProfile(appstatus){
  return {
    type: GET_APP_STATUS,
    appstatus
  }
}
export function setAppProfile(appstatus){
  console.log('action',appstatus)
  return {
  type: SET_APP_STATUS,
  appstatus

  }
}
export function setAppStatus(key,value)
{
  
  return {
    type: UPDATE_APPSTATUS,
    key,
    value
  }
}

