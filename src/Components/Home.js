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
import {getLoggedInUser} from '../actions/shared'
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
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    console.log(value)
    this.setState({ value });

  };

  isAnsweredQuestion () {
    if (this.state.value) {
      

    }
  }
componentDidMount(){
  const { app_profile} = this.props
  this.setState({ value:0  });
}

  render(){
    const { value } = this.state;
    
    const { classes,  questions} = this.props
    
    
    
    return (
        <Paper className={classes.paper}>
        <AppBar position="static">
          <Tabs variant='fullWidth' value={value} onChange={this.handleChange}>
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Unanswered</TabContainer>}
        {value === 1 && <TabContainer>Answered</TabContainer>}
         
      {questions.map((question) => (
        
        <div key={question.id}>
          <QuestionPanel key={question.id} 
            question={question}
            answered={this.state.value}
            
            >
            </QuestionPanel>
          </div>
        ))}
        
        </Paper>
      
      
    )
  }
}

function mapStateToProps({users,questions, app_profile}) {
  return {
      
      users: Object.values(users),
      questions: Object.values(questions),
      app_profile
      
  }
}
export default compose(withStyles(styles),connect(mapStateToProps))(Home)