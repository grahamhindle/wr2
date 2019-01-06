export const GET_UID_QUESTION_STATE = 'GET_UID_QUESTION_STATE'


export function receiveQuestionUid(uid) {
  return {
    type: GET_UID_QUESTION_STATE,
    uid,
  }
}