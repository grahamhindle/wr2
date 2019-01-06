export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SET_USER_FILTER = 'SET_USER_FILTER'


export const  receiveUsers = users =>({
    type: RECEIVE_USERS,
    users,
})

export const  updateUser = users =>({
  type: RECEIVE_USERS,
  users,
})


