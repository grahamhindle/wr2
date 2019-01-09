import { _getUsers, 
    _getQuestions,
    _saveQuestionAnswer,
    _getAppStatus,
    _saveAppStatus,
  } from './_Data'




  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
      _getAppStatus()
    ]).then(([users,questions,app_profile]) => ({
      users,
      questions,
      app_profile,
    }))
  }

  export function getUserData(){
    return Promise.all([
      _getUsers()
    ]).then(([users]) => ({
      users
    }))
  }

  export function receiveAppProfile () {
    return Promise.all([
      _getAppStatus()
    ]).then(([app_profile]) => ({
      app_profile,
    }))
  }
  export function saveAppProfile(new_profile) {
    return Promise.all([
      _saveAppStatus( new_profile )
    ]).then(([app_profile]) => ({
      app_profile
    }))
  }
  export function saveQuestionAndAnswer(authedUser, id, answer) {
    console.log('answer',answer)
    console.log('qid',id)
    console.log('authedUser',authedUser)
    return Promise.all([
      _saveQuestionAnswer ( authedUser,id , answer )
    ]).then(([users,questions]) => ({
      users,
      questions,
    }))
  
  }
    


  
      
      
   
    



  