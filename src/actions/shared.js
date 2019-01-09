import { getInitialData } from '../Utils/api'
import { receiveUsers } from './users'
import { receiveQuestions,answerQuestion } from './questions'
import { getAppProfile,setAppProfile} from './AppProfile'
import { saveQuestionAndAnswer ,saveAppProfile,receiveAppProfile } from '../Utils/api';



export function handleInitialData(){
  return (dispatch) => {
    return getInitialData()
      .then (({users, questions,app_profile})=> {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(getAppProfile(app_profile))
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
      .then (({app_profile}) => {
        dispatch(setAppProfile(app_profile))

      })
    }
}

export function getLoggedInUser() {
  return (dispatch) => {
    return receiveAppProfile()
      .then (({app_profile}) => {
        dispatch(getAppProfile(app_profile))

      })
    }
}







