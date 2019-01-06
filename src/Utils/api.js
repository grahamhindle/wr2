import { _getUsers, 
    _getQuestions,
    _saveQuestionAnswer
  } from './_Data'




  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users,questions]) => ({
      users,
      questions,
      authedUser:null
    }))
  }

  export function getUserData(){
    return Promise.all([
      _getUsers()
    ]).then(([users]) => ({
      users
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
    


  
      
      
   
    



  