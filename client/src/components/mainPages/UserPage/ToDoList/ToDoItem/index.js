import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';


const ToDoItem = (props) => {
  const { classes } = props;

  console.log(props)
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .delete(`/todos/delete/${props.taskId}`)
      .then(response => {
        console.log(response)
      })
  
  }
  
  return (
    <div>
      <Card >
        <ExpansionPanel>
          <ExpansionPanelSummary >
            <Typography >{props.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {props.description}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Button
          variant="contained"
          color="secondary"
          className="complete-button"
          onClick={(e) => handleClick(e)}
        >
          Complete Task
          </Button>
      </Card>

    </div>
  );
}

export default ToDoItem;
