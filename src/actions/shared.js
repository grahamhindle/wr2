import { getInitialData } from '../Utils/api'
import { receiveUsers } from './users'
import { receiveQuestions,answerQuestion } from './questions'
import { getAppProfile,setAppProfile, setAppStatus} from './AppProfile'
import { saveQuestionAndAnswer, 
          saveAppProfile,
          receiveAppProfile, 
          updateAppStatus 
        } from '../Utils/api';



export function handleInitialData(){
  return (dispatch) => {
    return getInitialData()
      .then (({users, questions,appstatus})=> {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(getAppProfile(appstatus))
      })
  }
}


export function updateAnswer(authedUser, id, answer) {
  return (dispatch) => {
    return saveQuestionAndAnswer(authedUser,id , answer)
      .then (({users,questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(answerQuestion())
      })
    }
}

export function setLoggedInUser(new_profile) {
  return (dispatch) => {
    return saveAppProfile(new_profile)
      .then (({appstatus}) => {
        dispatch(setAppProfile(appstatus))

      })
    }
}
export function modifyAppStatus(key,value){
  return (dispatch) => {
    return updateAppStatus(key,value)
      .then (({key}) => {
        dispatch(setAppStatus(key,value))

      })
    }
}

export function getLoggedInUser() {
  return (dispatch) => {
    return receiveAppProfile()
      .then (({appstatus}) => {
        dispatch(getAppProfile(appstatus))

      })
    }
}







