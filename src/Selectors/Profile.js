import { createSelector } from 'reselect'

export const getUserProfile =(state)=>{

  const { users, login} = state
    console.log('at get userstate',users[login.userid])
  return (
      
      users[login.userid]
  )
}