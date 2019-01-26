import { getInitialData } from '../Utils/api'
import { receiveUsers } from './users'
import { receiveQuestions,answerQuestion } from './questions'
import { loginUser } from './Login'
import { getAppProfile,setAppProfile, setAppStatus} from './AppProfile'
import { saveQuestionAndAnswer, 
          receiveAppProfile, 
          saveNewQuestion,
        } from '../Utils/api';

import { _saveAppStatus,
         _updateAppStatus,
      } from '../Utils/_Data'



export function handleInitialData(){
  return (dispatch) => {
    return getInitialData()
      .then (({users, questions,appstatus})=> {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(loginUser(false,""))
        dispatch(getAppProfile())
      })
  }
}


export function updateAnswer(authedUser, id, answer) {
  return (dispatch) => {
    return saveQuestionAndAnswer(authedUser,id , answer)
      .then (({users,questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(answerQuestion(questions))
      })
    }
}

export function setLoggedInUser(new_profile) {
  return (dispatch) => {
    return _saveAppStatus(new_profile)
      .then (({appstatus}) => {
        dispatch(setAppProfile(appstatus))

      })
    }
}


export function saveQuestion(question) {
  return (dispatch) => {
    return saveNewQuestion(question)
      .then(({questions,users}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))

      })
    }
}
export function modifyAppStatus(appstatus,key,value){
  return (dispatch) => {
    return _updateAppStatus(appstatus, key,value)
      .then ((key, value,appstatus) => {
        dispatch(setAppStatus(key,value))
        dispatch(getAppProfile())

      })
    }
}

export function getLoggedInUser() {
  return (dispatch) => {
    return receiveAppProfile()
      .then (({appstatus}) => {
        dispatch(getAppProfile())

      })
    }
}







