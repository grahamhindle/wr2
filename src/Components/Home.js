import React  from 'react'
import './App.css'
import {connect } from 'react-redux'
import {compose } from 'recompose'
import QuestionPanel from './QuestionPanel'
import {Paper} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import {setAppStatus } from '../actions/AppProfile'



const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    flexGrow: 1,
    margin:'auto',
    padding: '25px',
    backgroundColor: '#eeeeee',
    width: '50%',
  }
})

const  TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const Home = (props) => {
 
 const  handleChange = (event, value) => {
   const {appstatus, dispatch} = props
  dispatch(setAppStatus( appstatus['Home'],'value', value))
  let rvalue = false
  value === 1 ? 
    rvalue = true : rvalue = false
    dispatch(setAppStatus( appstatus['QuestionPanel'], 'radioButtonDisabled',rvalue ))
  };

  const { classes,  questions,appstatus} = props
  const { Home: {value}} = appstatus

  
    return (
        <Paper className={classes.paper}>
        <AppBar position="static">
          <Tabs variant='fullWidth' value={value} onChange={handleChange}>
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Unanswered</TabContainer>}
        {value=== 1 && <TabContainer>Answered</TabContainer>}
         
      {questions.map((question) => (
        
        <div key={question.id}>
          <QuestionPanel key={question.id} 
            name="QuestionPanel"
            question={question}
            answered={value}
            
            
            >

            </QuestionPanel>
          </div>
        ))}
        
        </Paper>
      
      
    )
  
}

function mapStateToProps(state) {
  return {
      
      users: Object.values(state.users),
      questions: Object.values(state.questions),
      appstatus: state.appstatus
      
  }
}
export default compose(withStyles(styles),connect(mapStateToProps))(Home)