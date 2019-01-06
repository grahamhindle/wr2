import React, { Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar'
import {compose } from 'redux'
import { connect } from 'react-redux'
import {getUserByAuthor,
        getAnsweredQuestions,
        getUnansweredQuestions} 
      from '../Utils/searchUsers'

import {updateAnswer} from '../actions/shared'
import Result from './Result'


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.primary.main,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '50%',
  },
  column2: {
    flexBasis: '50%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  button: {
    color: theme.palette.primary.main,
    backgroundColor: '#eeeeee',
    },
    bigAvatar: {
      margin: 20,
      width: 90,
      height: 90,
    },
    smallAvatar: {
      margin: 2,
      width: 20,
      height: 20,
    },
  
})



class QuestionPanel extends Component {
    constructor(props) {
      super(props)
      this.state= {
        value: 'optionOne',
        radioButtonDisabled: false,
        result: false,
        
      }
    }

    

    handleChange = (event,value) => {
     
      this.setState({value})
    }

    updateAnswer = () => {
      //dispatch the updated answer
      
      
      //saveQuestionAndAnswer(this.props.userFilter.id,this.props.question.id,this.state.value)
      this.props.dispatch(updateAnswer(this.props.userFilter.id,this.props.question.id,this.state.value))
    }

    showResults = () => {
      this.setState((state, prevState) => ({
        result: true
      }));
    }

  render() {

    
  const { classes,users,question,answered,userFilter} = this.props
 
   const author = getUserByAuthor(users, question.author)
  console.log('answered',answered)
  
let displayQuestion = []

  if (answered === 0) {
    displayQuestion = getUnansweredQuestions(userFilter.answers,question.id)
  } else {
    displayQuestion = getAnsweredQuestions(userFilter.answers,question.id)
  }
    
     

 

  

  if (displayQuestion === true){
  return (
    
    <div className={classes.root}>
      <ExpansionPanel  defaultExpanded={false}>
        <ExpansionPanelSummary className={classes.button} expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
          <Avatar className={classes.smallAvatar} 
            alt={`Avatar n°${author.author + 1}`}
            src={author.avatarURL}
              />
            <Typography className={classes.secondaryHeading}>{`${author.name} asks:`}</Typography>
          </div>
            <Typography 
              variant='caption' 
              className={classNames(classes.column, classes.heading)}
            >
            Would You Rather...
            </Typography>
          
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Avatar className={classes.bigAvatar} 
            alt={`Avatar n°${author.name + 1}`}
            src={author.avatarURL}
              />
          <div className={classes.column} />
          
          <div className={classNames(classes.column, classes.secondaryHeading)}>
          <RadioGroup
            aria-label="answers"
            name="answer11"
            className={classes.group}
            value={this.state.value}
            

            onChange={this.handleChange}
          >
          
          <FormControlLabel value={'optionOne'} control={<Radio />} label={question.optionOne.text} />
          <FormControlLabel value={'optionTwo'}  control={<Radio />} label={question.optionTwo.text} />
            
          </RadioGroup>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
        
          {answered === 0 ?
            <Button 
            className={classes.button} 
            variant='contained' 
            size='large' 
            fullWidth={true} 
            onClick={this.updateAnswer}
          >
          Submit Answer
          </Button>
          : <Result />}
         
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  )
  }
  else {
    return (<Fragment></Fragment>)
  }
  }
  }


QuestionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
}

function mapStateToProps ({users,userFilter}){
  return {
    users: Object.values(users),
    userFilter
  }
}


export default compose(withStyles(styles),connect(mapStateToProps))(QuestionPanel);