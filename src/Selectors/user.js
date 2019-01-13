import { createSelector } from 'reselect'

//get loggedonuser



const getUsers = (state) => {
  
  console.log('state',state)
  return (
    state.login.auth === true ?
      state.users[state.login.userid]
     :  null
    )
    
   
  }

//reselect
export const getUsersState = () =>createSelector(
  [ getUsers ],
  (login) => login
)

