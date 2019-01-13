import { createSelector } from 'reselect'

//get loggedonuser

const getUi = (state,name) => {
  console.log('getUi',state.appstatus[name])
  return (
    state.appstatus[name] ?
      state.appstatus[name]
     :  null
    )
   
  }

//reselect
export const getUiState = createSelector(
  [ getUi ],
  (uiparams) => uiparams
)