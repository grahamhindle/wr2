import { createSelector } from 'reselect'


const questionsSelector = state => state.questions
const userAnsweredSelector = state=> state.users[state.login.userid].answers



export const questionSubSet = createSelector (
    userAnsweredSelector,
    questionsSelector,
    (answers, questions) => answers.map(x => {
        return console.log( 'item',x)
    })
)