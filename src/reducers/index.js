
import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import login from './login'
import appstatus from './AppProfile'



export default combineReducers({
  users,
  questions,
  login,
  appstatus
  
})
