export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function answerQuestion() {
  return {
    type: ANSWER_QUESTION,
    
  }
}
export function saveNewQuestion(res){
 
  return {
    type: SAVE_NEW_QUESTION,
    
  }
}