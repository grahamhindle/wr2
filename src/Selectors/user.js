import { createSelector } from 'reselect'

//get loggedonuser



const getUsers = (state) => {
  
  
  return (
    state.login.auth === true ?
      state.users[state.login.userid]
     :  null
    )
    
   
  }

//reselect
export const getUsersState = () =>createSelector(
  [ getUsers ],
  (user) => user
)




