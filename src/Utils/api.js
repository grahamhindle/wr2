import { _getUsers, 
    _getQuestions,
    _saveQuestionAnswer,
    _getAppStatus,
    _saveAppStatus,
    _updateAppStatus,
  } from './_Data'




  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
      _getAppStatus()
    ]).then(([users,questions,appstatus]) => ({
      users,
      questions,
      appstatus,
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
    ]).then(([appstatus]) => ({
      appstatus,
    }))
  }
  export function saveAppProfile(new_profile) {
    return Promise.all([
      _saveAppStatus( new_profile)
    ]).then(([appstatus]) => ({
      appstatus
    }))
  }

  export function updateAppStatus(key,value) {
    console.log('updateAppStatus',key)
    return Promise.all([
      _updateAppStatus( key,value)
    ]).then(([key]) => ({
      key
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
    


  
      
      
   
    



  