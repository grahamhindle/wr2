
import {GET_APP_STATUS,
        SET_APP_STATUS,
        UPDATE_APP_STATUS,
        SET_CURRENT_USER,
        } 
        from '../actions/AppProfile';
        const InitialState  =  {
          App: {
            open: false,
            show: null,
          },
          Home: {
            value: 0,
          },
          LoginDialogBox: {
            open: false,
          },
          QuestionPanel: {
            value: 'optionOne',
            radioButtonDisabled: false,
            result: false,
          },
          NewQuestion: {
            open:true,
          },
          ProfileMenu:{
            open:false,
            selected: '',
          },
          ProfileDisplay:{
            open:false,
          },
          MainMenuDrawer: {
            open: false,
          }
        }     


export default function appstatus( state = InitialState, action) {
  console.log('appstatus',action.appstatus)
  switch ( action.type) {
    
    case GET_APP_STATUS:
      return {
        ...state,
        ...action.appstatus      
      }
    case SET_APP_STATUS:
      return {
        ...state,
        ...appstatus,
        ...action.appstatus
      }
     case UPDATE_APP_STATUS:
     return {
       ...state,
       ...action.appstatus[action.key] = action.value
       
     }
     /*
      return Object.assign({},action.appstatus,{
        [action.key]: action.value })
*/
      case SET_CURRENT_USER:
        return {
        ...state.appstatus,
        ...action.id,
        }
           // return Object.assign({},state.appstatus,{
          //    currentuser:  action.id })
          
            
    default:
      return state
  }
}


