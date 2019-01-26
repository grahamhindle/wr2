import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core';
import {compose } from 'recompose'
import { connect } from 'react-redux'
import { setAppStatus} from '../actions/AppProfile'

import { saveQuestion } from '../actions/shared';




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
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
      flexBasis: '50%',
    },
  
})

class NewQuestion extends Component {
  state = {
    open: true,
    optionOne: ""
  };

  componentDidMount() {
    const {dispatch, appstatus} = this.props
    dispatch(setAppStatus(appstatus['NewQuestion'], "open",true))
  }
  

  handleClose = () => {

    const {dispatch,appstatus } = this.props
    dispatch(setAppStatus(appstatus['NewQuestion'], "open",false))
    dispatch(setAppStatus(appstatus['NewQuestion'], "OptionOne",""))
    dispatch(setAppStatus(appstatus['NewQuestion'], "OptionTwo",""))
    
  }
  onSubmit= (e) => {
    //format the question and save it
    //validate values
    
    e.preventDefault()
    
    const { dispatch, appstatus,login} = this.props
    const { NewQuestion: { optionOne, optionTwo}} = appstatus
    if ( optionOne === undefined ||  optionTwo === undefined) {
        return alert("Please enter option one and option two ")
    }
    
   dispatch(setAppStatus(appstatus['NewQuestion'], "open",false))
   
   const question = {
    optionOneText: optionOne, 
    optionTwoText:optionTwo, 
    author: login.userid} 
    dispatch(saveQuestion(question))

    //now save the question


  }
  handleChange = name => ({ target: {value} }) =>  {
    const {dispatch,appstatus } = this.props
    dispatch(setAppStatus(appstatus['NewQuestion'], name,value))
  }


  render() {

    const { classes,appstatus} = this.props
    const {NewQuestion: {open}} = appstatus
    
    return (
      <div >
        
        <Dialog className = {classes.root }
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Enter a new Question
          </DialogTitle>
          
          <DialogContent>
            <DialogContentText className= {classes.heading}>
              Would you Rather...
            </DialogContentText>
            <form>
            <TextField
            label="enter option one text"
            placeholder="Placeholder"
            className={classes.textField}
            onChange={this.handleChange('optionOne')}
            margin="normal"
          />
            <br/>
            Or
            <br/>
            <TextField
              label="enter option one text"
              placeholder="Placeholder"
              className={classes.textField}
              onChange={this.handleChange('optionTwo')}
              margin="normal"
            />
            </form>
           
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state,props) {

  return {
    appstatus: state.appstatus,
    login: state.login
  }
}

function mapPropsToState(dispatch){
  

}

export default compose(connect(mapStateToProps),withStyles(styles))( NewQuestion)