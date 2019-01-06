
import { combineReducers } from 'redux'
import users from './users';
import questions from './questions';
import userFilter from './FilterUser'


export default combineReducers({
  users,
  questions,
  userFilter,
})
