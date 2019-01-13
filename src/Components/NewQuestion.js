import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core';



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
  };

  
  

  handleClose = () => {
    this.setState({ open: false });
    //dispatch save question
  };

  render() {

    const { classes} = this.props
    return (
      <div>
        
        <Dialog className = {classes.heading }
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create New Question</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Would you Rather...
            </DialogContentText>
            <TextField
            id="standard-with-placeholder"
            label="enter option one text"
            placeholder="Placeholder"
            className={classes.column}
            margin="normal"
          />
          Or
          <TextField
          id="standard-with-placeholder"
          label="enter option two text"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
        />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles) ( NewQuestion)