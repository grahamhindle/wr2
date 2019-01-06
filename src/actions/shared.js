import { getInitialData } from '../Utils/api'
import { receiveUsers } from './users'
import { receiveQuestions,answerQuestion } from './questions'
import { getAuthedUser} from './authedUser'
import {clearUserFilters, getLoggedOnUser} from './FilterUser'
import { saveQuestionAndAnswer } from '../Utils/api';



export function handleInitialData(){
  return (dispatch) => {
    return getInitialData()
      .then (({users, questions})=> {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(getAuthedUser())
        dispatch(clearUserFilters())
      })
  }
}


export function updateAnswer(authedUser, id, answer) {
  return (dispatch) => {
    return saveQuestionAndAnswer(authedUser,id , answer)
      .then (({users,questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(getLoggedOnUser(users[authedUser]))
        dispatch(answerQuestion())
      })
    }
}









