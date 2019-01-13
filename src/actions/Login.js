export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'



export const  loginUser = (auth,uid) =>({
  type: LOGIN,
  auth,
  uid,
})

export const  logoutUser = auth =>({
  type: LOGOUT,
  auth,
})
