import React, {Component} from 'react'
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
import {setAppStatus} from '../actions/AppProfile'

// to do: check valid user profile
// display user profile
// display menu
// show questions , sorted by answered and unanswered
// display user details

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

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class Home extends Component {
  

  handleChange = (event, value) => {
    
    
    const key = this.props.dispatch(setAppStatus('hometabvalue', value))

  };

  

  render(){
    
    
    const { classes,  questions, appstatus} = this.props
    
    
    
    return (
        <Paper className={classes.paper}>
        <AppBar position="static">
          <Tabs variant='fullWidth' value={appstatus.hometabvalue} onChange={this.handleChange}>
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        </AppBar>
        {appstatus.hometabvalue === 0 && <TabContainer>Unanswered</TabContainer>}
        {appstatus.hometabvalue=== 1 && <TabContainer>Answered</TabContainer>}
         
      {questions.map((question) => (
        
        <div key={question.id}>
          <QuestionPanel key={question.id} 
            question={question}
            answered={appstatus.hometabvalue}
            
            >
            </QuestionPanel>
          </div>
        ))}
        
        </Paper>
      
      
    )
  }
}

function mapStateToProps({users,questions, appstatus}) {
  return {
      
      users: Object.values(users),
      questions: Object.values(questions),
      appstatus
      
  }
}
export default compose(withStyles(styles),connect(mapStateToProps))(Home)