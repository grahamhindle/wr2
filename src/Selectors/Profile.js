import { createSelector } from 'reselect'

export const getUserProfile =(state)=>{

  const { users, login} = state
   
  return (
      
      users[login.userid]
  )
}