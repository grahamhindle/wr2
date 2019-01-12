export const GET_APP_STATUS = 'GET_APP_STATUS'
export const SET_APP_STATUS = 'SET_APP_STATUS'
export const UPDATE_APPSTATUS = 'UPDATE_APPSTATUS'
export const SET_CURRENT_USER= 'SET_CURRENT_USER'

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

export function setAppStatus(appstatus, key,value) {
  return {
    type: SET_APP_STATUS,
    appstatus,
    key,value
    
  
    }
}

export function saveCurrentUser(appstatus,user)
{
  return {
    type: SET_CURRENT_USER,
    appstatus,
    user
  }
}

